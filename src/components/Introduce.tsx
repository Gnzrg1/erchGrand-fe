import React from "react";
import Image from "next/image";
import { TbCircleNumber1, TbCircleNumber2 } from "react-icons/tb";

export const Introduce = () => {
  return (
    <div className="w-100 pb-8 bg-white flex">
      <div
        className="w-2/4"
        style={{ backgroundColor: "grey", padding: "32px 16px 32px 16px" }}
      >
        <h1>Erch is the Best</h1>
        <h1 style={{ color: "white" }}>car Repair shop</h1>
        <p>
          Have you encountered a body shop which just took your money but did
          not really bring any good value to your car? Are you looking for an
          auto body repair shop in LA that can give you all the services that
          you need for car? Make your car appear dashing all the time and be
          sure that your car is getting the body work that it needs with our 1
          stop shop. We are restoring a vehicle to it’s original form after it’s
          been involved in an accident. Enjoy convenient car repair and
          maintenance at your home or office. It’s as easy as one two three
        </p>
        <div className="flex">
          <div className="w-2/4 flex gap-3">
            <TbCircleNumber1 style={{ fontSize: "60px" }} />
            <div>
              <div style={{ fontSize: "20px", color: "white" }}>
                Book Appointment
              </div>
              <div>
                Tell us what your car needs or ask for a diagnostic. Receive a
                free, fast & fixed quote.
              </div>
            </div>
          </div>
          <div className="w-2/4 flex gap-3">
            <TbCircleNumber2 style={{ fontSize: "60px" }} />
            <div>
              <div style={{ fontSize: "20px", color: "white" }}>
                Book Appointment
              </div>
              <div>
                Tell us what your car needs or ask for a diagnostic. Receive a
                free, fast & fixed quote.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/4" style={{ backgroundColor: "white", padding:"32px 64px 32px 64px" }} id="intro2">
        <div style={{ fontSize: "35px", color: "white" }}>
          <strong>Excellence in Automotive Services Since 2009</strong>
        </div>
      </div>
    </div>
  );
};
