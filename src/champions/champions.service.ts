import { Injectable, NotFoundException } from '@nestjs/common';
import { Champion } from './entities/champion.entity';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionsService {
  private champions: Champion[] = [];

  getAll(): Champion[] {
    return this.champions;
  }

  getOne(id: number): Champion {
    const champion = this.champions.find((champion) => champion.id === id);
    if (!champion) {
      throw new NotFoundException(`Champion with ID ${id} not found.`);
    }
    return champion;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.champions = this.champions.filter((champion) => champion.id !== id);
  }

  create(championData: CreateChampionDto) {
    this.champions.push({
      id: this.champions.length + 1,
      ...championData,
    });
  }

  update(id: number, updateData: UpdateChampionDto) {
    const champion = this.getOne(id);
    this.deleteOne(id);
    this.champions.push({ ...champion, ...updateData });
  }
}
