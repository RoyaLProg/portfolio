import { BadRequestException, Body, Controller, InternalServerErrorException, Post, UnauthorizedException, UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly jwtService: JwtService
	) {}


	@Post()
	async login(@Body() {password}: {password: string}) {
		if (password === undefined) throw new BadRequestException();
		const hashedPassword = await bcrypt.hash(password, 10);
		const success = this.authService.login(hashedPassword);

		if (!success) throw new UnauthorizedException;

		const token = this.jwtService.sign(JSON.stringify({admin: true}));
		return {token: token};
	}

	@Post('changePassword')
	@UseGuards(AuthGuard)
	async changePassword(@Body() {oldPassword, password}: {oldPassword: string, password: string}) {
		const hashOldPassword = bcrypt.hash(oldPassword, 10);
		const hashNewPassowrd = bcrypt.hash(password, 10);

		const compareOldPassword = this.authService.login(await hashOldPassword);
		if (!compareOldPassword) throw new BadRequestException('old password is incorrect');

		const updatePassword = this.authService.updatePassword(await hashNewPassowrd);

		if (!updatePassword) throw new InternalServerErrorException('could not update password in database');

		return 'password changed';
	}
}

