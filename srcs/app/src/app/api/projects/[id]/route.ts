import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function GET ( request : Request, { params } : { params : {id : number} } ) : Promise<Response> {

	const project = await prisma.projects.findUnique({ 
		where: {
			id : +params.id,
		}
	});

	if (project === null)
		return new Response('Not Found', {status: 404});

	return new Response(JSON.stringify(project));
}

export async function PATCH ( request : Request, { params } : { params : {id : number} } ) : Promise<Response> {
	return new Response('OK');
}
