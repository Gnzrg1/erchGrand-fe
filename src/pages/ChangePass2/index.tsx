import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function Index() {
    return (
        <div className="bg-black">
          <Link
            href="/LandingPage"
            className="w-10 h-10 flex justify-center items-center rounded-lg"
          >
            <IoMdArrowBack className="text-white text-[4rem]" />
          </Link>
          <div className="w-[100vw] h-[100vh] flex justify-center items-start bg-black p-4">
            <div className="w-full flex items-center flex-col gap-6">
              <h1 className="text-3xl text-white">Нууц үг солих</h1>
              <input
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full sm:2/3 md:w-2/4 lg:w-1/3 p-2.5 active:border-sky-400"
                placeholder="Шинэ нууц үг"
                type="Password"
              />
              <input
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full sm:2/3 md:w-2/4 lg:w-1/3 p-2.5 active:border-sky-400"
                placeholder="Нууц үгээ давтах"
                type="Password"
              />
              <button
                className="text-white w-40 h-10 outline outline-offset-2 outline-white rounded px-3 hover:text-slate-300 hover:outline-slate-300"
              >
                Үргэлжлүүлэх
              </button>
            </div>
          </div>
        </div>
      );
}