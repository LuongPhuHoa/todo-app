import React from "react";
import Image from "next/image"

export const SignUp = () => {
    return(
        <div className="flex flex-col items-center justify-between">
            <div className="rows items-center justify-center p-5 text-center">
                <h1 className="text-4xl font-bold text-center p-5">Welcome User!</h1>
                <p className=" text-center">Lets Get Signup to add tasks</p>
            </div>
            <div className="row items-center justify-center">
                <Image
                    src="/signup.svg"
                    alt="Banner"
                    width={53}
                    height={56}
                />
            </div>
            <div className="row items-center justify-center">
                <form className="rounded px-8 pt-6">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="fullName">
                            Full Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fullName"
                            type="text"
                            placeholder="Enter Your FullName"
                        />
                        <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Enter Your Email"
                        />
                        <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter Your Password"
                        />
                        <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Your Password"
                        />
                    </div>
                </form>
            </div>
            <div className="row items-center justify-center">
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4">
                    Sign Up
                </button>
            </div>
            <div className="row items-center justify-center py-2">
                <span>Already have an account ? <a className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-700" href="/signin">Sign In</a></span>
            </div>
        </div>
    );
}