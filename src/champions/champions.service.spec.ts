import { Test, TestingModule } from '@nestjs/testing';
import { ChampionsService } from './champions.service';
import { NotFoundException } from '@nestjs/common';

describe('ChampionsService', () => {
  let service: ChampionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampionsService],
    }).compile();

    service = module.get<ChampionsService>(ChampionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return an Champion', () => {
      service.create({
        name: '아칼리',
        passive: '암살자의 표식',
        q: '오연투척검',
        w: '황혼의 장막',
        e: '표창곡예',
        r: '무결처형',
      });
      const result = service.getOne(1);
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
        expect(true).toBeFalsy();
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Champion with ID 999 not found.');
      }
    });
  });

  describe('deleteOne', () => {
    it('delete a champion', () => {
      service.create({
        name: '아칼리',
        passive: '암살자의 표식',
        q: '오연투척검',
        w: '황혼의 장막',
        e: '표창곡예',
        r: '무결처형',
      });
      const beforeDeleteCount = service.getAll().length;
      service.deleteOne(1);
      const afterDeleteCount = service.getAll().length;

      expect(afterDeleteCount).toEqual(beforeDeleteCount - 1);
      try {
        service.getOne(1);
        expect(true).toBeFalsy();
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Champion with ID 1 not found.');
      }
    });
    it('should throw a NotFoundException', () => {
      try {
        service.deleteOne(999);
        expect(true).toBeFalsy();
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Champion with ID 999 not found.');
      }
    });
  });

  describe('create', () => {
    it('should create a champion', () => {
      const beforeCreateCount = service.getAll().length;
      const data = {
        name: '아칼리',
        passive: '암살자의 표식',
        q: '오연투척검',
        w: '황혼의 장막',
        e: '표창곡예',
        r: '무결처형',
      };
      service.create(data);
      const afterCreateCount = service.getAll().length;

      expect(afterCreateCount).toEqual(beforeCreateCount + 1);

      const createdData = service.getOne(1);
      expect(createdData.name).toEqual(data.name);
      expect(createdData.passive).toEqual(data.passive);
      expect(createdData.q).toEqual(data.q);
      expect(createdData.w).toEqual(data.w);
      expect(createdData.e).toEqual(data.e);
      expect(createdData.r).toEqual(data.r);
    });
  });

  describe('update', () => {
    it('should update a champion', () => {
      service.create({
        name: '아칼리',
        passive: '암살자의 표식',
        q: '오연투척검',
        w: '황혼의 장막',
        e: '표창곡예',
        r: '무결처형',
      });
      service.update(1, { name: 'Updated Test' });
      const updatedData = service.getOne(1);
      expect(updatedData.name).toEqual('Updated Test');
    });

    it('should throw a NotFoundException', () => {
      try {
        service.update(999, {});
        expect(true).toBeFalsy();
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Champion with ID 999 not found.');
      }
    });
  });
});
