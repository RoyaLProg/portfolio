import {
  Body,
  Controller,
  Param,
  Headers,
  HttpException,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skills } from './skills.entity';
import { Get, Post } from '@nestjs/common';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { Response } from 'src/user/response';

@Controller('skills')
export class SkillsController {
  constructor(
    private readonly skillsService: SkillsService,
    private readonly authenticationService: AuthenticationService,
  ) {}

  @Get()
  async getAllSkills(): Promise<Skills[]> {
    return await this.skillsService.getSkills();
  }

  @Get('/:id')
  async getSkill(@Param('id') id: number): Promise<Skills> {
    return await this.skillsService.getSkill(id);
  }

  @Post()
  async createSkill(
    @Body() skill: Skills,
    @Headers() headers,
  ): Promise<Response> {
    if (!headers.authorization) throw new HttpException('Unauthorized', 401);
    const token = headers.authorization.split(' ')[1];
    const decoded = await this.authenticationService.validateToken(token);
    if (!decoded) throw new HttpException('Unauthorized', 401);
    if (!skill.name || !skill.advancement || !skill.description) {
      return {
        success: false,
        message: 'Missing fields',
        data: null,
      };
    } else {
      return await this.skillsService.createSkill(skill).then(
        () => {
          return {
            success: true,
            message: 'Skill created !',
            data: null,
          };
        },
        () => {
          return {
            success: false,
            message: 'Skill creation failed !',
            data: null,
          };
        },
      );
    }
  }
  @Post('/:id')
  async updateSkill(
    @Param('id') id: number,
    @Body() skill: Skills,
    @Headers() headers,
  ): Promise<Response> {
    if (!headers.authorization) throw new HttpException('Unauthorized', 401);
    const token = headers.authorization.split(' ')[1];
    const decoded = await this.authenticationService.validateToken(token);
    if (!decoded) throw new HttpException('Unauthorized', 401);
    if (!skill.name || !skill.advancement || !skill.description) {
      return {
        success: false,
        message: 'Missing fields',
        data: null,
      };
    }
    return await this.skillsService.updateSkill(id, skill).then(
      () => {
        return {
          success: true,
          message: 'Skill updated !',
          data: null,
        };
      },
      () => {
        return {
          success: false,
          message: 'Skill update failed !',
          data: null,
        };
      },
    );
  }

  @Post('/:id/delete')
  async deleteSkill(
    @Param('id') id: number,
    @Headers() headers,
  ): Promise<Response> {
    if (!headers.authorization) throw new HttpException('Unauthorized', 401);
    const token = headers.authorization.split(' ')[1];
    const decoded = await this.authenticationService.validateToken(token);
    if (!decoded) throw new HttpException('Unauthorized', 401);
    return await this.skillsService.deleteSkill(id).then(
      () => {
        return {
          success: true,
          message: 'Skill deleted !',
          data: null,
        };
      },
      () => {
        return {
          success: false,
          message: 'Skill deletion failed !',
          data: null,
        };
      },
    );
  }
}
