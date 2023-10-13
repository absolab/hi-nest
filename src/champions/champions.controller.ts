import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('champions')
export class ChampionsController {
  @Get()
  getAll() {
    return 'This will retrun all champions';
  }

  @Get('/:id')
  getOne(@Param('id') championId: string) {
    return `This will return one champions with the id: ${championId}`;
  }

  @Post()
  create() {
    return 'This will create a champion';
  }

  @Delete('/:id')
  remove(@Param('id') championId: string) {
    return `This will delete a champion with the id: ${championId}`;
  }

  @Patch('/:id')
  patch(@Param('id') championId: string) {
    return `This will patch a champion with the id: ${championId}`;
  }
}
