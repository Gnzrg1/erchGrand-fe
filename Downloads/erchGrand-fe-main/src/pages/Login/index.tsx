import React from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { userIdCon } from "@/Context/userIdContext";
import { Utils } from "../../utils/helper";

export default function Index() {
  const [phoneVal, setPhoneVal] = useState(0);
  const [passVal, setPassVal] = useState("");
  const [userData, setUserData] = useState({});
  const { setUserId } = useContext(userIdCon);
  const route = useRouter();

  const userLogin = () => {
    axios
      .post(`${Utils.API_URL}/Login`, {
        phone: phoneVal,
        password: passVal,
      })
      .then((res) => {
        alert("Амжилттай нэвтэрлээ");
        // localStorage.setItem("currentUserId", res.data.result._id);
        setUserId(res.data.result._id);
        route.push("/");
      })
      .catch((err) => {
        console.log(err), alert("Нууц үг эсвэл утасны дугаар таарахгүй байна");
      });
  };
  console.log(userData);

  return (
    <div className="bg-black">
      <Link
        href="/LandingPage"
        className="w-10 h-10 flex justify-center items-center rounded-lg"
      >
        {/* 14645, 9050.30 */}
        <IoMdArrowBack className="text-white text-[4rem]" />
      </Link>
      <div className="w-[100vw] h-[100vh] flex justify-center items-start bg-black p-4">
        <div className="w-full flex items-center flex-col gap-6">
          <h1 className="text-3xl text-white">Нэвтрэх</h1>
          <input
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full sm:2/3 md:w-2/4 lg:w-1/3 p-2.5 active:border-sky-400"
            placeholder="Утасны дугаар"
            type="Phone"
            onChange={(e: any) => setPhoneVal(e.target.value)}
          />
          <input
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
          <div className=" w-full sm:2/3 md:w-2/4 lg:w-1/3 items-center  text-sm-regular mb-5">
            <Link
              className="text-color-1 w-4/4 flex justify-center text-white no-underline hover:underline py-3"
              href="/ChangePass"
            >
              Нууц үгээ мартсан уу?
            </Link>
          </div>

          <button
            onClick={userLogin}
            className="text-white w-40 h-10 outline outline-offset-2 outline-white rounded px-3 hover:text-slate-300 hover:outline-slate-300"
          >
            Hэвтрэх
          </button>
        </div>
      </div>
    </div>
  );
}
