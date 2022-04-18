import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Projects } from './projects.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Projects)
    private readonly projectsRepository: Repository<Projects>,
  ) {}

  async findAll(): Promise<Projects[]> {
    return await this.projectsRepository.find();
  }

  async findOne(id: number): Promise<Projects> {
    return await this.projectsRepository.findOne(id);
  }

  async create(projects: Projects): Promise<Projects> {
    return await this.projectsRepository.save(projects);
  }

  async update(id: number, projects: Projects): Promise<void> {
    await this.projectsRepository.update(id, projects);
  }

  async delete(id: number): Promise<void> {
    this.projectsRepository.delete(id);
  }
}
