// import { Injectable } from "@nestjs/common";
// import { HighlightsStorageService } from "./highlights-storage.service";
// import { HighlightDto } from "../models/highlight.dto";
// import { FilterHighlightsDto } from "../models/filter-highlights.dto";

// @Injectable()
// export class MongoHighlightsStorageService implements HighlightsStorageService {
//     private readonly highlights: HighlightDto[];

//     constructor() {
//         this.highlights = [];
//     }
//     public getHighlightById(id: string): HighlightDto {
//         const highlight = this.highlights.find(h => h.id === id);
//         if (highlight) {
//             return highlight
//         } else {
//             throw new Error("HighlightDto not found");
//         }
//     }
//     public getFilteredHighlights(filter: FilterHighlightsDto): HighlightDto[] {
//         return this.highlights.filter((highlight) => {
//             if (competition && highlight.competition !== competition) return false;

//             if (team && highlight.homeTeam !== team && highlight.awayTeam !== team) return false;

//             if (date && highlight.matchDate.toDateString() !== date.toDateString()) return false;

//             return true;
//         });
//     }
// }
