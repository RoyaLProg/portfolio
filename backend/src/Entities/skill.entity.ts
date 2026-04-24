import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SkillCategory } from "./skillCategory.entity";

@Entity()
export class Skill {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	showPercentage: boolean;

	@Column({nullable: true})
	percentage?: number;

	@ManyToOne(() => SkillCategory, skillCategorie => skillCategorie.id)
	category: SkillCategory;
}
