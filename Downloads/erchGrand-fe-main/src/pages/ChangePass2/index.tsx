import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useState, useContext } from "react";
import axios from "axios";
import { Utils } from "../../utils/helper";
import { userIdCon } from "@/Context/userIdContext";
import { useRouter } from "next/router";

export default function Index() {
  const { userId } = useContext(userIdCon);
  const [passVal1, setPassVal1] = useState();
  const [passVal2, setPassVal2] = useState();
  const route = useRouter();
  const password = {
    password: passVal1,
  };

  const changePass = () => {
    if (passVal1 != passVal2) {
      alert("Нууц үг таарахгүй байна");
    } else if (passVal1 === passVal2) {
      axios
        .put(`${Utils.API_URL}/user/${userId}`, password)
        .then((res) => {
          alert("Амжилттай хадгаллаа"), route.push("/Login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
            onChange={(e: any) => {
              setPassVal1(e.target.value);
            }}
          />
          <input
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full sm:2/3 md:w-2/4 lg:w-1/3 p-2.5 active:border-sky-400"
            placeholder="Нууц үгээ давтах"
            type="Password"
            onChange={(e: any) => {
              setPassVal2(e.target.value);
            }}
          />
          <button
            onClick={changePass}
            className="text-white w-40 h-10 outline outline-offset-2 outline-white rounded px-3 hover:text-slate-300 hover:outline-slate-300"
          >
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
}