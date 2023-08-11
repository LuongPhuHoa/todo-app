import { db, User } from "@/database";
import authSlice from "./authSlice";

//check if user exists
export const fetchAuth = async (user: User) => {
    const { email, password } = user;
    const auth = await db.userDatabase.where({ email, password }).first();
    if (auth) {
        return auth;
    }
    return null;
};