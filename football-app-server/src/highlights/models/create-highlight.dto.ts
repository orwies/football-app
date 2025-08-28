import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsString } from "class-validator";

export class CreateHighlightDto {
  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  homeTeam: string;

  @ApiProperty()
  @IsString()
  awayTeam: string;

  @ApiProperty()
  @IsString()
  competition: string;

  @ApiProperty({ type: String, format: 'date-time' })
  @Type(() => Date)
  @IsDate()
  @IsDateString()
  matchDate: Date;
}