import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoDto } from './todo.dto';
import { Repository } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
@Injectable()
export class TodoService {
  @InjectRepository(Todo)
  private readonly repository: Repository<Todo>;

  public getTodo(id: any): Promise<Todo> {
    return this.repository.findOne({ where: { id } });
  }

  public getTodos(options: IPaginationOptions): Promise<Pagination<Todo>> {
    return paginate<Todo>(this.repository, options);
  }

  public createTodo(body: TodoDto): Promise<Todo> {
    const user: Todo = new Todo();

    user.name = body.name;

    return this.repository.save(user);
  }
}
