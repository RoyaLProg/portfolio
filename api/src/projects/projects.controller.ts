import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { Projects } from './projects.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll(): Promise<Projects[]> {
    return await this.projectsService.findAll();
  }
  @Post()
  async add(@Body() body): Promise<string> {
    if (
      !body.title ||
      !body.description ||
      !body.image ||
      !body.short_desc ||
      !body.groups
    ) {
      return 'Missing parameters';
    }
    const newProject = new Projects();
    newProject.title = body.title;
    newProject.description = body.description;
    newProject.image = body.image;
    newProject.short_desc = body.short_desc;
    newProject.groups = body.groups;
    if (body.github_link) newProject.github_link = body.github_link;
    else newProject.github_link = '';
    return await this.projectsService.create(newProject).then(
      () => {
        return 'Project created !';
      },
      () => {
        return 'Project creation failed !';
      },
    );
  }
  @Get(':id')
  async findOne(@Param() params): Promise<Projects> {
    return await this.projectsService.findOne(params.id);
  }
  @Post(':id')
  async update(@Param() param, @Body() body): Promise<string> {
    if (
      !body.title ||
      !body.description ||
      !body.image ||
      !body.short_desc ||
      !body.groups ||
      !body.github_link
    ) {
      return 'Missing parameters';
    }
    const Project = new Projects();
    Project.title = body.title;
    Project.description = body.description;
    Project.image = body.image;
    Project.short_desc = body.short_desc;
    Project.groups = body.groups;
    Project.github_link = body.github_link;
    return await this.projectsService.update(param.id, Project).then(
      () => {
        return 'Project updated !';
      },
      () => {
        return 'Project update failed !';
      },
    );
  }
  @Post(':id/delete')
  async delete(@Param() param): Promise<string> {
    return await this.projectsService.delete(param.id).then(
      () => {
        return 'Project deleted !';
      },
      () => {
        return 'Project deletion failed !';
      },
    );
  }
}
