import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { HighlightDto } from '../models/highlight.dto';
import { HighlightsStorageService } from './highlights-storage.service';

@Injectable()
export class InMemoryHighlightsStorageService
  implements HighlightsStorageService
{
  private readonly highlights: HighlightDto[];

  constructor() {
    this.highlights = Array.from({ length: 25 }, () => ({
      url: 'highlight1.mp4',
      homeTeam: 'Arsenal',
      awayTeam: 'Tottenham',
      competition: 'Premier League',
      matchDate: new Date(2025, 8, 12),
      id: uuid(),
      uploadDate: new Date(2025, 8, 13),
      likes: 750,
      thumbnailUrl: 'kdb.jpg',
    }));
  }
  public getHighlightById(id: string): HighlightDto {
    const highlight = this.highlights.find((h) => h.id === id);
    if (highlight) {
      return highlight;
    } else {
      throw new Error('HighlightDto not found');
    }
  }

  public getHighlights(): HighlightDto[] {
    return this.highlights;
  }

  public addHighlight(highlight: HighlightDto) {
    this.highlights.push(highlight);
  }
}
