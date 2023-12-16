import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsController } from './projects/projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projects } from './projects/projects.entity';
import { ProjectsService } from './projects/projects.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { Users } from './user/user.entity';
import { CommentsController } from './comments/comments.controller';
import { Comments } from './comments/comments.entity';
import { CommentsService } from './comments/comments.service';
import { AuthenticationService } from './authentication/authentication.service';
import { SkillsController } from './skills/skills.controller';
import { Skills } from './skills/skills.entity';
import { SkillsService } from './skills/skills.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'royal',
      password: process.env.SQL_PASSWORD,
      database: 'portfolio',
      entities: [Projects, Users, Comments, Skills],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Projects, Users, Comments, Skills]),
  ],
  controllers: [
    AppController,
    ProjectsController,
    UserController,
    CommentsController,
    SkillsController,
  ],
  providers: [
    AppService,
    ProjectsService,
    UserService,
    CommentsService,
    AuthenticationService,
    SkillsService,
  ],
})
export class AppModule {}
