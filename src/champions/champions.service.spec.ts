import { Test, TestingModule } from '@nestjs/testing';
import { ChampionsService } from './champions.service';

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
});
