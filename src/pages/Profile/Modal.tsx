// EditModal.js
import React, { useState, useEffect, useContext } from 'react';
import Modal from '@mui/material/Modal';
import { userIdCon } from "@/Context/userIdContext";
import axios from 'axios';

interface EditModalProps {
    open: boolean;
    onClose: () => void;
    dataToEdit: any; // Replace with your data type
    onSave: (editedData: any) => void; // Replace with your data type
  }
  const EditModal: React.FC<EditModalProps> = ({ open, onClose, dataToEdit, onSave }) => {
    const [editedData, setEditedData] = useState(dataToEdit);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditedData({ ...editedData, [name]: value });
    };
    const handleSave = () => {
      onSave(editedData);
      onClose();
      axios
      .put(`http://localhost:8000/api/user/${userId}`,{changed})
      .then((res) => {})   
      .catch((err) => {console.log(err)})  
    };
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
        console.log("")
      }
  },[]) 
  const [firstNameChanged, setFirstNameChanged] = useState("")
  const [lastNameChanged, setLastNameChanged] = useState("")
  const [emailChanged, setEmailChanged] = useState("")
  const [phoneChanged, setPhoneChanged] = useState<Number | undefined>()
  const changed: {firstName: string, lastName: string, email: string, phone: number}={
    firstName: firstNameChanged,
    lastName: lastNameChanged,
    email: emailChanged,
    phone: phoneChanged
  }
  
  return (
    <Modal open={open} onClose={onClose}>
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className="modal-content w-[350px] h-[400px] bg-white rounded-lg flex flex-col gap-4 px-4 py-4">
        <h2 className='text-black font-bold text-[20px] '>Мэдээллийг янзлах</h2>
        <form>
          <div className='flex flex-col gap-4'>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                  placeholder="Нэр"
                  value={user?.firstName}
                  onChange={(e) => setFirstNameChanged(e.target.value)}
                />
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                  placeholder="Овог"
                  value={user?.lastName}
                  onChange={(e) => setLastNameChanged(e.target.value)}
                />
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                  placeholder="И-мэйл"
                  value={user?.email}
                  onChange={(e) => setEmailChanged(e.target.value)}
                />
                <input
                  name="phoneNumber"
                  type="number"
                  id="phone"
                  className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                  placeholder="Утасны дугаар"
                  value={user?.phone}
                  onChange={(e) => setPhoneChanged(e.target.value)}
                />    
          </div>
        </form>
        <div className='flex'>
          <button className="w-[120px] h-[40px] flex justify-center items-center bg-sky-600 text-white rounded-md" onClick={handleSave}>
            Save
          </button>
          <button className="w-[120px] h-[40px] flex justify-center items-center bg-rose-600 text-white rounded-md" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
      </div>
    </Modal>
    
  );
};

export default EditModal;
