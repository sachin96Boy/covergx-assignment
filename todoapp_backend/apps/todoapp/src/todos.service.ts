import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from '@app/common/database/database.service';

@Injectable()
export class TodosService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTodoDto: CreateTodoDto) {
    console.log('createTodoDto', createTodoDto);

    const todo = await this.databaseService.todo.create({
      data: {
        title: createTodoDto.title,
        content: createTodoDto.description,
        completed: createTodoDto.completed,
      },
    });
    console.log('todo', todo);
    return todo;
  }

  findAll() {
    return this.databaseService.todo.findMany();
  }

  findOne(id: number) {
    return this.databaseService.todo.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.databaseService.todo.update({
      where: {
        id,
      },
      data: {
        title: updateTodoDto.title,
        content: updateTodoDto.description,
        completed: updateTodoDto.completed,
      },
    });
  }

  remove(id: number) {
    return this.databaseService.todo.delete({
      where: {
        id,
      },
    });
  }
}
