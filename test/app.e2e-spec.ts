import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
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

    it('POST 201', () => {
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
    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/champions')
        .send({
          name: '아칼리',
          passive: '암살자의 표식',
          q: '오연투척검',
          w: '황혼의 장막',
          e: '표창곡예',
          r: '무결처형',
          other: 'thing',
        })
        .expect(400);
    });
    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/champions').expect(404);
    });
  });

  describe('/champions/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/champions/1').expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer()).get('/champions/999').expect(404);
    });
    it('PATCH', () => {
      return request(app.getHttpServer())
        .patch('/champions/1')
        .send({ name: 'Updated Test' })
        .expect(200);
    });
    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/champions/1').expect(200);
    });
  });
});
