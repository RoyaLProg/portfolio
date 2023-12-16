import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Comments} from './comments.entity';

@Injectable()
export class CommentsService {
  constructor(
      @InjectRepository(Comments) private readonly commentsRepository:
          Repository<Comments>,
  ) {}

  async findAll(): Promise<Comments[]> {
    return await this.commentsRepository.find();
  }

  async findOne(id: number): Promise<Comments> {
    return await this.commentsRepository.findOneBy({id});
  }

  async findByProject(project_id: number): Promise<Comments[]> {
    return await this.commentsRepository.find({
      where : {
        project_id : project_id,
      },
    });
  }

  async create(comments: Comments): Promise<Comments> {
    return await this.commentsRepository.save(comments);
  }

  async update(id: number, comments: Comments): Promise<void> {
    comments.id = id;
    await this.commentsRepository.update(id, comments);
  }

  async delete(id: number): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}
