import { Body, Controller, Get, InternalServerErrorException, Post, Param, Patch, BadRequestException, NotFoundException } from "@nestjs/common";
import { ProjectService } from "./projects.service";
import { Project } from "src/Entities/project.entity";

@Controller('projects')
export class ProjectController {
	
	constructor(private readonly projectService: ProjectService) {}

	@Get()
	async getProjects() {
		return this.projectService.getProjects();
	}

	@Post()
	async addProject(@Body() project: Project) {
		const added = this.projectService.addProject(project);
		if (!added) throw new InternalServerErrorException('Could not add project to database');
	}

	@Get(':id')
	async getProject(@Param('id') id: number): Promise<Project> {
		const project: Project | null = await this.projectService.getProject(id);
		if (!project) throw new NotFoundException('this project does not seem to exist');
		return project;
	}

	@Patch(':id')
	async updateProject(@Param('id') id: number, @Body() project: Project): Promise<Project> {
		if (+id !== project.id) throw new BadRequestException();
		const result = await this.projectService.updateProject(project);
		if (!result) throw new BadRequestException();
		return result;
	}
}
                                                     
