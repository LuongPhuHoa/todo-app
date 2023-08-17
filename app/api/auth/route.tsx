import jwt from "jsonwebtoken";
import { NextResponse } from 'next/server'
import prisma from "@/prisma/client";


export async function POST( req: Request, res: Response) {
	const body = await req.json();
	const { email, password } = body;

	// TODO: Validate email and password
	
	const user = await prisma.user.findMany( {
		where: {
			email,
			password
		},
		select: {
			email: true,
			name: true,
			id: true
		}
	} );

	if ( user.length === 0 ) {
		return NextResponse.json( { error: "Invalid email or password" }, { status: 401 } );
	} else {
		const token = jwt.sign( { email }, String(process.env.JWT_KEY), { expiresIn: "12h" } );
		return NextResponse.json( 
			{ 
				token,
				email: user[0].email,
				name: user[0].name,
				id: user[0].id
			}
		);
	}
}