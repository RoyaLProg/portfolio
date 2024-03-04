import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function GET ( ) : Promise<Response> {
	const comments = await prisma.comments.findMany();

	return new Response(JSON.stringify(comments));
}

export async function POST ( request : Request ) : Promise<Response> {
	const body = await request.json();

	if (!body || !body['username'] || !body['comment'] || !body['project_id'])
		return new Response('Error missing a field', {status: 400});

	const count = await prisma.projects.count({
		where: {
			id: body['project_id']
		}
	});

	if (count !== 1)
		return new Response('Project does not exist', {status: 400});
	const date = new Date();

	console.log(date.toISOString().split('T')[0]);

	prisma.comments.create({
		data : {
			username: body['username'],
			comment: body['comment'],
			project_id: body['project_id'],
			date: date.toISOString().split('T')[0]
		}
	});

	return new Response('OK');
}
