import { Module } from '@nestjs/common';
import { ChampionsModule } from './champions/champions.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [ChampionsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
