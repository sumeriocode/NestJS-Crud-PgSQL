import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../todo/todo.entity';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [TerminusModule, HttpModule, TypeOrmModule.forFeature([Todo])],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
