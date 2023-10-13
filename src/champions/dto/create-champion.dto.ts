import { IsString } from 'class-validator';

export class CreateChampionDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly passive: string;
  @IsString()
  readonly q: string;
  @IsString()
  readonly w: string;
  @IsString()
  readonly e: string;
  @IsString()
  readonly r: string;

  /*
  @IsNumber()
  @IsString({each:true}) -> 배열 검사
  */
}
