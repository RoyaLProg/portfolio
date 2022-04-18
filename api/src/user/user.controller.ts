import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from './response';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('connect')
  async connect(@Body() body): Promise<Response> {
    if (!body.username || !body.password) {
      return {
        success: false,
        message: 'Invalid username or password',
        data: null,
      };
    }
    const username = body.username;
    const password = body.password;
    return await this.userService.connect(username, password);
  }
}
