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
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'royal',
      password: process.env.SQL_PASSWORD,
      database: 'portfolio',
      entities: [Projects, Users, Comments],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Projects, Users, Comments]),
  ],
  // eslint-disable-next-line prettier/prettier
  controllers: [AppController, ProjectsController, UserController, CommentsController],
  providers: [AppService, ProjectsService, UserService, CommentsService, AuthenticationService],
})
export class AppModule {}
