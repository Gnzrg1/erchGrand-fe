import React from "react";
import Image from "next/image";
import fordLogo from "../imgs/Ford_logo_flat.svg.png";
import lexusLogo from "../imgs/Lexus-Logo.png";
import toyotaLogo from "../imgs/emblem_ogp_001.png";
import nissanLogo from "../imgs/nissan-brand-logo-1200x938-1594842787.jpg";
import benzLogo from "../imgs/MBG.DE-da0d7ae5.png";
import hondaLogo from "../imgs/honda-logo-png-picture-20.png";

export const Logos = () => {
  return (
    <div
      className="flex items-center justify-center gap-3"
      style={{ backgroundColor: "white", height: "25vh" }}
    >
      <Image src={fordLogo} alt="" width={150} height={100} />
      <Image src={lexusLogo} alt="" width={150} height={100} />
      <Image src={toyotaLogo} alt="" width={250} height={100} />
      <Image src={nissanLogo} alt="" width={150} height={150} />
      <Image src={benzLogo} alt="" width={250} height={100} />
      <Image src={hondaLogo} alt="" width={100} height={100} />
    </div>
  );
};
