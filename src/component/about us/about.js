import React from 'react'
import style from './about.module.css'
import Slideshow from './slideshow/slideshow'
export default function About() {
    return (
        <div className={style.container}>
            <div className={style.conRow1}>
                <div className={style.conContent}>
                    <div className={style.headText}>
                        Festo - Pnuematic and Electrical Automation System
                    </div>
                    <div className={style.content}>
                            บริษัท เคท พีแอลเค จำกัด ผู้แทนจำหน่าย Festo - Pnuematic and Electrical Automation System สินค้าลิขสิทธิ์แท้ ถูกต้อง สินค้าทุกชิ้นพร้อมส่งอย่างรวดเร็ว พร้อมบริการให้คำปรึกษา แนะนำโดยทีมงานผู้เชี่ยวชาญด้าน Pnuematic and Electrical Automation ด้านนิวเมติกส์ Festo อันดับต้นๆของประเทศ เรายินดีให้บริการทุกท่าน ด้วยความเต็มใจ สอบถามข้อมูล โทร 081 615 7464 หรือเมล katesaraporn@kateplk.co.th
                    </div>
                </div>
                <div className={style.Slideshow}>
                    <Slideshow />
                </div>
            </div>


        </div>
    )
}
