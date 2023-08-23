import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    const { fullName, email, password } = body;
    
    try {
        const user = await prisma.user.create({
        data: {
            name: fullName,
            email,
            password,
        },
        select: {
            name: true,
            email: true,
        },
        });
    
        await new Promise((r) => setTimeout(r, 500));

        if (!user) {
            return NextResponse.error();
        } else {
            return NextResponse.json({
                user,
            });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}