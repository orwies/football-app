import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { HighlightDto } from './models/highlight.dto';
import { CreateHighlightDto } from './models/create-highlight.dto';
import { HighlightsStorageService } from './storage/highlights-storage.service';
import { FilterHighlightsDto } from './models/filter-highlights.dto';

@Injectable()
export class HighlightsService {
  constructor(private readonly highlightsStorage: HighlightsStorageService) {}

  public getHighlightById(id: string): HighlightDto {
    return this.highlightsStorage.getHighlightById(id);
  }

  public getHighlights(filter: FilterHighlightsDto): HighlightDto[] {
    const highlights = this.highlightsStorage.getHighlights();
    if (Object.values(filter).every((value) => value === undefined)) {
      return highlights;
    }

    return highlights.filter(
      ({ competition, homeTeam, awayTeam, matchDate }) => {
        for (const key of Object.keys(
          filter,
        ) as (keyof FilterHighlightsDto)[]) {
          const value = filter[key];
          if (!value) continue;

          switch (key) {
            case 'team': {
              const teamValue = (value as string).toLowerCase();
              if (
                !homeTeam.toLowerCase().includes(teamValue) &&
                !awayTeam.toLowerCase().includes(teamValue)
              ) {
                  return false;
              }
              break;
              }

            case 'competition':
              if (
                competition.toLowerCase() !==
                (value as FilterHighlightsDto['competition'])?.toLowerCase()
              ) {
                return false;
              }
              break;

            case 'homeTeam': {
              const ht = (value as string).toLowerCase();
              if (!homeTeam.toLowerCase().includes(ht)) {
                  return false;
              }
              break;
            }

            case 'awayTeam': {
              const at = (value as string).toLowerCase();
              if (!awayTeam.toLowerCase().includes(at)) {
                  return false;
              }
              break;
            }


            case 'startDate': {
              const startDate = value as FilterHighlightsDto['startDate'];
              if (startDate && matchDate < new Date(startDate)) {
                return false;
              }
              break;
            }

            case 'endDate': {
              const endDate = value as FilterHighlightsDto['endDate'];
              if (endDate && matchDate > new Date(endDate)) {
                return false;
              }
              break;
            }
          }
        }
        return true;
      },
    );
  }

  public addHighlight(createDto: CreateHighlightDto) {
    const highlight: HighlightDto = {
      ...createDto,
      id: uuid(),
      uploadDate: new Date(),
      likes: 0,
      thumbnailUrl: '',
    };
    this.highlightsStorage.addHighlight(highlight);
  }
}
