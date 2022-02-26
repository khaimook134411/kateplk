import React from 'react'
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
                <div>135/48 ม.8 ต.หัวรอ อ.เมือง จ.พิษณุโลก 65000</div>
                <div>+66 81 615 7464</div>
                <div>katesaraporn@kateplk.co.th</div>
                <div className={style.conContact}>
                    <div className={style.contact}>
                        <a href="mailto:katesaraporn@kateplk.co.th" target="_blank">
                            <img src={email} />
                        </a>
                    </div>
                    <div className={style.contact}>
                        <a href="https://line.me/ti/p/vxMsaMNMLE" target="_blank">
                            <img src={line} />
                        </a>
                    </div>
                    <div className={style.contact}>
                        <a href="#facebook" target="_blank">
                            <img src={facebook} />
                        </a>

                    </div>
                </div>
                <div className={style.map}>
                    <a href="https://www.google.co.th/maps/@16.8478577,100.2744715,3a,75y,355.14h,101.02t/data=!3m9!1e1!3m7!1sQlYI0IUhpAvGowJyjL0oMw!2e0!7i13312!8i6656!9m2!1b1!2i46" target="_blank">
                        Open the map
                    </a>
                </div>

            </div>
        </div>
    )
}
