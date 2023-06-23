import React from 'react'

export const ContactUs = () => {
  return (
    <div className='w-full py-4 flex justify-center items-center gap-10 pb-12 md:pb-24 sm:px-16'>
        <div className='w-full flex flex-col justify-start'>
            <p className='text-white italic' style={{fontSize:"40px"}}><strong>СЭТГЭГДЭЛ</strong></p>
            <div className='flex flex-col gap-3'>
              <div>
                <label>Сэтгэгдэл:</label>
                <textarea className="placeholder:text-slate-300 block w-full md:w-3/4 lg:w-2/4 bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Сэтгэгдэл..." name="search" style={{height:"30vh"}}/>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{width:"150px"}}>
                Submit
              </button>
            </div>
        </div>
    </div>
  )
}
