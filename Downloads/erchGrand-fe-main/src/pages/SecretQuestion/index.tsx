import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Utils } from "../../utils/helper";
import { userIdCon } from "@/Context/userIdContext";
import { useRouter } from "next/router";
export default function Index() {
  const { userId } = useContext(userIdCon);
  const [user, setUser] = useState<any>();
  const [secretQuest1, setSecretQuest1] = useState();
  const [secretQuest2, setSecretQuest2] = useState();
  const route = useRouter();

  const getUser = () => {
    axios
      .get(`${Utils.API_URL}/user/${userId}`)
      .then((res) => setUser(res.data.result))
      .catch((err) => console.log(err));
  };
  console.log(user);

  useEffect(() => {
    getUser();
  }, []);
  const changePass = () => {
    if (secretQuest1 == user[0]?.favColor && secretQuest2 == user[0]?.favPet) {
      alert("Шинэ нууц үгээ оруулна уу"), route.push("/ChangePass2");
    } else {
      alert("Мэдээлэл таарахгүй байна");
    }
  };
  return (
    <div className="bg-black">
      <Link
        href="/LandingPage"
        className="w-10 h-10 flex justify-center items-center rounded-lg"
      >
        <IoMdArrowBack className="text-white text-[4rem]" />
      </Link>
      <div className="w-[100vw] h-[100vh] flex justify-center items-start bg-black p-4">
        <div className="w-full flex items-center flex-col gap-6">
          <h1 className="text-3xl text-white">Нууц асуулт</h1>
          <input
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full sm:2/3 md:w-2/4 lg:w-1/3 p-2.5 active:border-sky-400"
            placeholder="Дуртай өнгө"
            type="text"
            onChange={(e: any) => {
              setSecretQuest1(e.target.value);
            }}
          />
          <input
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full sm:2/3 md:w-2/4 lg:w-1/3 p-2.5 active:border-sky-400"
            placeholder="Дуртай амьтан"
            type="text"
            onChange={(e: any) => {
              setSecretQuest2(e.target.value);
            }}
          />
          <button
            onClick={changePass}
            className="text-white w-40 h-10 outline outline-offset-2 outline-white rounded px-3 hover:text-slate-300 hover:outline-slate-300"
          >
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
}
