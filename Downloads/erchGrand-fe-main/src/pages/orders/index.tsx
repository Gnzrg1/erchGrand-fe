import React, { useState, useContext, useEffect } from "react";
import { Utils } from "../../utils/helper";
import axios from "axios";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function Index() {
  const [data, setData] = useState<any>();
  const [orderData, setOrderData] = useState<any>();

  const getData = () => {
    axios
      .get(`${Utils.API_URL}/order`)
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteOrder = (id: any) => {
    axios
      .delete(`${Utils.API_URL}/order/${id}`)
      .then((res) => {
        alert("Амжилттай устгалаа"), getData();
      })
      .catch((err) => console.log(err));
  };

  const pushData = (id: any) => {
    axios
      .get(`${Utils.API_URL}/order/${id}`)
      .then((res) => setOrderData(res.data.result))
      .catch((err) => console.log(err));
    axios
      .post(`${Utils.API_URL}/data`, {
        phoneNumber: orderData[0].Phone,
        date: orderData[0].date,
        work: orderData[0].work,
        mechanic: orderData[0].Mechanic,
        carNumber: orderData[0].carNum,
        carModel: orderData[0].carModel,
        totalPrice: 100000000,
        startTime: "09:00",
        endTime: "12:00",
        payment: "Card",
      })
      .then((res) => alert("Амжилттай хадгаллаа"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-[100vw] bg-black">
      <Link
        href="/LandingPage"
        className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-lg"
      >
        <IoMdArrowBack className="text-white text-[2rem]" />
      </Link>
      <table className="w-full">
        <thead>
          <tr>
            <th>№</th>
            <th>Огноо</th>
            <th>Цаг</th>
            <th>Үйлчилгээ</th>
            <th>Механик</th>
            <th>Утасны дугаар</th>
            <th>Номер</th>
            <th>Марк</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e: any, i: number) => {
            return (
              <tr key={e} className="text-center text-white">
                <td>{i + 1}</td>
                <td>{e.date}</td>
                <td>{e.time}</td>
                <td>{e.work}</td>
                <td>{e.Mechanic}</td>
                <td>{e.Phone}</td>
                <td>{e.carNum}</td>
                <td>{e.carModel}</td>
                <td className="flex gap-2">
                  <button
                    className="bg-blue-600 rounded-md p-2"
                    onClick={() => pushData(e._id)}
                  >
                    Хадгалах
                  </button>
                  <button
                    className="bg-red-600 rounded-md p-2"
                    onClick={() => deleteOrder(e._id)}
                  >
                    Устгах
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
