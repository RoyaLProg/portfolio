import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Auth } from "src/Entities/auth.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(Auth)
		private authRepository: Repository<Auth>
	){}

	async login(password: string): Promise<boolean> {
		const entryCount = await this.authRepository.count();
		if (entryCount === 0)
			return password === process.env.PORTFOLIO_ADMIN_PASSWORD;

		const hashedPassword = (await this.authRepository.find())[0]['password'];
		return await bcrypt.compare(password, hashedPassword)
	}

	async updatePassword(password: string): Promise<boolean> {
		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await this.authRepository.save({id: 1, password: hashedPassword});

		return result.password === hashedPassword;
	}
}
