import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsString, Min } from "class-validator";
import { CreateHighlightDto } from "./create-highlight.dto";
import { Type } from "class-transformer";

export class HighlightDto extends CreateHighlightDto {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty({ type: String, format: 'date-time' })
    @Type(() => Date)
    @IsDate()
    uploadDate: Date;

    @ApiProperty()
    @IsInt()
    @Min(0)
    likes: number;

    @ApiProperty()
    @IsString()
    thumbnailUrl: string;
}