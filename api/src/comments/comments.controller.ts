import {
  Body,
  Controller,
  Param,
  Headers,
  HttpException,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comments } from './comments.entity';
import { Get, Post } from '@nestjs/common';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly authenticationService: AuthenticationService,
  ) {}

  @Get('')
  async findAll(): Promise<Comments[]> {
    return await this.commentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Comments> {
    return await this.commentsService.findOne(param.id);
  }

  @Get('/project/:project_id')
  async findByProject(@Param() param): Promise<Comments[]> {
    return await this.commentsService.findByProject(param.project_id);
  }

  @Post('')
  async create(@Body() body, @Headers() headers): Promise<string> {
    if (!headers.authorization) throw new HttpException('Unauthorized', 401);
    const token = headers.authorization.split(' ')[1];
    const decoded = await this.authenticationService.validateToken(token);
    if (!decoded) throw new HttpException('Unauthorized', 401);

    if (!body.username || !body.comment || !body.project_id || !body.date) {
      return 'Missing parameters';
    }
    const comments: Comments = {
      username: body.username,
      comment: body.comment,
      project_id: body.project_id,
      date: body.date,
    };

    await this.commentsService.create(comments).then(
      () => {
        return 'Success';
      },
      () => {
        return 'Error';
      },
    );
  }

  @Post(':id')
  async update(id: number, @Body() body, @Headers() headers): Promise<string> {
    if (!headers.authorization) throw new HttpException('Unauthorized', 401);
    const token = headers.authorization.split(' ')[1];
    const decoded = await this.authenticationService.validateToken(token);
    if (!decoded) throw new HttpException('Unauthorized', 401);
    if (!body.username || !body.comment || !body.project_id || !body.date) {
      return 'Missing parameters';
    }
    const comments: Comments = {
      username: body.username,
      comment: body.comment,
      project_id: body.project_id,
      date: body.date,
    };
    await this.commentsService.update(id, comments).then(
      () => {
        return 'Success';
      },
      () => {
        return 'Error';
      },
    );
  }

  @Post(':id/delete')
  async delete(id: number, @Headers() headers): Promise<void> {
    if (!headers.authorization) throw new HttpException('Unauthorized', 401);
    const token = headers.authorization.split(' ')[1];
    const decoded = await this.authenticationService.validateToken(token);
    if (!decoded) throw new HttpException('Unauthorized', 401);
    await this.commentsService.delete(id).then(
      () => {
        return 'Success';
      },
      () => {
        return 'Error';
      },
    );
  }
}
