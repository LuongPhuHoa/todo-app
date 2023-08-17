import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(req: Request, res: Response) {
    const body = await req.json();
    const { userID } = body;
    const todos = await prisma.todo.findMany({
        where: {
            userID: userID,
        },
    });

    return NextResponse.json(todos);
}