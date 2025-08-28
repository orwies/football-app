import { Injectable } from '@nestjs/common';
import { HighlightDto } from '../models/highlight.dto';
import { HighlightsStorageService } from './highlights-storage.service';


@Injectable()
export class InMemoryHighlightsStorageService implements HighlightsStorageService {
    private readonly highlights: HighlightDto[];

    constructor() {
        this.highlights = [];
    }
    public getHighlightById(id: string): HighlightDto {
        const highlight = this.highlights.find(h => h.id === id);
        if (highlight) {
            return highlight
        } else {
            throw new Error("HighlightDto not found");
        }
    }

    public getHighlights(): HighlightDto[] {
        return this.highlights
    }

    public addHighlight(highlight: HighlightDto) {
        this.highlights.push(highlight)
    }
}