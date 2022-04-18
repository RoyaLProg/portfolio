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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'royal',
      password: process.env.SQL_PASSWORD,
      database: 'portfolio',
      entities: [Projects, Users],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Projects, Users]),
  ],
  controllers: [AppController, ProjectsController, UserController],
  providers: [AppService, ProjectsService, UserService],
})
export class AppModule {}
