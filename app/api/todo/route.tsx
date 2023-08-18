import { NextResponse } from 'next/server'
import prisma from '@/prisma'

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    const { userID } = body;

    try {
        const todos = await prisma.todo.findMany({
            where: {
                userID,
            },
        });

        console.log(todos);

        await new Promise((r) => setTimeout(r, 500))

        if (!todos) {
            return NextResponse.error();
        } else {
            return NextResponse.json({
                todos,
            });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}