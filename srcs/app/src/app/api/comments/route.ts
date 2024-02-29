import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function GET ( ) : Promise<Response> {
	const comments = await prisma.comments.findMany();

	return new Response(JSON.stringify(comments));
}
