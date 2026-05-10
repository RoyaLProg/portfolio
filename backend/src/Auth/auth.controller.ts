import { BadRequestException, Body, Controller, InternalServerErrorException, Post, UnauthorizedException, UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./jwtConstants";

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly jwtService: JwtService
	) {}


	@Post()
	async login(@Body() {password}: {password: string}) {
		if (password === undefined) throw new BadRequestException();
		const success = this.authService.login(password);

		if (!success) throw new UnauthorizedException;

		const token = this.jwtService.sign(JSON.stringify({admin: true, iat: Date.now() + ( 1000 * 60 * 60 * 60 )}), {secret: jwtConstants.secret});
		return {token: token};
	}

	@Post('changePassword')
	@UseGuards(AuthGuard)
	async changePassword(@Body() {oldPassword, password}: {oldPassword: string, password: string}) {

		const compareOldPassword = this.authService.login(oldPassword);
		if (!compareOldPassword) throw new BadRequestException('old password is incorrect');

		const updatePassword = this.authService.updatePassword(password);

		if (!updatePassword) throw new InternalServerErrorException('could not update password in database');

		return 'password changed';
	}
}

