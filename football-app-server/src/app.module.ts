import { Module } from '@nestjs/common';
import { HighlightsModule } from './highlights/highlights.module';
@Module({
  imports: [HighlightsModule],
})
export class AppModule {}
