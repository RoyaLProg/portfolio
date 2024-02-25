import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient();

export async function GET() : Promise<Response> {
	const allProjects = await prisma.projects.findMany();
	return new Response(JSON.stringify(allProjects));
}
