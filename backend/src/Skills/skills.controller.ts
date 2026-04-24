import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { SkillService } from "./skills.service";
import { Skill } from "src/Entities/skill.entity";
import { SkillCategory } from "src/Entities/skillCategory.entity";
import { AuthGuard } from "src/Auth/auth.guard";

@Controller('skills')
export class SkillController {

	constructor(
		private readonly skillService: SkillService
	) {}


	@Get()
	async getSkills() {
		return this.skillService.getSkills();
	}

	@UseGuards(AuthGuard)
	@Post()
	async addSkill(@Body() skill: Skill) {
		return this.skillService.addSkill(skill);
	}

	@Get('category')
	async getCateries() {
		return this.skillService.getCategories();
	}

	@UseGuards(AuthGuard)
	@Post('category')
	async addCategory(@Body() skillCategory: SkillCategory) {
		return this.skillService.addCategory(skillCategory);
	}
}
