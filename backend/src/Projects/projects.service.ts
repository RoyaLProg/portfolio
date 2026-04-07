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

	async getProject(id: number): Promise<Project> {
		return this.projectRepository.find({where: {id: id}});
	}
}
