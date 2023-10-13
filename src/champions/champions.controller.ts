import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('champions')
export class ChampionsController {
  @Get()
  getAll() {
    return 'This will retrun all champions';
  }

  @Get('search')
  search(@Query('name') searchingName: string) {
    return `We are searching for a champion made after: ${searchingName}`;
  }

  @Get(':id')
  getOne(@Param('id') championId: string) {
    return `This will return one champions with the id: ${championId}`;
  }

  @Post()
  create(@Body() championData) {
    return championData;
  }

  @Delete(':id')
  remove(@Param('id') championId: string) {
    return `This will delete a champion with the id: ${championId}`;
  }

  @Patch(':id')
  patch(@Param('id') championId: string, @Body() updateData) {
    return {
      updatedChampion: championId,
      ...updateData,
    };
  }
}
