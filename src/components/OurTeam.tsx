import React from "react";
import Image from "next/image";
import erchLogo from "../imgs/ErchLogo.png";
import { useState, useEffect } from "react";
import axios from "axios";

export const OurTeam = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:8000/api/employee")
      .then((res) => setData(res.data.result));
  };
  return (
    <div className="w-full bg-white flex flex-col gap-8">
      <h2 className="text-black text-center text-6xl"><strong>Хамт Олон</strong></h2>
      <div className="w-full bg-white flex justify-around">
        <div className="w-1/4 flex justify-center">
          <div id="ourTeam1" className="flex items-end">
            <h1>Шижир</h1>
          </div>
        </div>
        <div className="w-1/4 flex justify-center">
          <div id="ourTeam2" className="flex items-end">
            <h1>Сайнбилэг</h1>
          </div>
        </div>
        <div className="w-1/4 flex justify-center">
          <div id="ourTeam3" className="flex items-end">
            <h1>Баянмөнх</h1>
          </div>
        </div>
        <div className="w-1/4 flex justify-center">
          <div id="ourTeam4" className="flex items-end">
            <h1>Батхишиг</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
