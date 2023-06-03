import React from "react";
import { BiCalendar } from "react-icons/bi";
import { RiComputerFill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
import { Section2 } from "@/components/Section2";
import { OurTeam } from "@/components/OurTeam";
import { Logos } from "@/components/Logos";
import { Introduce } from "@/components/Introduce";
export default function LandingPage() {
  return (
    <div className="static top-0 w-full flex flex-col">
      <div className="w-full flex pt-3  justify-center" id="newsSection">
        {/* <Image src={erch} className="w-full h-auto" alt="ErchLogo" /> */}
      </div>
      <div
        className="w-full pt-3 flex flex-col gap-8 py-8 bg-white"
        id="serviceSection"
      >
        <div className="w-full flex py-5">
          <div className="w-1/3 flex">
            <div className="w-1/5 flex justify-center pt-3">
              <BiCalendar className="text-6xl text-orange-400" />
            </div>
            <div className="w-3/5 text-black">
              <h1 className="text-3xl">Цаг захиалах</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                temporibus voluptate vel, explicabo placeat error a!
              </p>
            </div>
          </div>

          <div className="w-1/3 flex">
            <div className="w-1/5 flex justify-center pt-3">
              <RiComputerFill className="text-6xl text-pink-500" />
            </div>
            <div className="w-3/5 text-black">
              <h1 className="text-3xl">Смарт оношлогоо</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                temporibus voluptate vel, explicabo placeat error a!
              </p>
            </div>
          </div>
          <div className="w-1/3 flex">
            <div className="w-1/5 flex justify-center pt-3">
              <GrCertificate
                className="text-5xl text-teal-700 "
                id="certicate"
              />
            </div>
            <div className="w-3/5 text-black">
              <h1 className="text-3xl">Мэргэжлийн механик</h1>
              <p>
                Lorem ipsum dolor
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex py-5">
          <div className="w-1/3 flex">
            <div className="w-1/5 flex justify-center pt-3">
              <MdPayment className="text-5xl text-green-500" />
            </div>
            <div className="w-3/5 text-black">
              <h1 className="text-3xl">Боломжийн үнэ</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                temporibus voluptate vel, explicabo placeat error a!
              </p>
            </div>
          </div>
          <div className="w-1/3 flex">
            <div className="w-1/5 flex justify-center pt-3">
              <AiFillLike className="text-5xl text-blue-500" />
            </div>
            <div className="w-3/5 text-black">
              <h1 className="text-3xl">Чанартай үйлчилгээ</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                temporibus voluptate vel, explicabo placeat error a!
              </p>
            </div>
          </div>
          <div className="w-1/3 flex">
            <div className="w-1/5 flex justify-center pt-3">
              <BsShieldFillCheck className="text-5xl text-orange-700" />
            </div>
            <div className="w-3/5 text-black">
              <h1 className="text-3xl">Баталгаат засвар</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                temporibus voluptate vel, explicabo placeat error a!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Section2 />
      <OurTeam />
      <Logos/>
      <Introduce/>
    </div>
  );
}
