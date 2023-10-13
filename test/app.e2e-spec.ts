import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my champion home');
  });

  describe('/champions', () => {
    it('GET', () => {
      return request(app.getHttpServer())
        .get('/champions')
        .expect(200)
        .expect([]);
    });

    it('POST', () => {
      return request(app.getHttpServer())
        .post('/champions')
        .send({
          name: '아칼리',
          passive: '암살자의 표식',
          q: '오연투척검',
          w: '황혼의 장막',
          e: '표창곡예',
          r: '무결처형',
        })
        .expect(201);
    });
    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/champions').expect(404);
    });
  });
});
