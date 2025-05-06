import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { LoggerModule } from 'nestjs-pino';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
            singleLine: true,
          },
        },
      },
    }),
  ],
})
export class TodosModule {}
