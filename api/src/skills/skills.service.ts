import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Skills} from './skills.entity';

@Injectable()
export class SkillsService {
  constructor(
      @InjectRepository(Skills) private readonly skillsRepository:
          Repository<Skills>,
  ) {}

  async getSkills(): Promise<Skills[]> {
    return await this.skillsRepository.find();
  }

  async getSkill(id: number): Promise<Skills> {
    return await this.skillsRepository.findOneBy({id});
  }

  async createSkill(skill: Skills): Promise<Skills> {
    return await this.skillsRepository.save(skill);
  }

  async updateSkill(id: number, skill: Skills): Promise<void> {
    await this.skillsRepository.update(id, skill);
  }

  async deleteSkill(id: number): Promise<void> {
    await this.skillsRepository.delete(id);
  }
}
