import React, { useState } from 'react'
import style from './../popup/popup.module.css'
import img5 from './../../img/img5.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faMicrochip } from '@fortawesome/free-solid-svg-icons'
export default function Popup() {

    const [showState, setShowState] = useState(true)

    return (
        <>
            {
                showState &&
                <div className={style.container}>
                    <div className={style.profileContainer}>
                        <div className={style.profile}>
                            <img src={img5} />
                        </div>
                        <div className={style.personalInfo}>
                            <div className={style.name}>
                                Katesaraporn Supharattanaangkul
                    </div>
                            <div className={style.position}>
                                SALE MANAGER
                    </div>
                        </div>
                    </div>
                    <div className={style.contactContainer}>
                        <a href="tel:0816157464" target="_blank">
                            <div className={style.conPhone}>
                                PHONE
                        </div>
                        </a>
                        <a href="https://line.me/ti/p/vxMsaMNMLE" target="_blank">
                            <div className={style.conLine}>
                                LINE
                        </div>
                        </a>
                        <a href="mailto:katesaraporn@kateplk.co.th" target="_blank">
                            <div className={style.conMail}>
                                MAIL
                        </div>
                        </a>

                    </div>
                </div>
            }
            <div className={style.conCircle}
                onClick={() => setShowState(!showState)}>
                <FontAwesomeIcon icon={faAddressBook} />
            </div>
        </>
    )
}
