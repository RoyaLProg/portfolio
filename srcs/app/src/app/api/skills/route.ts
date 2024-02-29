import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function GET ( ) : Promise<Response> {
	const skills = await prisma.skills.findMany();

	return new Response(JSON.stringify(skills));
}
