import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { Response } from './response';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  private readonly RSA_PRIVATE_KEY = fs.readFileSync('./src/keys/jwtRS256.key');

  async connect(username: string, password: string): Promise<Response> {
    const user = await this.userRepository.findOne({
      where: { username: username, password: password },
    });
    if (!user) {
      return {
        success: false,
        message: 'Wrong username or password',
        data: null,
      };
    }
    const jwtBearerToken = jwt.sign({}, this.RSA_PRIVATE_KEY, {
      expiresIn: 120,
      algorithm: 'RS256',
      subject: user.id.toString(),
    });
    return {
      success: true,
      message: 'Successfully connected',
      data: { token: jwtBearerToken, expiresIn: 120 },
    };
  }
}
