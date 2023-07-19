import React, { useEffect, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Erchlogo from "../imgs/ErchLogo.png";
import { BsListNested } from "react-icons/bs";
import { userIdCon } from "../Context/userIdContext";
import { BiLogOut } from "react-icons/bi";
import Badge from "@mui/material/Badge";
import { FiMail } from "react-icons/fi";
import axios from "axios";
import Dialog from "@mui/material/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [ordVal, setOrdVal] = useState([]);
  const { userId, setUserId } = useContext(userIdCon);
  // const [empty, setEmpty] = useState(true);
  useEffect(() => {
    userId ? "" : setUserId(localStorage.getItem("currentUserId"));
  }, []);
  // console.log(ordVal);
  const handleClose = () => {
    onClose(selectedValue);
  };
  useEffect(() => {
    axios
      .post("http://localhost:8000/api/orderUser", { userId: userId })
      .then((res) => {
        setOrdVal(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <ul className="w-[200px] bg-white">
        {ordVal.map((e, index) => {
          return (
            <li key={index} className="flex">
              <div>{e.work}</div>
              <div>{e.date}</div>
              <div>{e.time}</div>
            </li>
          );
        })}
        <div>Хоосон байна.</div>
      </ul>
    </Dialog>
  );
}
export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
  const [ordVal2, setOrdVal2] = useState([]);
  const { userId, setUserId } = useContext(userIdCon);
  useEffect(() => {
    userId ? "" : setUserId(localStorage.getItem("currentUserId"));
  }, []);
  useEffect(() => {
    axios
      .post("http://localhost:8000/api/orderUser", { userId: userId })
      .then((res) => {
        setOrdVal2(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let lastScrollTop = 0;
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const Navbar = document.getElementById("Navbar") as HTMLElement;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        Navbar.style.top = "-80px";
      } else {
        Navbar.style.top = "1px";
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
              className="hover:animate-spin w-10 h-10"
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
              <div className="flex justify-center items-center gap-5">
                <div>
                  <button onClick={handleClickOpen}>
                    <Badge badgeContent={ordVal2?.length} color="primary">
                      <FiMail className="text-2xl" />
                    </Badge>
                  </button>
                  <SimpleDialog
                    selectedValue=""
                    open={open}
                    onClose={handleClose}
                  />
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem("currentUserId"), setUserId("");
                  }}
                  className="flex justify-between items-center text-head rounded-lg px-5 py-2 text-md-regular hover:bg-slate-600 duration-300 bg-none text-white font-bold py-2 px-4 rounded"
                >
                  <BiLogOut className="text-2xl pt-1" />
                  <p>Гарах</p>
                </button>
              </div>
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
