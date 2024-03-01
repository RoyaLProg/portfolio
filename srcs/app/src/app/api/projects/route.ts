import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function GET() : Promise<Response> {
	const allProjects = await prisma.projects.findMany({
													  select: {
														  id: true,
														  title: true,
														  image: true,
														  short_desc: true
													  }
	});
	return new Response(JSON.stringify(allProjects));
}
