import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 들어오는 데이터에서 유효하지 않은 속성을 자동으로 제거
      forbidNonWhitelisted: true, // dto에 정의되지 않은 속성을 보낼시 BadRequest 발생
      transform: true, // 들어오는 데이터를 실제 타입으로 변환해줌 (원래는 string)
    }),
  );
  await app.listen(3000);
}
bootstrap();
