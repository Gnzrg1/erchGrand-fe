import React, { useEffect, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Erchlogo from "../imgs/ErchLogo.png";
import { CgProfile } from "react-icons/cg";
import { BsList } from "react-icons/bs";
import { userIdCon } from "../Context/userIdContext";
import { BiLogOut } from "react-icons/bi";
import Badge from "@mui/material/Badge";
import { FiMail } from "react-icons/fi";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TbCalendarTime } from "react-icons/tb";
import { Utils } from "../utils/helper";
import { useRouter } from "next/router";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [ordVal, setOrdVal] = useState([]);
  const { userId, setUserId } = useContext(userIdCon);
  const route = useRouter();
  useEffect(() => {
    userId ? "" : setUserId(localStorage.getItem("currentUserId"));
  }, []);
  const handleClose = () => {
    onClose(selectedValue);
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .post(`${Utils.API_URL}/orderUser`, { userId: userId })
      .then((res) => {
        setOrdVal(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteOrder = (_id: any) => {
    axios
      .delete(`${Utils.API_URL}/order/${_id}`)
      .then((res: any) => alert("Амжилттай устгалаа"))
      .catch((err) => console.log(err));
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <ul className="w-[500px] bg-white px-4 py-4 flex flex-col gap-4">
        {ordVal?.map((e: any, index) => {
          return (
            <div key={index}>
              <li className=" flex gap-4 justify-between items-center">
                <div>{e.work}</div>
                <div>{e.date}</div>
                <div>{e.time}</div>
                <button
                  onClick={() => deleteOrder(e._id)}
                  className="rounded-lg bg-red-500 w-[60px] h-[30px] text-white"
                >
                  Устгах
                </button>
              </li>
              <hr></hr>
            </div>
          );
        })}
        {ordVal?.length == 0 ? <div>Хоосон байна.</div> : ""}
      </ul>
    </Dialog>
  );
}
export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [ordVal2, setOrdVal2] = useState([]);
  const { userId, setUserId } = useContext(userIdCon);
  useEffect(() => {
    userId;
    // ? "" : setUserId(localStorage.getItem("currentUserId"));
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
  // let lastScrollTop = 0;
  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", function () {
  //     const Navbar = document.getElementById("Navbar") as HTMLElement;
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > lastScrollTop) {
  //       Navbar.style.top = "-80px";
  //     } else {
  //       Navbar.style.top = "1px";
  //       Navbar.style.color = "black";
  //       Navbar.style.zIndex = "100";
  //     }
  //     lastScrollTop = scrollTop;
  //   });
  // }
  return (
    <div
      className="fixed top-0 w-full bg-head text-white sticky top-0 z-[50] bg-black px-4 sm:px-8 z-0 ease-out duration-300"
      id="Navbar"
    >
      <div className="w-full py-2 border-b border-b-white/[.15] flex items-center justify-between">
        <div className="flex items-center  gap-7 flex">
          <Link href="/">
            <Image
              className="hover:animate-spin w-11 h-11"
              src={Erchlogo}
              alt="ErchLogo"
            />
          </Link>
        </div>
        <div className="hidden w-2/4 lg:flex">
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
        <div className="flex gap-">
          <Link
            href={userId ? "/Booking" : "/Login"}
            className="flex md:hidden justify-center items-center gap-2 text-white"
          >
            <TbCalendarTime />
            Цаг захиалах
          </Link>
          {userId ? (
            <div>
              <Button
                id="basic-button"
                aria-controls={open1 ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick}
              >
                <Badge badgeContent={ordVal2?.length} color="primary">
                  <CgProfile className="text-white text-2xl" />
                </Badge>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open1}
                onClose={handleClose1}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose1}>
                  <Link
                    href="/Profile"
                    className="flex justify-center items-center gap-2"
                  >
                    <CgProfile /> Хувийн мэдээлэл
                  </Link>
                </MenuItem>
                <MenuItem className="flex">
                  <button
                    className="flex justify-center items-center gap-2"
                    onClick={handleClickOpen}
                  >
                    <Badge badgeContent={ordVal2?.length} color="primary">
                      <FiMail className="text-black" />
                    </Badge>
                    Авсан цаг
                  </button>
                  <SimpleDialog
                    selectedValue=""
                    open={open}
                    onClose={handleClose}
                  />
                </MenuItem>
                <hr />
                <MenuItem onClick={handleClose1}>
                  <button
                    onClick={() => {
                      localStorage.removeItem("currentUserId"), setUserId("");
                    }}
                    className="flex justify-between items-center text-black gap-2"
                  >
                    <BiLogOut className="" />
                    <div>Гарах</div>
                  </button>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <button className="text-head rounded-lg px-5 py-2 text-md-regular hover:bg-slate-600 duration-300 bg-none text-white font-bold py-2 px-4 rounded">
              <Link href="/Login">Нэвтрэх</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
