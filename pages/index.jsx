import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ExampleComponent from '../components/ExampleComponent'
import NaviBar from '../components/NaviBar'

export default function Home() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={styles.bgWrap}>
        <Image
          alt="bgImage"
          src="/dreamy.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
          onDragStart={(e)=>{e.preventDefault()}}
        />
      </div>
      <NaviBar />
      <div className={styles.pageHeader}>
        <h1>Next.js</h1>
      </div>
      <div className={styles.main}>
        <p className={styles.paragraph}>
          <div className={styles.contentHeader}>
            Next.js คืออะไร
          </div>
          <div>
            <p className={styles.paraText}>
              ตัวที่เราทำอยู่จะเรียกว่า {" "}
              <Link
                href="https://reactjs.org/"
              >
                <a target="_blank">
                  next.js
                </a>
              </Link>
              {" "} ถ้าให้อธิบายง่ายๆ มันคือ {" "}
              <Link
                href="https://reactjs.org/"
              >
                <a target="_blank">
                  react
                </a>
              </Link>
              {" "}ที่ทำให้ใช้ง่ายขึ้น
            </p>
          </div>
          
        </p>
        <p className={styles.paragraph}>
          <div className={styles.contentHeader}>
            React คืออะไร
          </div>
          <div>
            <p className={styles.paraText}>
              <Link
                href="https://reactjs.org/"
              >
                <a target="_blank">
                  React
                </a>
              </Link>
              น่ะ ถ้าจะให้สรุปง่ายๆ มันคือ library ที่สร้างมาให้สามารถสร้างเว็บแบบที่ไม่ต้องกังวลกับเบื้องหลังของเว็บเยอะ สมมุติเรากำลังอยากทำเว็บไซต์ซักอย่างที่ต้องมีหลายหน้า React สามารถช่วยให้สร้างง่ายขึ้นโดยการแบ่งส่วนหน้าเว็บเป็นส่วนย่อยๆ หลายๆส่วน เหมือนเราเอาชิ้นส่วนเครื่องอะไรซักอย่างมาประกอบกันได้เป็นเครื่องเดียวโดยที่เราต้องเรียนรู้และก็ทำตามระบบเค้านิดนึง
            </p>
            {/* <p className={styles.paraText}>
               
            </p> */}
          </div>
        </p>
        <p className={styles.paragraph}>
          <div className={styles.contentHeader}>
            กลับมาที่ Next.js
          </div>
          <div>
            <p className={styles.paraText}>
              ระบบที่ว่าก็คือ {" "} 
              <Link
                href="https://reactjs.org/docs/introducing-jsx.html"
              >
                <a target="_blank">
                  JSX
                </a>
              </Link>{" "}
              คือการที่เราเขียนทุกอย่างเหมือนใน html แต่เรามีแถม tag html เพื่มเติมที่ปกติไม่มีที่เริ่มต้นด้วยตัวพิมพ์ใหญ่ tag พวกนี้คือ component  ที่ทำได้หลายอย่างแต่หลักๆเราก็สร้างเพื่อเป็นชิ้นส่วนประกอบหน้าเว็บ จะมีทั้งแบบที่เค้าสร้างมาให้แล้วเช่นแท็ก Image, Link (เป็นของ Next ถ้าเปิดดู repo web ก็อาจจะไปเห็นมาแล้ว) ที่เหลือเดี๋ยวดูในแถบข้างบนเลยนะ
            </p>

          </div>
        </p>
      </div>
    </div>
  )
}
