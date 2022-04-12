import React from 'react'
import NaviBar from '../components/NaviBar'
import styles from '../styles/Variable.module.css'

export default function Variable() {
  return (
    <>
      <NaviBar />
      <div className={styles.container}>
        <div className={styles.textBox}>
          <p>
            ปล:
            ลองอ่าน source code ดูได้นะ ถ้าไม่เข้าใจอะไรยังไง ถามเรามาได้ด้วย อีกอย่าง ขกทำเว็บสวยๆละ ปล่อยโง่ๆงี้แหละ 555
          </p>
        </div>
        <div className={styles.textBox}>
          <p>
            ใน jsx เราสามารถเขียนอะไรที่สามารถเขียนได้ใน javascript(ตัวแปร,ค่า, บลาๆๆ) เข้าใน jsx โดยการใส่ {'{}'} ครอบให้ตัวแปรที่ต้องการเช่น
          </p>
          <p>
            ใส่ stringที่บางทีพิมใน html ไม่ได้ เช่นแท็ก html: {"<p>hello world</p>"}
          </p>
          <p>
            ใส่ตัวแปรเข้าไปในตัวแปรแท็กhtml {"<p className={styles.container}>hello world</p>"}
          </p>
          <p>
            array.map() หรือว่าง่ายๆก็คือคล้ายๆฟอร์ลูปผ่านแต่ละตัวโดยยัดเข้าฟังก์ชั่นที่กำหนดไว้ (ในอันนี้เอาแต่ละตัวยัดเข้าตัวแท็ก {"<p>"}):
            <div className={styles.textBox}>
              {['one', 'two', 'three', 'four'].map(
                  (x) => {
                    return <p key={x}>{x}</p>
                  }
                )
              }
            </div>
          </p>
        </div>
      </div>
    </>
  )
}
