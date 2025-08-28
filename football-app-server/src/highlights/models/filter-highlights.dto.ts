import { ApiPropertyOptional, OmitType, PartialType } from "@nestjs/swagger";
import { CreateHighlightDto } from "./create-highlight.dto";
import { IsDate, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class FilterHighlightsDto extends PartialType(
  OmitType(CreateHighlightDto, ['url', 'matchDate'] as const),
) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  team?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  startDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  endDate?: Date;
}
