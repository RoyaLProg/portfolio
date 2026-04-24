import { Body, Controller, Post, UnauthorizedException, UseGuards } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AuthGuard } from "src/Auth/auth.guard";
import { AuthService } from "src/Auth/auth.service";
import * as bcrypt from 'bcrypt';


// INFO: while the use of async here is not really useful as i await inline
// i am to lazy to deal with .then()
// so see it as an offering to make it more readable

@Controller('admin')
export class AdminController {

	constructor(
		private readonly adminService: AdminService,
		private readonly authService: AuthService
	) {}

	@Post('nukeProjects')
	@UseGuards(AuthGuard)
	async nukeProjects(@Body() { password }: { password: string }) {
		const hashPassword = bcrypt.hashSync(password, 10);
		const correctPassword = await this.authService.login(hashPassword);

		if (!correctPassword) throw new UnauthorizedException('invalid password');

		await this.adminService.nukeProjects();

		return 'all Projects have been deleted';
	}

	@Post('nukeSkills')
	@UseGuards(AuthGuard)
	async nukeSkills(@Body() { password }: { password: string }) {
		const hashPassword = bcrypt.hashSync(password, 10);
		const correctPassword = await this.authService.login(hashPassword);

		if (!correctPassword) throw new UnauthorizedException('invalid password');

		await this.adminService.nukeSkills();

		return 'all Skills have been deleted';
	}

	//INFO: while adding a 'nukeAll' route might be consistent with the number of buttons, i am not sure of the usefulness of it
	// it might get added later for security or ease of use
}


