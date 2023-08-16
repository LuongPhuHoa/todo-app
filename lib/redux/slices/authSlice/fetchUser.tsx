import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import { db } from "@/database";


export const fetchUser = async ({req, res}: any) => { 
    const token = getCookie('token', {req, res});
    if (!token) {
        return {
            isLoggedIn: false,
            user: {}
        }
    }

    const decoded = jwt.verify(
        String(token), 
        String(process.env.NEXT_PUBLIC_JWT_SECRET),
    ) as jwt.JwtPayload;
    
    const user = await db.userDatabase
        .where ('email')
        .equals(decoded.email)
        .first();
    
    if (!user) {
        return {
            isLoggedIn: false,
            user: {}
        }
    }
    return {
        isLoggedIn: true,
        user: {
            email: user.email,
            name: user.name,
            id: user.id,
        }
    }
}
