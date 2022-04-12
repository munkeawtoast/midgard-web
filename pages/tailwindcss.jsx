import React from 'react'
import NaviBar from '../components/NaviBar'

export default function TailwindCss() {
  return (
    <>
      <NaviBar />
      <div className={
        "bg-yellow-100 " +
        "duration-500 hover:bg-yellow-200 " +
        "h-screen " +
        "font-thai font-medium"
      }>
        <div className="mx-8 p-4 border rounded-full border-yellow-900 hover:border-8 duration-100">
          <p>
            tailwind.css คือตัวที่เราคิดว่าจะเอามาแทน css ปกติเพื่อความรวดเร็วในการทำงานและความง่ายในการกำหนดเว็บสำหรับหน้าเว็บแบบ responsive
          </p>
        </div>
        <div className="flex justify-center items-stretch w-full h-32 gap-8 p-4 border border-yellow-900">
          <div className="bg-red-300 w-48">
            test
          </div>
        </div>
      </div>
    </>
  )
}
