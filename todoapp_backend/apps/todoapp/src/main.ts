import { NestFactory } from '@nestjs/core';
import { TodosModule } from './todos.module';
import { ValidationPipe } from '@nestjs/common';

import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(TodosModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  const logger = app.get(Logger);
  app.useLogger(logger);

  const config = new DocumentBuilder()
    .setTitle('todos docs')
    .setDescription('Todos API description')
    .setVersion('1.0')
    .addTag('todos')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
