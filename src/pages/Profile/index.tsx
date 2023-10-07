import {useState, useEffect, useContext } from "react";
import axios from "axios";
import { userIdCon } from "@/Context/userIdContext";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import EditModal from './Modal';
import { data } from "autoprefixer";

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
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [dataToEdit, setDataToEdit] = useState<any>({}); // Initialize with your data
  
    const openEditModal = (data: any) => {
      setDataToEdit(data);
      setIsEditModalOpen(true);
    };
  
    const closeEditModal = () => {
      setIsEditModalOpen(false);
    };
  
    const handleSave = (editedData: any) => {
      // Handle the save action here (e.g., send editedData to the server)
      console.log('Saving edited data:', editedData);
    };
    return (
        <div className="bg-black w-[100vw] h-[100vh] flex flex-col gap-8">
          <Link
        href="/LandingPage"
        className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-lg"
      >
        <IoMdArrowBack className="text-white text-[2rem]" />
      </Link>
        <div className="flex flex-col gap-4">
          <div className="text-white">
            Нэр: {user?.firstName}
          </div>
          <div>
            Овог: {user?.lastName}
          </div>
          <div>
            Имайл: {user?.email}
          </div>
          <div>
            Утас: {user?.phone}
          </div>
          <div>
      {/* Render your data and a button to open the edit modal */}
      <button className="w-[120px] h-[40px] flex justify-center items-center bg-slate-400 text-white rounded-md" onClick={() => openEditModal(data)}>Янзлах</button>
      
      {/* Render the EditModal */}
      <EditModal
        open={isEditModalOpen}
        onClose={closeEditModal}
        dataToEdit={dataToEdit}
        onSave={handleSave}
      />
    </div>
          </div>
        </div>
    )
}