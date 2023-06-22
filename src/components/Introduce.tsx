import React from "react";

export const Introduce = () => {
  return (
    <div className="sm:px-16 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <h2 className="text-white italic" style={{fontSize:"45px"}}><strong>Бидний Тухай</strong></h2>
          <p className="text-white">“Эрч Гранд” ХХК нь 2010 оноос эхлэн автозасвар үйлчилгээ, автосэлбэгийн худалдаа эрхлэх чиглэлээр үйл ажиллагаа явуулж эхэлсэн.</p>
        </div>
        <p className="w-full lg:w-3/5 flex justify-center items-center text-white">
            Манай автозасварын газар нь бүх төрлийн автомашины агрегат засвар, тэнхлэг тохиргоо,
        компьютер оношлогоо хийх, тос тосолгооны материал солих зэрэг засвар, смарт оношлогоо, дугуйн
        сервис хийх, өргөх зориулалт бүхий сүүлийн үеийн төхөөрөмжүүдээр тоноглогдсон. Мөн үйлчлүүлэгчдийн тав тухтай байдлыг хангах зорилгоор
        2 давхарт хүлээлгийн хэсэг кофе шоп нээж ажиллуулж эхэлсэн.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-slate-500 w-full lg:w-1/4 flex flex-col justify-center items-center" style={{height:"40vh", borderRadius:"20px"}}>
          <h2 className="text-black font-serif font-semibold" style={{fontSize:"90px"}}>20k</h2>
          <p style={{fontSize:"20px"}}>Хүмүүс нийтдээ үйлчлүүлсэн</p>
        </div>
        <div className="w-full lg:w-1/4" id="intro2" style={{height:"40vh"}}></div>
        <div className="w-full lg:w-2/4" id="intro3" style={{height:"40vh"}}></div>
      </div>
    </div>
  );
};
