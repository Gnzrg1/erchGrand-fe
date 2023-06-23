import Link from "next/link"
import React from "react"
import { FiFacebook, FiMapPin } from "react-icons/fi"

export default function Address() {
    return(
        <div className="sm:px-16 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/4 flex flex-col gap-6">
             <div className="flex flex-col gap-2">
              <h2 className="text-white italic" style={{fontSize:"40px"}}><strong>ХОЛБОО БАРИХ</strong></h2>
              <div className="flex text-white text-[20px] md:text-[15px] lg:text-[20px] gap-3">
                <div className="font-semibold">Хаяг:</div>
                <div>УБ хот, БЗД дүүрэг, 8-р хороо, Эрдэнэтолгой, ЦИС-ийн 1-1 тоот</div>
              </div>
              <div className="flex text-white text-[20px] md:text-[15px] lg:text-[20px] gap-3">
                <div className="font-semibold">Холбоо барих утас:</div>
                <div>89018416</div>
              </div>
              <div className="flex text-white text-[20px] md:text-[15px] lg:text-[20px] gap-3">
                <div className="font-semibold">Имайл:</div>
                <div>erchgrand@gmail.com</div>
              </div>
              </div>
              <div className="flex gap-6">
                <Link href="https://www.facebook.com/erchgrandautoservice" className="text-white text-4xl w-[50px] h-[50px] rounded-full outline outline-offset-2 outline-white flex justify-center items-center">
                    <FiFacebook />
                </Link>
                <Link href="https://www.google.com/maps/place/%D0%AD%D1%80%D1%87+%D0%93%D1%80%D0%B0%D0%BD%D0%B4+%D0%90%D0%B2%D1%82%D0%BE+%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81(Erch+Grand+Auto+Service)/@47.9236908,106.9900637,17z/data=!3m1!4b1!4m6!3m5!1s0x8c6f8b75f9315341:0x171cad432c99b0cb!8m2!3d47.9236908!4d106.9926386!16s%2Fg%2F11tshsp_tm?entry=ttu" className="text-white text-4xl w-[50px] h-[50px] rounded-full outline outline-offset-2 outline-white flex justify-center items-center">
                    <FiMapPin />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/4 h-[50vh] rounded-[20px]" id="mapPicture"></div>
        </div>
    )
}