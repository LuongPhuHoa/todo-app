import React, { use } from "react";
import Image from "next/image";
import { Task } from "../Task";
import { useState, useEffect } from "react";
import { Modal } from "../Modal";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { 
  useDispatch,
  logoutUser
 } from "@/lib/redux";

export const Dashboard = () => {
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const name = getCookie("name");

  useEffect(() => {
    if (!getCookie("token")) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex flex-col justify-between g-3">
      <header className="flex flex-col justify-between items-center bg-pink-200 w-full p-10">
        <div className="flex flex-col justify-between items-end p-3">
          <button
            className="bg-pink-900 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              dispatch(logoutUser());
              router.push("/");
            }}
          >
            Sign Out
          </button>
        </div>
        <div className="flex flex-col justify-between items-center">
          <Image src="/avatar.png" alt="Banner" width={75} height={70} />
        </div>
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-4xl font-normal text-center p-5">
            {name}
          </h1>
        </div>
      </header>
      <div className="flex flex-col justify-between items-end text-left p-10">
        <h1 className="text-2xl font-bold text-center p-5">Good Evening!</h1>
      </div>
      <div className="flex flex-col justify-between items-center p-10">
        <Image src="/clock.png" alt="Banner" width={120} height={120} />
      </div>
      <div className="flex flex-col justtify-between p-10 ">
        <h1 className="text-2xl font-bold text-left p-5 text-pink-900">
          Task List
        </h1>
        <div className="flex flex-col justify-between p-5 rounded-lg border-2 border-pink-900">
          <div className="flex justify-between p-4">
            <h2 className="text-left">Daily Tasks</h2>
            <div>
              <button onClick={() => setModalState(true)}>
                <Image src="/plus.png" alt="icon" width={20} height={20} />
              </button>
              <div>{modalState && <Modal setModalState={setModalState} />}</div>
            </div>
          </div>
          <Task />
        </div>
      </div>
    </div>
  );
};
