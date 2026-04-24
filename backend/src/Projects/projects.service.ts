import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "src/Entities/project.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProjectService {
	constructor(
		@InjectRepository(Project)
		private projectRepository: Repository<Project>
	){}

	async getProjects(): Promise<Project[]> {
		return this.projectRepository.find();
	}

	async addProject(project: Project): Promise<Project> {
		return this.projectRepository.save(project);
	}

	async getProject(id: number): Promise<Project | null> {
		return this.projectRepository.findOne({where: {id: id}});
	}

	async updateProject(project: Project): Promise<Project | null> {
		const result = await this.projectRepository.update({id: project.id}, project); 
		if (result.affected === undefined || result.affected !== 1) return null;
		else return project;
	}
}
