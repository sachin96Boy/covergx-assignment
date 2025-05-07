import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { LoggerModule } from 'nestjs-pino';
import { DatabaseModule } from '@app/common';

@Module({
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
    DatabaseModule,
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
