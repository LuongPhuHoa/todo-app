import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    const { userID, taskName, completed } = body;

    try {
        const todo = await prisma.todo.create({
            data: {
                userID,
                taskName,
                completed,
            },
        });

        await new Promise((r) => setTimeout(r, 500));

        if (!todo) {
            return NextResponse.error();
        } else {
            return NextResponse.json({
                todo,
            });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}
