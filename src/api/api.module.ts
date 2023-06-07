import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [TodoModule, HealthModule]
})
export class ApiModule {}
