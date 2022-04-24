import { Controller, Post, Body, Headers, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from './response';
import { AuthenticationService } from 'src/authentication/authentication.service';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authenticationService: AuthenticationService,
  ) {}

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

  @Post('change-password')
  async changePassword(@Body() body, @Headers() headers): Promise<Response> {
    if (!headers.authorization) throw new HttpException('Unauthorized', 401);
    const token = headers.authorization.split(' ')[1];
    const decoded = await this.authenticationService.validateToken(token);
    if (!decoded) throw new HttpException('Unauthorized', 401);
    if (!body.oldPassword || !body.newPassword) {
      return {
        success: false,
        message: 'missiming parameters',
        data: null,
      };
    }
    const id = 1;
    const old_password = body.oldPassword;
    const new_password = body.newPassword;
    const user = await this.userService.findOne(id);
    if (user.password != old_password) {
      return {
        success: false,
        message: 'wrong old password',
        data: null,
      };
    }
    return await this.userService.changePassword(id, new_password);
  }

  @Post('change-username')
  async changeUsername(@Body() body, @Headers() headers): Promise<Response> {
    if (!headers.authorization) throw new HttpException('Unauthorized', 401);
    const token = headers.authorization.split(' ')[1];
    const decoded = await this.authenticationService.validateToken(token);
    if (!decoded) throw new HttpException('Unauthorized', 401);
    if (!body.username) {
      return {
        success: false,
        message: 'missiming parameters',
        data: null,
      };
    }
    const id = 1;
    const username = body.username;
    return await this.userService.changeUsername(id, username);
  }
}
