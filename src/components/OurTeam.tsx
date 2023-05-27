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
    <div className="w-full bg-white flex flex-col gap-8 italic">
      <h1 className="text-black text-center text-6xl">Our Team</h1>
      <div className="w-full bg-white flex justify-around">
        <div className="w-1/4 ">
          {data.map((e, index) => {
            return <h1 key={index}>{e.name}</h1>;
          })}
          <div>
            <Image
              className="border-1"
              src={erchLogo}
              alt=""
              width={250}
              height={200}
            />
          </div>
          <h1></h1>
        </div>
        <div className="w-1/4 ">
          <div>
            <Image
              className="border-1"
              src={erchLogo}
              alt=""
              width={250}
              height={200}
            />
          </div>
          <h1></h1>
        </div>
        <div className="w-1/4 ">
          <div>
            <Image
              className="border-1"
              src={erchLogo}
              alt=""
              width={250}
              height={200}
            />
          </div>
          <h1></h1>
        </div>
        <div className="w-1/4 ">
          <div>
            <Image
              className="border-1"
              src={erchLogo}
              alt=""
              width={250}
              height={200}
            />
          </div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};
