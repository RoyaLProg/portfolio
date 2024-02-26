export async function GET ( request : Request, { params } : { params : {id : number} } ) : Promise<Response> {
		return new Response(JSON.stringify(+params.id));
}
