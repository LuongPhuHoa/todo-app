import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    const { email } = body;
    
    try {
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
            select: {
                email: true,
            },
        });
    
        await new Promise((r) => setTimeout(r, 500));

        if (!user) {
            return NextResponse.json({
                user: null,
            });
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