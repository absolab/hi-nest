import { PartialType } from '@nestjs/mapped-types';
import { CreateChampionDto } from './create-champion.dto';

// export class UpdateChampionDto {
//   @IsString()
//   readonly name?: string;
//   @IsString()
//   readonly passive?: string;
//   @IsString()
//   readonly q?: string;
//   @IsString()
//   readonly w?: string;
//   @IsString()
//   readonly e?: string;
//   @IsString()
//   readonly r?: string;
// }

export class UpdateChampionDto extends PartialType(CreateChampionDto) {}
