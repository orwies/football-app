import { Injectable } from '@nestjs/common';
import { HighlightDto } from '../models/highlight.dto';

@Injectable()
export abstract class HighlightsStorageService {
  public abstract getHighlights(): HighlightDto[];
  public abstract getHighlightById(id: string): HighlightDto;
  public abstract addHighlight(highlight: HighlightDto);
}
