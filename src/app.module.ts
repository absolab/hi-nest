import { Module } from '@nestjs/common';
import { ChampionsController } from './champions/champions.controller';

@Module({
  imports: [],
  controllers: [ChampionsController],
  providers: [],
})
export class AppModule {}
