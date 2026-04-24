import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Auth } from "src/Entities/auth.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(Auth)
		private authRepository: Repository<Auth>
	){}

	async login(password: string): Promise<boolean> {
		const entries = await this.authRepository.count({where: {password: password}});
		return entries === 1;
	}

	async updatePassword(password: string): Promise<boolean> {
		const result = await this.authRepository.update({id: 1}, {password: password});

		return result.affected === 1;
	}
}
