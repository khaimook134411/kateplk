import React from 'react'
import style from './home.module.css'
import img2 from './../../img/img2.png'
import img1 from './../../img/img1.png'
import img5 from './../../img/img5.png'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.conRow1}>
                <div className={style.clipShow}>
                
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cbamdfLuCpA?loop=1&controls=1&playlist=cbamdfLuCpA&disablekb=1&autoplay=1&mute=1&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={style.conContent}>
                    <div className={style.logo}>
                        <img src="https://www.allied-automation.com/wp-content/uploads/2018/06/festo.png" />
                    </div>
                    <div className={style.content}>
                        บริษัท เคท พีแอลเค เป็น<strong>ตัวแทนจำหน่าย Festo</strong> อย่างเป็นทางการ (Festo Thailand, เฟสโต้ ประเทศไทย) ยินดีให้คำปรึกษาและบริการ สอบถามข้อมูล โทร 0816157464
                        katesaraporn@kateplk.co.th
                </div>
                </div>
            </div>

            <div className={style.conRow2}>
                <div>
                    <h1>การดูรหัสอุปกรณ์เฟสโต้</h1>
                    <p>การดูรหัส อุปกรณ์นิวเมติก Festo สามารถดูได้จากสติ๊กเกอร์ที่ติดอยู่กับอุปกรณ์หรือแผ่นป้ายกำกับ (Name plate)</p>
                </div>
                <div className={style.stickerFesto}>
                    <img src={img5} />
                    <div>
                        <li><b>แถวบน</b> คือ Order Code</li>
                        <li><b>เลขชุดแรก</b> คือ Part Number</li>
                        <li><b>เลขชุดหลัง</b> คือ Series หรือรุ่นของสินค้าดังกล่าว</li>
                    </div>

                </div>
                <div>
                    ผู้ใช้งานหรือผู้ออกแบบสามารถนำโค๊ด (Code) ดังกล่าวแจ้งกับฝ่ายขาย เพื่อสอบถามข้อมูลเพิ่มเติม หรือดำเนินการสั่งซื้อสินค้าได้ ซึ่งโค๊ตที่ถูกต้อง จะช่วยลดความผิดพลาดในการสั่งซื้อ และการตรวจสอบ
                </div>
                <Link to="/product">
                <div id="button" className={style.buttonProduct}>PRODUCT --></div>
                </Link>
                
            </div>

        </div>
    )
}
