import React from "react";
import Link from "next/link";
import  {IoMdArrowBack}  from "react-icons/io"
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function Index() {
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");
  const [userData, setUserData] = useState({});

  const userLogin = () => {
    axios
      .post("http://localhost:8000/api/login", {
        email: emailVal,
        password: passVal,
      })
      .then((res) => {
        console.log(res.data.result), alert("amjilltai newterlee");
        localStorage.setItem("currentUserId", res.data.result._id);
      })
      .catch((err) => {
        console.log(err), alert("Nuuts vg eswel newtreh ner taarahgui bn");
      });
  };
  console.log(userData);

  return (
    <div className="bg-black">
      <Link href="/LandingPage" className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-lg">
        <IoMdArrowBack className="text-white text-[2rem]"/>
      </Link>
    <div className="w-[100vw] h-[100vh] flex justify-center items-start bg-black p-4">
      <div className="w-full flex items-center flex-col gap-6">
        <h1 className="text-3xl text-white">Нэвтрэх</h1>
        <input
          //   onChange={(e) => setLogEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full sm:2/3 md:w-2/4 lg:w-1/3 p-2.5 active:border-sky-400"
          placeholder="Имайл"
          onChange={(e) => setEmailVal(e.target.value)}
        />
        <input
          //   onChange={(e) => setLogPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full sm:2/3 md:w-2/4 lg:w-1/3 p-2.5 active:border-sky-400"
          placeholder="Нууц үг"
          type="password"
          onChange={(e) => setPassVal(e.target.value)}
        />
        <Link
          className="text-white no-underline hover:underline"
          href="/Register"
        >
          Бүртгэл үүсгэх
        </Link>
        <div className="flex w-full sm:2/3 md:w-2/4 lg:w-1/3 items-center justify-between text-sm-regular mb-5">
          <div className="flex w-2/4 items-center gap-[10px]">
            <input
              type="checkbox"
              id="remember"
              className="w-[15px] h-[15px] hover:cursor-pointer border-2 border-icon"
            />
            <label className="text-text text-white" htmlFor="remember">
              Намайг санах
            </label>
          </div>

          <Link
            className="text-color-1 w-2/4 flex justify-end text-white hover:text-color-1/70 duration-300 py-3"
            href="/"
          >
            Нууц үгээ мартсан уу?
          </Link>
        </div>

        <button
          onClick={() => userLogin()}
          className="text-white w-40 h-10 outline outline-offset-2 outline-white rounded px-3 hover:text-slate-300 hover:outline-slate-300"
        >
          Hэвтрэх
        </button>
      </div>
    </div>
    </div>
  );
}
