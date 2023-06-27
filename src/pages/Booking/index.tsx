import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import axios from "axios";

export default function Booking() {
  const [timeData, setTimeData] = useState([]);
  const [orderData, setOrderData] = useState({});
  const [serVal, setSerVal] = useState("");
  const [orderVal, setOrderVal] = useState([]);
  const [mechVal, setMechVal] = useState<String>();
  const [dateVal, setDateVal] = useState("");
  const [test, setTest] = useState(false);
  const [time2, setTime2] = useState([]);

  useEffect(() => {
    let newArr: any = [];
    orderVal?.map((order) => {
      timeData?.map((e) => {
        if (e?.time != order?.time) {
          if (!newArr.includes(e.time)) {
            newArr.push(e.time), setTime2(newArr);
          }
        }
      });
    });
  }, [orderVal]);
  useEffect(() => {
    if (dateVal && mechVal) {
      setTest(true);
    }
  }, [mechVal, dateVal]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/time")
      .then((res) => setTimeData(res.data.result))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .post("http://localhost:8000/api/orders", {
        date: dateVal,
        Mechanic: mechVal,
      })
      .then((res) => setOrderVal(res.data.result))
      .catch((err) => console.log(err));
  }, [test]);
  const today = new Date();
  const numberOfDaysToAdd = 7;
  const date = today.setDate(today.getDate());
  const nextWeek = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().split("T")[0];
  const nextWeekVal = new Date(nextWeek).toISOString().split("T")[0];
  const bookTime = async (event: any) => {
    event.preventDefault();
    const data = {
      date: dateVal,
      work: event.target.services.value,
      Mechanic: mechVal,
      time: event.target.time.value,
      Phone: event.target.phoneNumber.value,
      carModel: event.target.carModel.value,
      carNum: event.target.carNum.value,
      userId: localStorage.getItem("currentUserId"),
    };

    setOrderData(data);
    if (orderData) {
      axios
        .post("http://localhost:8000/api/order", orderData)
        .then((res) => {
          alert("Amjilttai zahiallaa");
          console.log(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const services = ["Тэнхлэг тохиргоо", "Смарт оношлогоо"];
  const WA = ["Сайнбилэг", "Мөнхбат", "Баянмөнх"];
  const SD = ["Шижир", "Сайнбилэг", "Баянмөнх"];
  const handleChange = (e: any) => {
    if (e == services[0]) {
      setSerVal("Тэнхлэг тохиргоо");
    } else if (e == services[1]) {
      setSerVal("Смарт оношлогоо");
    }
  };
  return (
    <div>
      <div className="bg-black h-[100vh]">
        <Link
          href="/LandingPage"
          className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-lg"
        >
          <IoMdArrowBack className="text-white text-[2rem]" />
        </Link>
        <div className="p-[50px] bg-black shadow-shadow-dashboard">
          <div className="mb-[30px]">
            <h1 className="text-head text-white text-[30px] font-bold leading-9 mb-2">
              Цаг захиалах
            </h1>
          </div>
          <form onSubmit={bookTime} className="text-head">
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
                    min={defaultValue}
                    max={nextWeekVal}
                    id="dateDay"
                    onChange={(e) => setDateVal(e.target.value)}
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
                    onChange={(e) => handleChange(e.target.value)}
                    name="services"
                    id="services"
                    className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                  >
                    <option selected></option>
                    {services.map((e, index) => {
                      return <option key={index}>{e}</option>;
                    })}
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
                  <select
                    name="mechanic"
                    onChange={(e) => setMechVal(e.target.value)}
                    id="mechanic"
                    className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                  >
                    <option selected></option>
                    {serVal == "Тэнхлэг тохиргоо"
                      ? WA.map((e, index) => {
                          return <option key={index}>{e}</option>;
                        })
                      : SD.map((e, index) => {
                          return <option key={index}>{e}</option>;
                        })}
                  </select>
                </div>

                <div className="w-full md:w-2/4">
                  <label
                    className="block mb-2 text-lg-medium text-white"
                    htmlFor="phone"
                  >
                    Цаг
                  </label>
                  <select
                    name="time"
                    id="time"
                    className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                  >
                    <option selected></option>
                    {orderVal?.length > 1
                      ? time2?.map((e, index) => {
                          return <option key={index}>{e}</option>;
                        })
                      : timeData.map((e, index) => {
                          return <option key={index}>{e.time}</option>;
                        })}
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="w-full md:w-2/4">
                  <label className="block mb-2 text-lg-medium text-white">
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
                  <label className="block mb-2 text-lg-medium text-white">
                    Машины марк
                  </label>
                  <input
                    name="carModel"
                    type="text"
                    id="carModel"
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
                    name="carNum"
                    type="text"
                    id="carNum"
                    className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-black text-md-regular"
                    placeholder="Машины номер"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="block w-40 py-4 text-head rounded-lg outline outline-offset-2 outline-white mb-5 duration-300 text-white hover:text-slate-300 hover:outline-slate-300"
            >
              Цаг захиалах
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
