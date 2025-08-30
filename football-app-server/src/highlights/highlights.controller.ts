import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { FilterHighlightsDto } from './models/filter-highlights.dto';
import { HighlightsService } from './highlights.service';
import { HighlightDto } from './models/highlight.dto';
import { CreateHighlightDto } from './models/create-highlight.dto';

@ApiTags('highlights')
@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @Get()
  @ApiOperation({ summary: 'Get highlights with optional filters' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of highlights',
    type: [HighlightDto],
  })
  getHighlights(@Query() filter: FilterHighlightsDto): HighlightDto[] {
    return this.highlightsService.getHighlights(filter);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new highlight' })
  @ApiBody({ type: CreateHighlightDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The highlight has been successfully created.',
    type: HighlightDto,
  })
  addHighlight(@Body() highlight: CreateHighlightDto) {
    this.highlightsService.addHighlight(highlight);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get highlight by ID' })
  @ApiParam({ name: 'id', type: String, description: 'Highlight ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The highlight',
    type: HighlightDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Highlight not found',
  })
  getHighlightById(@Param('id') id: string): HighlightDto {
    return this.highlightsService.getHighlightById(id);
  }
}
