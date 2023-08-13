import {useState, useEffect, useContext } from "react";
import axios from "axios";
import { userIdCon } from "@/Context/userIdContext";

export default function Profile() {
    const { userId, setUserId } = useContext(userIdCon);
    const [user, setUser] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8000/api/user/${userId}`)
        .then((res) => {
            setUser(res.data.result);
            
        })
        .catch((err) => {
            console.log(err);      
        })
    })
    
    return (
        <div className="bg-black w-[100vw] h-[100vh]">
          <div className="text-white">
            Нэр: {user?.firstName}
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    )
}