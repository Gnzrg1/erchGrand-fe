import react, { FC, useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Erchlogo from "../imgs/ErchLogo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { BsListNested } from "react-icons/bs";
import { userIdCon } from "../Context/userIdContext";
import avatar from "../imgs/images.jpg";

export const Header = () => {
  const { userId, setUserId } = useContext(userIdCon);
  const [user, setUser] = useState(false);
  useEffect(() => {
    userId ? "" : setUserId(localStorage.getItem("currentUserId"));
  }, []);
  let lastScrollTop = 0;
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const Navbar = (document.getElementById("Navbar") as HTMLElement) || null;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
      className="fixed top-0 w-5/5 ps-5 bg-head text-white sticky top-0 z-[50] bg-white ease-out duration-300"
      id="Navbar"
    >
      <div className="ps-5 w-full py-2 border-b border-b-white/[.15] flex items-center justify-between">
        <div className="flex w-1/5 items-center gap-7 hidden md:flex">
          <Link href="/">
            <Image
              className="w-2/4 hover:animate-spin"
              src={Erchlogo}
              alt="ErchLogo"
            />
          </Link>
        </div>
        <div className="w-4/5 px-8 hidden md:flex">
          <nav className="w-full">
            <ul className="flex items-center justify-evenly text-md-regular">
              <li className="hover:text-white/70 duration-300">
                <Link href="/">Нүүр</Link>
              </li>
              <li className="hover:text-white/70 duration-300">
                <Link href="/#serviceSection">Засвар үйлчилгээ</Link>
              </li>

              <li className="hover:text-white/70 duration-300 ">
                <Link href="/">Бидний тухай</Link>
              </li>
              <li className="hover:text-white/70 duration-300 ">
                <Link href="/">Бидэнтэй холбогдох</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex md:hidden md:1/3">
          <button className="text-xl">
            <BsListNested />
          </button>
        </div>

        <div className="flex pe-8 w-1/5 md:w-full items-center justify-end  gap-7 ps-8 ">
          <div className="flex gap-6">
            <button className="text-head rounded-lg px-5 py-2 text-md-regular hover:bg-white/70 duration-300 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              <Link href="/login">Цаг захиалах</Link>
            </button>
            {userId ? (
              <div>
                <img src="" />
              </div>
            ) : (
              <button className="text-head rounded-lg px-5 py-2  text-md-regular hover:bg-white/70 duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link href="/Login">Нэвтрэх</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
