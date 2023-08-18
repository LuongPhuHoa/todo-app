/* Core */
import { NextResponse } from 'next/server'
import jwt from "jsonwebtoken";
import prisma from '@/prisma';

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { email, password } = body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    await new Promise((r) => setTimeout(r, 500))

    if (!user) {
      return NextResponse.error();
    } else {
      const token = jwt.sign({ 
        id: user.id,
        name: user.name,
        email: user.email,
      }, 
      String(process.env.JWT_SECRET), {
        expiresIn: "1d",
      });

      return NextResponse.json({
        token,
        name: user.name,
        email: user.email,
        id: user.id,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}