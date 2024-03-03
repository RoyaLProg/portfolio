import { PrismaClient } from '@prisma/client'

const prisma : PrismaClient = new PrismaClient();

export async function GET ( request : Request, { params } : { params : {id : number} } ) : Promise<Response> {

	const comments = await prisma.comments.findMany({
		where: {
			project_id : +params.id,
		}
	});

	if (comments === null)
		return new Response('Not Found', {status: 404});

	return new Response(JSON.stringify(comments));
}
