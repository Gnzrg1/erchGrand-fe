import React from "react";
import Image from "next/image";
import erchLogo from "../imgs/ErchLogo.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Utils } from "../utils/helper";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const OurTeam = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(`${Utils.API_URL}/employee`)
      .then((res) => setData(res.data.result));
  };
  return (
    <div
      className="w-full bg-gradient-to-r from-gray-900 to-gray-700 flex flex-col gap-8 px-4 sm:px-16 py-4"
      style={{ borderRadius: "20px" }}
    >
      <h2 className="text-white italic" style={{ fontSize: "40px" }}>
        <strong>ХАМТ ОЛОН</strong>
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full flex justify-center flex-col">
          <div
            id="ourTeam1"
            className="px-4 py-4 flex justify-end flex-col items-start"
            style={{ height: "40vh" }}
          >
            <h2 className="h-10 w-40 rounded-lg group/edit bg-white flex justify-center items-center text-black">
              +976 91118781
            </h2>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-white  font-semibold">Шижир</h1>
            <p className="text-white" style={{ fontSize: "20px" }}>
              Гүйцэтгэх захирал
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col">
          <div
            id="ourTeam2"
            className="px-4 py-4 flex justify-end flex-col items-start pb-3"
            style={{ height: "40vh" }}
          >
            <h2 className="h-10 w-40 rounded-lg group/edit bg-white flex justify-center items-center text-black">
              +976 96043094
            </h2>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-white  font-semibold">Сайнбилэг</h1>
            <p className="text-white" style={{ fontSize: "20px" }}>
              Механик
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col">
          <div
            id="ourTeam3"
            className="px-4 py-4 flex justify-end flex-col items-start pb-3"
            style={{ height: "40vh" }}
          >
 <h2 className="h-10 w-40 rounded-lg group/edit bg-white flex justify-center items-center text-black">
              +976 80906925
            </h2>
          </div>
          <div className=" flex flex-col justify-center items-start">
            <h1 className="text-white  font-semibold">Баянмөнх</h1>
            <p className="text-white" style={{ fontSize: "20px" }}>
            Механик
            </p>
          </div>
        </div>
      </div>
      <Link href="/OurTeam" className="flex items-center text-gray-400">Дэлгэрэнгүй <FaArrowRightLong/></Link>
    </div>
  );
};
