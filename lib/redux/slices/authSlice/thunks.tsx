import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import {  User } from "@/database";
import { fetchAuth } from "./fetchAuth";

//check if the inputted email and password matches the database
export const loginUser: any = createAppAsyncThunk(
    "auth/loginUser",
    async (user: User) => {
        const auth = await fetchAuth(user);
        if (auth) {
            return auth;
        }
        throw new Error("User not found");
    }
);