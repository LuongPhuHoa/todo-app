"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, loginUser } from "@/lib/redux";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (getCookie("token")) {
            router.push("/dashboard");
        }
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        //check existing user
        const existingUser = await axios.post("/api/auth/checkUser", {
            email,
        });

        if (existingUser.data.user) {
            alert("User Already Exists");
            return;
        }
        

        const { data } = await axios.post("/api/auth/signup", {
            fullName,
            email,
            password,
        });

        console.log(data);

        if (data.error) {
            alert(data.error);
        } else {
            alert("User Created Successfully");
            const loginData = await axios.post("/api/auth/signin", {
                email,
                password,
            });
            console.log(loginData.data);
            if (loginData.data.error) {
                alert(loginData.data.error);
            } else {
                dispatch(
                    loginUser({
                        token: loginData.data.token,
                        name: loginData.data.name,
                        email: loginData.data.email,
                        id: loginData.data.id,
                    })
                );
                setCookie("token", loginData.data.token);
                setCookie("name", loginData.data.name);
                setCookie("email", loginData.data.email);
                setCookie("id", loginData.data.id);
                router.push("/dashboard");
            }
        }
    };

    const checkPassword = () => {
        if (password !== confirmPass) {
            alert("Password and Confirm Password does not match");
        }
    };

    return (
        <div className="flex flex-col items-center justify-between">
            <div className="rows items-center justify-center p-5 text-center">
                <h1 className="text-4xl font-bold text-center p-5">Welcome User!</h1>
                <p className=" text-center">Lets Get Signup to add tasks</p>
            </div>
            <div className="row items-center justify-center">
                <Image src="/signup.svg" alt="Banner" width={53} height={56} />
            </div>
            <div className="row items-center justify-center">
                <form
                    className="rounded px-8 pt-6"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mt-2"
                            htmlFor="fullName"
                        >
                            Full Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fullName"
                            type="text"
                            placeholder="Enter Your FullName"
                            onChange={(e) => setFullName(e.target.value)}
                        />
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
                        <label
                            className="block text-gray-700 text-sm font-bold mt-2"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Your Password"
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                    </div>
                    <div className="row items-center justify-center w-full">
                        <button
                            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 w-full"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <div className="row items-center justify-center py-2">
                <span>
                    Already have an account ?{" "}
                    <a
                        className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-700"
                        href="/signin"
                    >
                        Sign In
                    </a>
                </span>
            </div>
        </div>
    );
};
