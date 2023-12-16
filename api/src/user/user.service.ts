import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import {Repository} from 'typeorm';

import {Response} from './response';
import {Users} from './user.entity';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(Users) private readonly userRepository:
          Repository<Users>,
  ) {}

  private readonly RSA_PRIVATE_KEY = fs.readFileSync('./src/keys/jwtRS256.key');

  async connect(username: string, password: string): Promise<Response> {
    const user = await this.userRepository.findOne({
      where : {username : username, password : password},
    });
    if (!user) {
      return {
        success : false,
        message : 'Wrong username or password',
        data : null,
      };
    }
    const jwtBearerToken = jwt.sign({}, this.RSA_PRIVATE_KEY, {
      expiresIn : '2h',
      algorithm : 'RS256',
      subject : user.id.toString(),
    });
    return {
      success : true,
      message : 'Successfully connected',
      data : {token : jwtBearerToken, expiresIn : 120},
    };
  }
  async changePassword(id: number, password: string): Promise<Response> {
    const user = await this.userRepository.findOne({
      where : {id : id},
    });
    if (!user) {
      return {
        success : false,
        message : 'User not found',
        data : null,
      };
    }
    user.password = password;
    await this.userRepository.update(id, user);
    return {
      success : true,
      message : 'Password changed',
      data : null,
    };
  }

  async changeUsername(id: number, username: string): Promise<Response> {
    return await this.userRepository.update(id, {username : username})
        .then(() => {
          return {
            success : true,
            message : 'Username changed',
            data : null,
          };
        })
        .catch(() => {
          return {
            success : false,
            message : 'Username already taken',
            data : null,
          };
        });
  }

  async findOne(id: number): Promise<Users> {
    return await this.userRepository.findOneBy({id});
  }
}
