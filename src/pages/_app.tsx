import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { userIdCon } from "@/Context/userIdContext";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const [userId, setUserId] = useState<any>(
    localStorage.getItem("currentUserId")
  );
  // setUserId(localStorage.getItem("currentUserId"));
  return (
    <userIdCon.Provider value={{ userId, setUserId }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </userIdCon.Provider>
  );
}
