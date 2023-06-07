import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoDto } from './todo.dto';
import { DeleteResult, Repository } from 'typeorm';
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

  async updateTodo(id: number, body: TodoDto): Promise<Todo> {
    const todo = await this.repository.findOne({ where : { id: id}});
    if (!todo) {
      // Manejo del error si el todo no existe
      throw new Error(`Todo with ID ${id} not found.`);
    }
    todo.name = body.name;
    // Otros campos a actualizar
    return this.repository.save(todo);
  }

  async deleteTodo(id: number): Promise<DeleteResult> {
    const todo = await this.repository.findOne({ where : { id: id}});
    if (!todo) {
      // Manejo del error si el todo no existe
      throw new Error(`Todo with ID ${id} not found.`);
    }
   
    // Otros campos a actualizar
    return this.repository.delete(id);
  }

  


  
}
