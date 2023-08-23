import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    const { id } = body;

    try {
        const todo = await prisma.todo.update({
            where: {
                id,
            },
            data: {
                completed: true,
            },
        });

        await new Promise((r) => setTimeout(r, 500));
        
        if (!todo) {
            return NextResponse.error();
        }
        return NextResponse.json({
            todo,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}