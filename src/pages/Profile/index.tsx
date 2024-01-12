import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userIdCon } from "@/Context/userIdContext";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import { Utils } from "../../utils/helper";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [ordVal, setOrdVal] = useState([]);
  const [user, setUser] = useState<any>();
  const { userId, setUserId } = useContext(userIdCon);
  const handleClose = () => {
    onClose(selectedValue);
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    if (userId) {
      axios
        .get(`${Utils.API_URL}/user/${userId}`)
        .then((res) => {
          setUser(res.data.result[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Uaswe");
    }
  };
  const [firstName1, setFirstName1] = useState();
  const [lastName1, setLastName1] = useState();
  const [phone1, setPhone1] = useState();
  const [email1, setEmail1] = useState();
  const person = {
    firstName: firstName1,
    lastName: lastName1,
    phone: phone1,
    email: email1,
  };
  const handleSave = () => {
    axios
      .put(`${Utils.API_URL}/user/${userId}`, person)
      .then((res) => {
        console.log(res),
          alert("Amjilttai hadgallaa"),
          getData(),
          handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="w-[300px] h-[350px] flex flex-col gap-4 px-4 py-4">
        <div className="text-2xl text-bold">Янзлах</div>
        <input
          className="w-100 h-[40px] border border-solid border-slate-200 rounded-lg px-4"
          onChange={(e: any) => setFirstName1(e.target.value)}
          defaultValue={user?.firstName}
        />
        <input
          className="w-100 h-[40px] border border-solid border-slate-200 rounded-lg px-4"
          onChange={(e: any) => setLastName1(e.target.value)}
          defaultValue={user?.lastName}
        />
        <input
          type="number"
          className="w-100 h-[40px] border border-solid border-slate-200 rounded-lg px-4"
          onChange={(e: any) => setPhone1(e.target.value)}
          defaultValue={user?.phone}
        />
        <input
          className="w-100 h-[40px] border border-solid border-slate-200 rounded-lg px-4"
          onChange={(e: any) => setEmail1(e.target.value)}
          defaultValue={user?.email}
        />
        <div className="flex gap-4">
          <button
            className="w-[120px] h-[40px] bg-sky-500 rounded-lg text-white"
            onClick={handleSave}
          >
            Хадгалах
          </button>
          <button
            className="w-[120px] h-[40px] bg-red-500 rounded-lg text-white"
            onClick={handleClose}
          >
            Цуцлах
          </button>
        </div>
      </div>
    </Dialog>
  );
}
export default function Profile() {
  const [open, setOpen] = useState(false);
  const { userId, setUserId } = useContext(userIdCon);
  const [user, setUser] = useState<any>();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8000/api/user/${userId}`)
        .then((res) => {
          setUser(res.data.result[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Uaswe");
    }
  }, []);
  console.log(user);
  return (
    <div className="bg-black flex gap-4">
      <Link
        href="/LandingPage"
        className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-lg"
      >
        <IoMdArrowBack className="text-white text-[2rem]" />
      </Link>
      <div>
        <h2 className="text-white italic" style={{ fontSize: "40px" }}>
          <strong>Хувийн мэдээлэл</strong>
        </h2>
        <div className="bg-black w-[100vw] h-[100vh] flex flex-col gap-2">
          <div className="text-white">Нэр: {user?.firstName}</div>
          <div className="text-white">Овог: {user?.lastName}</div>
          <div className="text-white">Утас: {user?.phone}</div>
          <div className="text-white">Имайл: {user?.email}</div>
          <button
            className="bg-slate-800 hover:bg-slate-400 w-[120px] h-[40px] flex justify-center items-center rounded-lg text-white"
            onClick={handleClickOpen}
          >
            Янзлах
          </button>
          <SimpleDialog selectedValue="" open={open} onClose={handleClose} />
        </div>
      </div>
    </div>
  );
}
