import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text')
  username: string;

  @Column('text')
  comment: string;

  @Column('date')
  date: Date;

  @Column('int')
  project_id: number;
}
