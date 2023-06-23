import React, { useState } from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import axios from "axios";

export default function Index() {
  const [userData, setUserData] = useState({});
  const registerUser = async (event: any) => {
    event.preventDefault();
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phone: event.target.phoneNumber.value,
      password: event.target.password.value,
    };
    console.log(data);

    setUserData(data)
    try {
      if (userData) {
        console.log(userData);

        axios
          .post("http://localhost:8000/api/user", userData)
          .then((res) => {
            // console.log(res.data.result);
            if (res.data.result) {
              console.log(res.data.result);

              alert("Amjilttai bvrtgelee");
            } else {
              alert("Medeellee bvren bugluuuc!!!!");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
    // setIsLog(true);
  };

  return (
    <div className="bg-black h-[100vh]">
        <Link href="/Login" className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-lg">
          <IoMdArrowBack className="text-white text-[2rem]"/>
        </Link>
    <div className="p-[50px] bg-black shadow-shadow-dashboard">
      <div className="mb-[30px]">
        <h1 className="text-head text-white text-[30px] font-bold leading-9 mb-2">
          Бүртгэл үүсгэх
        </h1>
      </div>
      <form onSubmit={registerUser} className="text-head">
        <div className="flex flex-col  gap-4 mb-5">
          <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/4">
            <label
              className="block mb-2 text-lg-medium text-white"
              htmlFor="firstName"
            >
              Нэр
            </label>
            <input
              name="firstName"
              type="text"
              id="firstName"
              className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="Нэр"
            />
          </div>

          <div className="w-full md:w-2/4">
            <label
              className="block mb-2 text-lg-medium text-white"
              htmlFor="lastName"
            >
              Овог
            </label>
            <input
              name="lastName"
              type="text"
              id="lastName"
              className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="Овог"
            />
          </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/4">
            <label
              className="block mb-2 text-lg-medium text-white"
              htmlFor="email"
            >
              И-мэйл
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="И-мэйл"
            />
          </div>

          <div className="w-full md:w-2/4">
            <label
              className="block mb-2 text-lg-medium text-white"
              htmlFor="phone"
            >
              Утасны дугаар
            </label>
            <input
              name="phoneNumber"
              type="number"
              id="phone"
              className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="Утасны дугаар"
            />
          </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full md:w-2/4">
              <label
                className="block mb-2 text-lg-medium text-white"
                htmlFor="password"
              >
                Нууц үг
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-black text-md-regular"
                placeholder="Нууц үг"
                //   value={rePassword}
                //   onChange={(e): void => {
                // setRePassword(e.target.value);
                //   }}
              />
            </div>
            </div>
        </div>
        <div className="flex items-center gap-[10px] text-sm-regular mb-5">
          <input
            type="checkbox"
            id="accept"
            className="w-[15px] h-[15px] border-2 border-icon"
            // onClick={() => setConfirm(!confirm)}
          />
          <label className="text-text text-white" htmlFor="accept">
            Үйлчилгээний нөхцөл зөвшөөрөх
          </label>
        </div>

        <button
          type="submit"
          className="block w-40 py-4  text-head rounded-lg outline outline-offset-2 outline-white mb-5 duration-300 text-white hover:text-slate-300 hover:outline-slate-300"
          //   disabled={confirm ? false : true}
        >
          Бүртгүүлэх
        </button>
      </form>
    </div>
    </div>
  );
}
