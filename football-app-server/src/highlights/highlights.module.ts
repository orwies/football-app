import { Module } from '@nestjs/common';
import { HighlightsController } from './highlights.controller';
import { HighlightsService } from './highlights.service';
import { HighlightsStorageService } from './storage/highlights-storage.service';
import { InMemoryHighlightsStorageService } from './storage/in-memory-highlights-storage.service';

@Module({
  imports: [],
  controllers: [HighlightsController],
  providers: [
    HighlightsService,
    {
      provide: HighlightsStorageService,
      useClass: InMemoryHighlightsStorageService,
    },
  ],
})
export class HighlightsModule {}
