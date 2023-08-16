import React from "react";
import Image from "next/image"
import Link from "next/link"

export const Home = () => {
    return (
        <div className="flex flex-col items-center justify-between align-middle p-5">
            {/* <Link href="/dashboard">Dashboard</Link> */}
            <div className="flex items-center justify-center p-5">
                <Image
                    src="/illu.png"
                    alt="Banner"
                    width={268}
                    height={189}
                />
            </div>
            <div className="row items-center justify-center text-center align-middle p-5 gap-5">
                <h1 className="text-4xl font-bold text-center p-5">Get Things Done With TODO!</h1>
                <p className="text-xl text-center">Lörem ipsum dobårade mav, barade men trest, käpelig medan keplalogi. Aling stödkorv, fådissa </p>
            </div>
            <div className="row items-center justify-center">
                <Link href="/signin">
                    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 ">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
}