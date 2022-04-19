import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  image: string;

  @Column('text')
  short_desc: string;

  @Column('text')
  groups: string;

  @Column('text')
  github_link: string;
}
