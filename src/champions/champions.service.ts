import { Injectable } from '@nestjs/common';
import { Champion } from './entities/champion.entity';

@Injectable()
export class ChampionsService {
  private champions: Champion[] = [];

  getAll(): Champion[] {
    return this.champions;
  }

  getOne(id: string): Champion {
    return this.champions.find((champion) => champion.id === +id);
  }

  deleteOne(id: string): boolean {
    this.champions.filter((champion) => champion.id !== +id);
    return true;
  }

  create(championData: Champion) {
    this.champions.push({
      id: this.champions.length + 1,
      ...championData,
    });
  }
}
