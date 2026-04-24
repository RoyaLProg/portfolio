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

	async updateSkill(skill: Skill) {
		const ret = await this.skillRepository.update({ id: skill.id }, skill);

		return ret.affected === 1;
	}

	async getCategories() {
		return this.skillCategoryRepository.find();
	}

	async addCategory(skillCategory: SkillCategory) {
		return this.skillCategoryRepository.save(skillCategory);
	}

	async updateSkillCategory(skillCategory: SkillCategory) {
		const ret = await this.skillCategoryRepository.update({ id: skillCategory.id }, skillCategory);

		return ret.affected === 1;
	}

	// TODO: add new function for findOne (if necesarry)
}
