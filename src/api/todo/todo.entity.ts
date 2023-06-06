import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'todo', schema: 'todo' })
export class Todo {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  public id: number;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'name',
  })
  public name: string;

  @Column({
    type: 'boolean',
    name: 'active',
    default: false,
  })
  public isActive: boolean;

  @Column({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date;

  @Column({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public updatedAt: Date;
}
