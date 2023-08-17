"use client";
import { setCookie } from "cookies-next";
import Image from "next/image";
import { useState } from "react";
import { loginUser, useDispatch, useSelector } from "@/lib/redux";
import { useRouter } from "next/navigation";
import axios from "axios";

export const SignIn = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { data } = await axios.post("/api/auth", {
            email,
            password,
        });
        console.log(data);
        if (data.token) {
            setCookie("token", data.token);
            setCookie("name", data.name);
            setCookie("email", data.email);
            setCookie("id", data.id);
            dispatch(loginUser(data.token));
            router.push("/dashboard");
        }
    }

    return (
        <div className="flex flex-col items-center justify-between">
            <div className="flex items-center justify-center p-5">
                <h1 className="text-4xl font-bold text-center p-5">Welcome Back!</h1>
            </div>
            <div className="row">
                <Image src="/login.svg" alt="Banner" width={268} height={189} />
            </div>
            <div className="row items-center justify-center">
                <form className="rounded px-8 pt-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mt-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Enter Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                            className="block text-gray-700 text-sm font-bold mt-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="row items-center justify-center py-2">
                            <a
                                className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-700"
                                href="#"
                            >
                                {" "}
                                Forgot Password?
                            </a>
                        </div>
                        <div className="row items-center justify-center w-full">
                            <button
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 w-full"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row items-center justify-center py-2">
                <span>
                    Don't have an account ?{" "}
                    <a
                        className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-700"
                        href="/signup"
                    >
                        Sign Up
                    </a>
                </span>
            </div>
        </div>
    );
};
