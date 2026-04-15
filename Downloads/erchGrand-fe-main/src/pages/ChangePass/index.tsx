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
  const [phone1Val, setPhone1Val] = useState(0);
  const { userId, setUserId } = useContext(userIdCon);
  const route = useRouter();

  const getUser = () => {
    axios
      .post(`${Utils.API_URL}/userphone`, {
        phone: phoneVal,
      })
      .then((res) => {
        if (!res.status) {
          alert("Бүртгэлгүй утасны дугаар байна.");
        } else {
          setUserId(res.data.result[0]._id),
            alert("Нууц асуултанд хариулна уу"),
            route.push("/SecretQuestion");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          <h1 className="text-3xl text-white">
            Бүртгэлтэй утасны дугаар оруулна уу
          </h1>
          <input
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full sm:2/3 md:w-2/4 lg:w-1/3 p-2.5 active:border-sky-400"
            placeholder="Утасны дугаар"
            type="Phone"
            onChange={(e: any) => setPhoneVal(e.target.value)}
          />
          <button
            onClick={getUser}
            className="text-white w-40 h-10 outline outline-offset-2 outline-white rounded px-3 hover:text-slate-300 hover:outline-slate-300"
          >
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
}
