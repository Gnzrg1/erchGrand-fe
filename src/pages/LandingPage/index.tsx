import React, { useContext } from "react";
import { BsCarFront, BsPersonVcard, BsLightning } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { Section2 } from "@/components/Section2";
import { OurTeam } from "@/components/OurTeam";
import { Introduce } from "@/components/Introduce";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Address from "@/components/Address";
import { TbCalendarTime } from "react-icons/tb";
import { userIdCon } from "@/Context/userIdContext";
import Link from "next/link";

export default function LandingPage() {
  const { userId } = useContext(userIdCon);
  return (
    <div>
      <Header />
      <div className="static top-0 w-full flex flex-col gap-12 md:gap-24 bg-black px-4 sm:px-8">
        <div
          className="bg-gradient-to-r from-gray-900 to-gray-700"
          style={{ borderRadius: "20px" }}
        >
          <div
            className="w-full flex flex-col justify-end sm:justify-between p-8"
            id="newsSection"
          >
            <h2
              className="text-white hidden sm:flex"
              style={{ fontSize: "45px" }}
            >
              <strong>Эрч Гранд Авто Сервис</strong>
            </h2>
            <div></div>

            <Link
              href={userId ? "/Booking" : "/Login"}
              className="w-[200px] h-[150px] text-white bg-slate-500 text-[1.5rem] flex flex-col justify-center items-center rounded-[20px] hover:text-slate-300"
            >
              <TbCalendarTime className="text-[3rem]" />
              Цаг захиалах
            </Link>
          </div>
        </div>
        <Section2 />
        <div
          className="w-full flex flex-col gap-4 py-10 bg-gradient-to-r from-gray-900 to-gray-700  px-4 sm:px-16"
          id="serviceSection"
          style={{ borderRadius: "15px" }}
        >
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/4 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/4">
                <div className="flex justify-start items-center gap-4 text-white">
                  <BsCarFront style={{ fontSize: "6rem" }}></BsCarFront>
                  <div style={{ fontSize: "20px" }}>Чанартай үйлчилгээ</div>
                </div>
              </div>
              <div className="w-full md:w-2/4">
                <div className="flex justify-start items-center gap-4 text-white">
                  <VscTools style={{ fontSize: "6rem" }}></VscTools>
                  <div style={{ fontSize: "20px" }}>Сайн багаж</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/4 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/4 ">
                <div className="flex justify-start items-center gap-4 text-white">
                  <BsPersonVcard style={{ fontSize: "6rem" }}></BsPersonVcard>
                  <div style={{ fontSize: "20px" }}>Мэргэжлийн инженерүүд</div>
                </div>
              </div>
              <div className="w-full md:w-2/4">
                <div className="flex justify-start items-center gap-4 text-white">
                  <BsLightning style={{ fontSize: "6rem" }}></BsLightning>
                  <div style={{ fontSize: "20px" }}>Хурдан шуурхай</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Introduce />
        <OurTeam />
        <Address />
      </div>
      <Footer />
    </div>
  );
}
