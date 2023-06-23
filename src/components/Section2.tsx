import React from "react";
import { useState } from "react";

export const Section2 = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="sm:px-16 flex flex-col lg:flex-row gap-12" id="serviceSection">
      <div className="w-full lg:w-1/3 h-[60vh] flex flex-col justify-between items-start">
        <h2 className="text-white italic" style={{fontSize:"40px"}}><strong>БИДНИЙ ҮЙЛЧИЛГЭЭ</strong></h2>
        <div className="h-2/4 lg:h-3/5 w-full px-4 py-4 flex justify-start items-end" id="wheel-alignment">
          <div className="h-10 w-40 bg-white rounded-lg flex justify-center items-center">Тэнхлэг тохиргоо</div>
        </div>
      </div>
      <div className="w-full h-[30vh] lg:h-[60vh] lg:w-1/3 flex justify-start items-end px-4 py-4" id="smart-diagnosis">
        <div className="h-10 w-40 bg-white rounded-lg flex justify-center items-center">Смарт оношлогоо</div>
      </div>
      <div className="w-full h-[60vh] lg:w-1/3 flex flex-col gap-12">
        <div className="w-full h-2/4 flex justify-start items-end px-4 py-4" id="computer-diagnosis">
          <div className="h-10 w-50 bg-white rounded-lg flex justify-center items-center">Компьютер оношлогоо</div>
        </div>
        <div className="w-full h-2/4 flex justify-start items-end px-4 py-4" id="balance">
          <div className="h-10 w-40 bg-white rounded-lg flex justify-center items-center">Балансе тохиргоо</div>
        </div>
      </div>
    </div>
  );
};
