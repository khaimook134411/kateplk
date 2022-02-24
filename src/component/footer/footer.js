import React from 'react'
import Slideshow from '../home/slideshow/slideshow'
import style from './footer.module.css'
import logo from './../../img/logo.png'
import img2 from './../../img/img2.png'
import email from './../../img/email.png'
import line from './../../img/line.png'
import facebook from './../../img/facebook.png'

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <img src={img2} />
                <img src={logo} />
            </div>
            <div className={style.location}>
                <h2>KATE PLK Co., Ltd.</h2>
                <div>135/48 MOO 8. HUA-RO SUB_DISTRICT MUENG DISTRICT. PHITSANULOK THAILAND 65000 </div>
                {/* <h1>แคท พีแอลเค</h1> */}
                <div>135/48 ม.8 ต.หัวรอ อ.เมือง จ.พิษณุโลก 65000</div>
                <div>+66 81 615 7464</div>
                <div>katesaraporn@kateplk.co.th</div>
                <div className={style.conContact}>
                    <div className={style.contact}>
                        <img src={email} />
                    </div>
                    <div className={style.contact}>
                        <img src={line} />
                    </div>
                    <div className={style.contact}>
                        <img src={facebook} />
                    </div>
                </div>
                <div  className={style.map}>Open the map</div>
            </div>
        </div>
    )
}
