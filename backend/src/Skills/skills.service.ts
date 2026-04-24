import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Skill } from "src/Entities/skill.entity";
import { SkillCategory } from "src/Entities/skillCategory.entity";
import { Repository } from "typeorm";

@Injectable()
export class SkillService {
	constructor(
		@InjectRepository(SkillCategory)
		private readonly skillCategoryRepository: Repository<SkillCategory>,
		@InjectRepository(Skill)
		private readonly skillRepository: Repository<Skill>
	) {}

	async getSkills() {
		return this.skillCategoryRepository.find();
	}

	async addSkill(skill: Skill) {
		return this.skillRepository.save(skill);
	}

	async getCategories() {
		return this.skillCategoryRepository.find();
	}

	async addCategory(skillCategory: SkillCategory) {
		return this.skillCategoryRepository.save(skillCategory);
	}

	// TODO: add new function for findOne (if necesarry)
	// add update logics too
}
