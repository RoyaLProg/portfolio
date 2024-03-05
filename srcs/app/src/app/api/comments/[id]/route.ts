import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

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

export async function DELETE ( request : NextRequest, { params } : { params : { id : number } } ) : Promise<Response> {
	const token =  request.cookies.get('identity');
	const secret = process.env.JWT_SECRET;

	if (!token || !token.value)
		return new Response('Not identified', {status: 401});
	if (!secret)
		return new Response('Silly dev forgot to set JWT_SECRET environment variable');

	try {
		jwt.verify(JSON.parse(token.value), secret);
	} catch {
		return new Response('Token is not valid', {status: 401});
	}

	try {
		await prisma.comments.delete({
			where: {
				id: +params.id
			},
		});
	} catch {
		return  new Response('Something went terribly wrong ...', {status: 500});
	}

	return new Response('Deleted');
}
