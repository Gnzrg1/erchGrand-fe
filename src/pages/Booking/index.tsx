import React from 'react';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

export default function Booking() {
  return (
    <div>
        <div className="bg-black h-[100vh]">
        <Link href="/LandingPage" className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-lg">
          <IoMdArrowBack className="text-white text-[2rem]"/>
        </Link>
    <div className="p-[50px] bg-black shadow-shadow-dashboard">
      <div className="mb-[30px]">
        <h1 className="text-head text-white text-[30px] font-bold leading-9 mb-2">
          Цаг захиалах
        </h1>
      </div>
      <form className="text-head">
        <div className="flex flex-col  gap-4 mb-5">
          <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/4">
            <label
              className="block mb-2 text-lg-medium text-white"
              htmlFor="firstName"
            >
              Өдөр
            </label>
            <input
              name="dateDay"
              type="date"
              id="dateDay"
              className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
            />
          </div>

          <div className="w-full md:w-2/4">
            <label
              className="block mb-2 text-lg-medium text-white"
              htmlFor="lastName"
            >
              Үйлчилгээ
            </label>
            <select
              name="services"
              id="services"
              className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
            >

            </select>
          </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/4">
            <label
              className="block mb-2 text-lg-medium text-white"
              htmlFor="email"
            >
              Засварчин
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
              Цаг
            </label>
            <select
              name="mechanic"
              id="mechanic"
              className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
            >
              {}
            </select>
          </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full md:w-2/4">
              <label
                className="block mb-2 text-lg-medium text-white"
                htmlFor="password"
              >
                Утасны дугаар
              </label>
              <input
                name="phoneNumber"
                type="number"
                id="phone"
                className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-black text-md-regular"
                placeholder="Утасны дугаар"
              />
            </div>
            <div className="w-full md:w-2/4">
              <label
                className="block mb-2 text-lg-medium text-white"
                htmlFor="password"
              >
                Машины марк
              </label>
              <input
                name="phoneNumber"
                type=""
                id="phone"
                className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-black text-md-regular"
                placeholder="Машины марк"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full md:w-2/4">
              <label
                className="block mb-2 text-lg-medium text-white"
                htmlFor="password"
              >
                Машины номер
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-black text-md-regular"
                placeholder="Машины номер"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[10px] text-sm-regular mb-5">
          <input
            type="checkbox"
            id="accept"
            className="w-[15px] h-[15px] border-2 border-icon"
          />
          <label className="text-text text-white" htmlFor="accept">
            Үйлчилгээний нөхцөл зөвшөөрөх
          </label>
        </div>

        <button
          type="submit"
          className="block w-40 py-4  text-head rounded-lg outline outline-offset-2 outline-white mb-5 duration-300 text-white hover:text-slate-300 hover:outline-slate-300"
        >
          Бүртгүүлэх
        </button>
      </form>
    </div>
    </div>
    </div>
  )
}
