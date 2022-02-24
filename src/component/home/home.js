import React from 'react'
import style from './home.module.css'
import img2 from './../../img/img2.png'
import img1 from './../../img/img1.png'
import Slideshow from './slideshow/slideshow'
export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.conRow1}>
                <div className={style.clipShow}>
                    {/* <Slideshow /> */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cbamdfLuCpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={style.conContent}>
                    <div className={style.logo}>
                        <img src="https://www.allied-automation.com/wp-content/uploads/2018/06/festo.png" />
                    </div>
                    <div className={style.content}>
                        บริษัท เคท พีแอลเค เป็น<strong>ตัวแทนจำหน่าย Festo</strong> อย่างเป็นทางการ (Festo Thailand, เฟสโต้ ประเทศไทย) ยินดีให้คำปรึกษาและบริการ สอบถามข้อมูล โทร 0816157464
                        Katesaraporn@kateplk.co.th
                </div>
                </div>
            </div>

            <div className={style.conRow2}>

            </div>

        </div>
    )
}
