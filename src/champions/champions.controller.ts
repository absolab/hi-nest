import { ChampionsService } from './champions.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Champion } from './entities/champion.entity';
import { CreateChampionDto } from './dto/create-champion.dto';

@Controller('champions')
export class ChampionsController {
  constructor(private readonly championsService: ChampionsService) {}

  @Get()
  getAll(): Champion[] {
    return this.championsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') championId: string): Champion {
    return this.championsService.getOne(championId);
  }

  @Post()
  create(@Body() championData: CreateChampionDto) {
    return this.championsService.create(championData);
  }

  @Delete(':id')
  remove(@Param('id') championId: string) {
    return this.championsService.deleteOne(championId);
  }

  @Patch(':id')
  patch(@Param('id') championId: string, @Body() updateData) {
    return this.championsService.update(championId, updateData);
  }
}
