import React, { useContext, useEffect } from "react";
import { Header } from "./Header";
import { Meta } from "./Meta";
import { userIdCon } from "../Context/userIdContext";

export const Layout = ({ children }: any) => {
  const { userId, setUserId } = useContext(userIdCon);
  useEffect(() => {
    setUserId(localStorage.getItem("currentUserId"));
  }, []);
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};
