import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
	@PrimaryGeneratedColumn()
	id: number;
	@Column("varchar", {nullable: false})
	password: string;
}
