import * as express from 'express';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FilterHighlightsDto } from './highlights/models/filter-highlights.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/videos', express.static(join(__dirname, '../../videos')));
  app.use('/thumbnails', express.static(join(__dirname, '../../thumbnails')));
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Highlights API')
    .setDescription('API for managing sports highlights')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [FilterHighlightsDto],
  });
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
