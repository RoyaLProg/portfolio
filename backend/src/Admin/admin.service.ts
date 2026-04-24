import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "src/Entities/project.entity";
import { Skill } from "src/Entities/skill.entity";
import { SkillCategory } from "src/Entities/skillCategory.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdminService {
	constructor(
		@InjectRepository(Project)
		private readonly projectRepository: Repository<Project>,
		@InjectRepository(SkillCategory)
		private readonly skillCategoryRepository: Repository<SkillCategory>,
		@InjectRepository(Skill)
		private readonly skillRepository: Repository<Skill>
	) {}

	async nukeProjects() {
		await this.projectRepository.deleteAll();
	}

	async nukeSkills() {
		await this.skillCategoryRepository.deleteAll();
		await this.skillRepository.deleteAll();
	}
}
