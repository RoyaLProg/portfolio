import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './Auth/auth.controller';
import { ProjectService } from './Projects/projects.service';
import { ProjectController } from './Projects/projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillCategory } from './Entities/skillCategory.entity';
import { Skill } from './Entities/skill.entity';
import { Project } from './Entities/project.entity';
import { Auth } from './Entities/auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './Auth/jwtConstants';
import { AuthService } from './Auth/auth.service';

@Module({
  imports: [TypeOrmModule.forRoot({
	type: 'postgres',
	host: 'database',
	port: 5432,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	entities: [Project, SkillCategory, Skill, Auth],
	synchronize: true
  }),
  TypeOrmModule.forFeature([Project, SkillCategory, Skill, Auth]),
  JwtModule.register({
	global: true,
	secret: jwtConstants.secret,
	signOptions: { expiresIn: '1h' }
  })
  ],
  controllers: [AppController, AuthController, ProjectController],
  providers: [AppService, AuthService, ProjectService],
  exports: [],
})
export class AppModule {}
