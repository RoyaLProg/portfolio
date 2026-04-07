import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectService } from './Projects/projects.service';
import { ProjectController } from './Projects/projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillCategory } from './Entities/skillCategory.entity';
import { Skill } from './Entities/skill.entity';
import { Project } from './Entities/project.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
	type: 'postgres',
	host: 'database',
	port: 5432,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	entities: [Project, SkillCategory, Skill],
	synchronize: true
  }),
  TypeOrmModule.forFeature([Project, SkillCategory, Skill])],
  controllers: [AppController, ProjectController],
  providers: [AppService, ProjectService],
  exports: [],
})
export class AppModule {}
