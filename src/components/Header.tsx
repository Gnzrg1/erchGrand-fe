import react, { useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Erchlogo from "../imgs/ErchLogo.png";
import { BsListNested } from "react-icons/bs";
import { userIdCon } from "../Context/userIdContext";
import { BiLogIn } from "react-icons/bi";

export const Header = () => {
  const { userId, setUserId } = useContext(userIdCon);
  useEffect(() => {
    userId ? "" : setUserId(localStorage.getItem("currentUserId"));
  }, []);
  let lastScrollTop = 0;
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const Navbar = document.getElementById("Navbar") as HTMLElement;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        Navbar.style.top = "-200px";
      } else {
        Navbar.style.top = "0px";
        Navbar.style.color = "black";
        Navbar.style.zIndex = "100";
      }
      lastScrollTop = scrollTop;
    });
  }

  return (
    <div
      className="fixed top-0 w-full bg-head text-white sticky top-0 z-[50] bg-black px-4 sm:px-8 z-0 ease-out duration-300"
      id="Navbar"
    >
      <div className="w-full py-2 border-b border-b-white/[.15] flex items-center justify-between">
        <div className="flex items-center gap-7 hidden md:flex">
          <Link href="/">
            <Image
              className="w-2/4 hover:animate-spin"
              src={Erchlogo}
              alt="ErchLogo"
            />
          </Link>
        </div>
        <div className="hidden w-2/4 md:flex">
          <nav className="w-full">
            <ul className="flex items-center justify-evenly text-md-regular gap-4">
              <li className="hover:text-white/70 text-white duration-300">
                <Link href="/">Нүүр</Link>
              </li>
              <li className="hover:text-white/70 text-white duration-300">
                <Link href="/#serviceSection">Засвар үйлчилгээ</Link>
              </li>

              <li className="hover:text-white/70 text-white duration-300 ">
                <Link href="/#aboutUs">Бидний тухай</Link>
              </li>
              <li className="hover:text-white/70 text-white duration-300 ">
                <Link href="/#address">Бидэнтэй холбогдох</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex md:hidden md:1/3">
          <button className="text-white">
            <BsListNested />
          </button>
        </div>

        <div className="flex items-center justify-end  gap-7">
          <div className="flex gap-6">
            {userId ? (
              <button
                onClick={() => {
                  localStorage.removeItem("currentUserId"), setUserId("");
                }}
                className="flex justify-between items-center text-head rounded-lg px-5 py-2 text-md-regular hover:bg-slate-600 duration-300 bg-none text-white font-bold py-2 px-4 rounded"
              >
                <p>Гарах</p>
                <BiLogIn className="text-2xl pt-1" />
              </button>
            ) : (
              <button className="text-head rounded-lg px-5 py-2 text-md-regular hover:bg-slate-600 duration-300 bg-none text-white font-bold py-2 px-4 rounded">
                <Link href="/Login">Нэвтрэх</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
