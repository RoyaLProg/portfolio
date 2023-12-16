import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Skills {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column('text')
  name: string;
  @Column('int')
  advancement: number;
  @Column('text')
  description: string;
}
