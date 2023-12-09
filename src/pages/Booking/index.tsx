import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import axios from "axios";

export default function Booking() {
  const [orderData, setOrderData] = useState();
  const [serVal, setSerVal] = useState("");
  const [orderVal, setOrderVal] = useState([]);
  const [mechVal, setMechVal] = useState<String>();
  const [dateVal, setDateVal] = useState("");
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (dateVal != "" && mechVal != "") {
      setTest(true);
    }
  }, [mechVal]);
  useEffect(() => {
    console.log(test);
    axios
      .post("http://localhost:8000/api/orders", {
        date: dateVal,
        Mechanic: mechVal,
      })
      .then((res) => {
        setOrderVal(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [test === true]);

  let arr: any = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];
  let time1 = orderVal?.map((e: any, index: number) => {
    return e.time;
  });
  arr = arr.filter((item: any) => !time1?.includes(item));

  const today = new Date();
  const numberOfDaysToAdd = 7;
  const date = today.setDate(today.getDate());
  const nextWeek = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().split("T")[0];
  const nextWeekVal = new Date(nextWeek).toISOString().split("T")[0];
  const bookTime = async (event: any) => {
    event.preventDefault();
    const data: any = {
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
      console.log(orderData);
      axios
        .post("http://localhost:8000/api/order", orderData)
        .then((res) => {
          console.log(res.data.result);
          alert("Амжилттай захиаллаа");
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
                          return (
                            <option key={index} value={e}>
                              {e}
                            </option>
                          );
                        })
                      : SD.map((e, index) => {
                          return (
                            <option key={index} value={e}>
                              {e}
                            </option>
                          );
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
                    {arr.map((e: any, index: number) => {
                      return <option key={index}>{e}</option>;
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
