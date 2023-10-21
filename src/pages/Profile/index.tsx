import {useState, useEffect, useContext } from "react";
import axios from "axios";
import { userIdCon } from "@/Context/userIdContext";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function Profile() {
    const { userId, setUserId } = useContext(userIdCon);
    const [user, setUser] = useState();
    useEffect(() => {
      if(userId){
        axios
        .get(`http://localhost:8000/api/user/${userId}`)
        .then((res) => {
            setUser(res.data.result[0]);
            
        })
        .catch((err) => {
            console.log(err);      
        })
      }else{
        console.log("Uaswe")
      }
      
    },[])
    console.log(user)
    return (
      <div className="flex flex-col gap-4">
        <Link
          href="/LandingPage"
          className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-lg"
        >
          <IoMdArrowBack className="text-white text-[2rem]" />
        </Link>
        <div className="bg-black w-[100vw] h-[100vh] flex flex-col gap-2">
          <div className="text-white">
            Нэр: {user?.firstName}
          </div>
          <div className="text-white">
            Овог: {user?.lastName}
          </div>
          <div className="text-white">
            Утас: {user?.phone}
          </div>
          <div className="text-white">
            Имайл: {user?.email}
          </div>
          <button className="bg-slate-800 hover:bg-slate-400 w-[120px] h-[40px] flex justify-center items-center rounded-lg">Янзлах</button>
        </div>
      </div>
    )
}