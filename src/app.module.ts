import { Module } from '@nestjs/common';
import { ChampionsController } from './champions/champions.controller';
import { ChampionsService } from './champions/champions.service';

@Module({
  imports: [],
  controllers: [ChampionsController],
  providers: [ChampionsService],
})
export class AppModule {}
