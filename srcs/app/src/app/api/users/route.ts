import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { NextResponse, NextRequest } from 'next/server'

const prisma = new PrismaClient();

export async function POST ( request : Request ) : Promise<NextResponse> {
	const body: Object = await request.json();

	if (!body || !body['username'] || !body['password'])
		return new NextResponse('Error missing a field', {status: 400});

	const count: number = await prisma.users.count({
		where: {
			username: body['username'],
			password: body['password']
		}
	});

	if (count !== 1)
		return new NextResponse('Wrong credentials', {status: 401});
	const secret = process.env.JWT_SECRET;
	if (!secret)
		return new NextResponse('Server Error', {status: 500});

	const token = jwt.sign({username: body['username']}, secret)
	const response = new NextResponse('OK');

	response.cookies.set('identity', token);
	return response;
}

export async function DELETE ( request : NextRequest ) : Promise<NextResponse> {
	const cookies = request.cookies.get('identity');
	if (!cookies || !cookies.value)
		return new NextResponse('Not connected', {status: 401});

	const response = new NextResponse('OK');
	response.cookies.set('identity', '');
	return response;
}
