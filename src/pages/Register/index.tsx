import React, { useState } from "react";
import Link from "next/link";
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
    if (event.target.password.value == event.target.rePassword.value) {
      setUserData(data);
    } else {
      alert("Нууц үг таарахгүй байна");
    }

    try {
      if (userData) {
        console.log(userData);

        axios
          .post("http://localhost:8000/api/user", userData)
          .then((res) => {
            console.log(res.data.result);

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
    <div className="p-[50px] bg-white rounded-2xl shadow-shadow-dashboard">
      <div className="mb-[30px]">
        <h1 className="text-head text-teal-500 text-[30px] font-bold leading-9 mb-2">
          Бүртгэл үүсгэх
        </h1>

        <Link
          href="/Login"
          className="no-underline hover:underline text-teal-500 text-color-1 ps-1"
        >
          Бүртгэлээрээ нэвтрэх
        </Link>
      </div>
      <form onSubmit={registerUser} className="text-head">
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="w-full">
            <label
              className="block mb-2 text-lg-medium text-teal-500"
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

          <div className="w-full">
            <label
              className="block mb-2 text-lg-medium text-teal-500"
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
          {/* <div className="w-full">
            <label
              className="block mb-2 text-lg-medium text-teal-500"
              htmlFor="username"
            >
              Xэрэглэгчийн нэр
            </label>
            <input
              name="username"
              type="text"
              id="username"
              className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="Хэрэглэгчийн нэр"
            />
          </div> */}
          <div className="w-full">
            <label
              className="block mb-2 text-lg-medium text-teal-500"
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

          <div className="w-full">
            <label
              className="block mb-2 text-lg-medium text-teal-500"
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
          <div className="flex justify-between">
            <div className="w-2/4">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
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

            <div className="w-2/4">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="repassword"
              >
                Нууц үг давтах
              </label>
              <input
                type="password"
                name="rePassword"
                id="repassword"
                className="text-black border border-border-2 text-black w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                placeholder="Нууц үг давтах"
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
          <label className="text-text text-teal-500" htmlFor="accept">
            Үйлчилгээний нөхцөл зөвшөөрөх
          </label>
        </div>

        <button
          type="submit"
          className="block w-full py-4  text-head rounded-lg mb-5 hover:bg-color-6/70 duration-300 text-teal-500"
          //   disabled={confirm ? false : true}
        >
          {/* {userId ? (
          <Link href={"/"}>Бүртгүүлэх</Link>
        ) : (
          <Link href="/signup">Бүртгүүлэх</Link>
        )} */}
          Бүртгүүлэх
        </button>

        <p className="text-center text-md-medium mb-5 text-teal-500">Эсвэл</p>

        <div className="grid grid-cols-2 gap-5">
          <button className="flex text-teal-500 items-center justify-center gap-2 text-[#1967d2] py-3 px-5 rounded-lg border-2 border-[#1967d2] hover:bg-[#1967d2] hover:text-white duration-300">
            <FaFacebookF />
            Facebook-ээр бүртгүүлэх
          </button>
          <button className="flex text-teal-500 items-center justify-center gap-2 text-[#D93025] py-3 px-5 rounded-lg border-2 border-[#D93025] hover:bg-[#d93025] hover:text-white duration-300">
            <FaGoogle />
            Google-ээр бүртгүүлэх
          </button>
        </div>
      </form>
    </div>
  );
}
