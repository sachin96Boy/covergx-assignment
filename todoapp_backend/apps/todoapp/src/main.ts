import { NestFactory } from '@nestjs/core';
import { TodosModule } from './todos.module';
import { ValidationPipe } from '@nestjs/common';

import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(TodosModule);

  app.useGlobalPipes(new ValidationPipe());

  const logger = app.get(Logger);

  app.useLogger(logger);

  await app.listen(process.env.port ?? 3000);
}
bootstrap();
