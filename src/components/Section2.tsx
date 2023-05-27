import React from "react";
import { useState } from "react";

export const Section2 = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex flex-col justify-between ">
      <div className="bg-gradient-to-r px-12 from-gray-900 to-gray-500 z-0 w-full flex flex-col gap-8">
        <h1 className="text-5xl">Service & Repair</h1>
        <div className="w-full bg-gradient-to-r px-8 from-gray-900 to-gray-500 z-0  flex items-end justify-start">
          <div className="flex w-1/6 justify-between">
            <button
              onClick={() => setShow(false)}
              className="w-2/4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Button1
            </button>
            <button
              onClick={() => setShow(true)}
              className="w-2/4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Button2
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center"
        style={{ backgroundColor: "white", padding: "64px 32px 64px 32px" }}
      >
        {show ? (
          <div className="flex gap-5">
            <div className="flex gap-5">
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "grey",
                }}
                id="agregat"
              >
                <div className="flex">
                  <h2 style={{ color: "black", fontSize: "25px" }}>
                    <strong className="text-white">Агрегат засвар</strong>
                  </h2>
                  <p></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div></div>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "grey",
                }}
                id="CRDI"
              >
                <div className="flex flex-column justify-content-center align-items-center">
                  <h2 style={{ color: "black", fontSize: "25px" }}>
                    <strong className="text-white">CRDI оношлогоо</strong>
                  </h2>
                  <p></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
            <div className="flex gap-5">
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "grey",
                }}
                id="oil-change"
              >
                <div className="flex flex-column justify-content-center align-items-center">
                  <h2 style={{ color: "black", fontSize: "25px" }}>
                    <strong className="text-white">Тос солих</strong>
                  </h2>
                  <p></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div></div>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "grey",
                }}
                id="balance"
              >
                <div className="flex flex-column justify-content-center align-items-center">
                  <h2 style={{ color: "black", fontSize: "25px" }}>
                    <strong className="text-white">Баланс тохиргоо</strong>
                  </h2>
                  <p></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            <div className="flex gap-5">
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "grey",
                }}
                id="wheel-alignment"
              >
                <div className="flex">
                  <h2 style={{ color: "black", fontSize: "25px" }}>
                    <strong className="text-white">Тэнхлэг тохиргоо</strong>
                  </h2>
                  <p></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div></div>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "grey",
                }}
                id="smart-diognasis"
              >
                <div className="flex flex-column justify-content-center align-items-center">
                  <h2 style={{ color: "black", fontSize: "25px" }}>
                    <strong className="text-white">Смарт оношлогоо</strong>
                  </h2>
                  <p></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
            <div className="flex gap-5">
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "grey",
                }}
                id="computer-diognasis"
              >
                <div className="flex flex-column justify-content-center align-items-center">
                  <h2 style={{ color: "black", fontSize: "25px" }}>
                    <strong className="text-white">Компютер оношлогоо</strong>
                  </h2>
                  <p></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div></div>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "grey",
                }}
                id="balance"
              >
                <div className="flex flex-column justify-content-center align-items-center">
                  <h2 style={{ color: "black", fontSize: "25px" }}>
                    <strong className="text-white">Баланс тохиргоо</strong>
                  </h2>
                  <p></p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
