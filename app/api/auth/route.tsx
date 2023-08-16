import jwt from "jsonwebtoken";
import { NextResponse } from 'next/server'
import { db, User } from "@/database";

export async function POST( req: Request, res: Response) {
	const body = await req.json();
	const { email, password } = body;

	const user = await db.userDatabase
		.where( "email" )
		.equals( email )
		.and( ( user: User ) => user.password === password )
		.first();

	if ( user ) {
		const token = jwt.sign( { email }, String(process.env.NEXT_PUBLIC_JWT_KEY), { expiresIn: "12h" } );
		return NextResponse.redirect( "/dashboard", {
			headers: {
				"Set-Cookie": `token=${ token }; Path=/; HttpOnly`,
			},
		} );
	} else {
		return NextResponse.redirect( "/login" );
	}
}