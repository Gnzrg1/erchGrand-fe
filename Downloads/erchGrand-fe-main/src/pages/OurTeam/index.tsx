import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
export default function OurTeam() {
  return (
    <div>
      <Link
        href="/LandingPage"
        className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-lg"
      >
        <IoMdArrowBack className="text-white text-[2rem]" />
      </Link>
      <div className="w-[100vw] h-[240vh] md:h-[70vh] flex flex-col items-center gap-16 p-4">
        <div className="italic text-white" style={{ fontSize: "40px" }}>
          <strong className="text-black">Хамт олон</strong>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-sm w-full md:w-1/4 text-center h-full rounded overflow-hidden shadow-lg">
            <div className="w-full h-1/2" id="ourTeam1"></div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Гүйцэтгэх захирал</div>
              <p className="text-black" style={{ fontSize: "20px" }}>
              Шижир
            </p>
            <div className="flex justify-evenly">
              <p className="text-gray-700 ">
              Туршлага : 
              </p>
              <p className="text-strong">
              +10 жил
              </p>
              </div>
              <div className="flex justify-evenly">
              <p className="text-gray-700 text-base">
              Холбогдох утас : 
              </p>
              <p className="underline underline-offset-1">
              91118781
              </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 text-center h-full rounded overflow-hidden shadow-lg">
            <div className="w-full h-1/2" 
            // id="ourTeam4"
            ></div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Ерөнхий Инженер</div>
              <p className="text-black" style={{ fontSize: "20px" }}>
              Батхишиг
            </p>
            <div className="flex justify-evenly">
              <p className="text-gray-700 ">
              Туршлага : 
              </p>
              <p className="text-strong">
              +10 жил
              </p>
              </div>
              <div className="flex justify-evenly">
              <p className="text-gray-700 text-base">
              Холбогдох утас : 
              </p>
              <p className="underline underline-offset-1">
              99878294
              </p>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/4 text-center h-full rounded overflow-hidden shadow-lg">
            <div className="w-full h-1/2" id="ourTeam2"></div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Механик</div>
              <p className="text-black" style={{ fontSize: "20px" }}>
              Сайнбилэг
            </p>
            <div className="flex justify-evenly">
              <p className="text-gray-700 ">
              Туршлага : 
              </p>
              <p className="text-strong">
              +10 жил
              </p>
              </div>
              <div className="flex justify-evenly">
              <p className="text-gray-700 text-base">
              Холбогдох утас : 
              </p>
              <p className="underline underline-offset-1">
              96043096
              </p>
              </div>
            </div>
          </div>
        
      
          <div className="w-full md:w-1/4 text-center h-full rounded overflow-hidden shadow-lg">
            <div className="w-full h-1/2" 
            // id="ourTeam4"
            ></div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Механик</div>
              <p className="text-black" style={{ fontSize: "20px" }}>
              Мөнхбат
            </p>
            <div className="flex justify-evenly">
              <p className="text-gray-700 ">
              Туршлага : 
              </p>
              <p className="text-strong">
              +10 жил
              </p>
              </div>
              <div className="flex justify-evenly">
              <p className="text-gray-700 text-base">
              Холбогдох утас : 
              </p>
              <p className="underline underline-offset-1">
              99822723
              </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 text-center h-full rounded overflow-hidden shadow-lg">
            <div className="w-full h-1/2" 
            // id="ourTeam4"
            ></div>
            <div className="px-6 py-4 flex-col justify-evenly">
              <div className="font-bold text-xl mb-2"> Механик</div>
              <p className="text-black" style={{ fontSize: "20px" }}>
             Лхагвасүрэн
            </p>
            <div className="flex justify-evenly">
              <p className="text-gray-700 ">
              Туршлага : 
              </p>
              <p className="text-strong">
              +10 жил
              </p>
              </div>
              <div className="flex justify-around">
              <p className="text-gray-700 text-base">
              Холбогдох утас : 
              </p>
              <p className="underline underline-offset-1">
              91814020
              </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 text-center h-full rounded overflow-hidden shadow-lg">
            <div className="w-full h-1/2" id="ourTeam3"></div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"> Механик</div>
              <p className="text-black" style={{ fontSize: "20px" }}>
             Баянмөнх
            </p>
            <div className= "flex justify-evenly  ">
              <p className="text-gray-700 ">
              Туршлага : 
              </p>
              <p className="text-strong">
              +10 жил
              </p>
              </div>
              <div className="flex justify-around">
              <p className="text-gray-700 text-base">
              Холбогдох утас : 
              </p>
              <p className="underline underline-offset-1">
              80906925
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
