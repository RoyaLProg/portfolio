import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

export async function GET ( request : Request, { params } : { params : {id : number} } ) : Promise<Response> {

	const skill = await prisma.skills.findUnique({ 
		where: {
			id : +params.id,
		}
	});

	if (skill === null)
		return new Response('Not Found', {status: 404});

	return new Response(JSON.stringify(skill));
}

export async function PATCH ( request : NextRequest, { params } : { params : {id : number} } ) : Promise<Response> {
	const newSkill = request.json();
	
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

	if (!newSkill)
		return new Response('No project given', {status: 400});

	try {
		await prisma.skills.update({
			where: {
				id: +params.id
			},
			data : newSkill,
		});
	} catch {
		return  new Response('Something went terribly wrong ...', {status: 500});
	}

	return new Response('Updated');
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
		await prisma.skills.delete({
			where: {
				id: +params.id
			},
		});
	} catch {
		return  new Response('Something went terribly wrong ...', {status: 500});
	}

	return new Response('Deleted');
}
