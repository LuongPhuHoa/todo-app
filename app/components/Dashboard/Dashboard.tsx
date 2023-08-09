'use client'

import React from "react";
import Image from "next/image"
import { useDispatch } from "@/lib/redux";
import { todoSlice } from "@/lib/redux";


export const Dashboard = () => {
    const Todos = [
        {
            id: 1,
            title: "Task 1",
            completed: false
        },
        {
            id: 2,
            title: "Task 2",
            completed: false
        },
        {
            id: 3,
            title: "Task 3",
            completed: false
        },
        {
            id: 4,
            title: "Task 4",
            completed: false
        },
        {
            id: 5,
            title: "Task 5",
            completed: false
        },
    ]
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col justify-between">
            <header className="flex flex-col justify-between items-center bg-pink-200 w-full p-10">
                <div className="flex flex-col justify-between items-center">
                    <Image
                        src="/avatar.png"
                        alt="Banner"
                        width={75}
                        height={70}
                    />
                </div>
                <div className="flex flex-col justify-between items-center">
                    <h1 className="text-4xl font-normal text-center p-5">Welcome, Leah D'costa</h1>
                </div>
            </header>
            <div className="flex flex-col justify-between items-end text-left p-10">
                <h1 className="text-2xl font-bold text-center p-5">Good Evening!</h1>
            </div>
            <div className="flex flex-col justify-between items-center p-10">
                <Image
                    src="/clock.png"
                    alt="Banner"
                    width={120}
                    height={120}
                />
            </div>
            <div className="flex flex-col justtify-between p-10 ">
                <h1 className="text-2xl font-bold text-left p-5 text-pink-900">Task List</h1>
                <div className="flex flex-col justify-between p-5 rounded-lg border-2 border-pink-900">
                    <div className="flex justify-between p-4">
                        <h2 className="text-left">Daily Tasks</h2>
                        <button>
                            <Image
                                src="/plus.png"
                                alt="icon"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                    <div className="flex justify-between p-5">
                        <ul>
                            {Todos.map((todo) => (
                                <li key={todo.id}>
                                    <button onClick={() => dispatch(todoSlice.actions.addTodo(todo))}>
                                        {todo.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}