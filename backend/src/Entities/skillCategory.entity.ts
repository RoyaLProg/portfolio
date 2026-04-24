import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Skill } from "./skill.entity";

@Entity()
export class SkillCategory {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@OneToMany(() => Skill, skill => skill.category)
	skills: Skill[];

	@Column()
	color: string;
}
