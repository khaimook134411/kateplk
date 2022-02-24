import React, { useState } from 'react'
import style from './../popup/popup.module.css'
import img5 from './../../img/img5.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faMicrochip } from '@fortawesome/free-solid-svg-icons'
export default function Popup() {

    const [showState, setShowState] = useState(false)

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
                        <div className={style.conPhone}>
                            PHONE
                        </div>
                        <div className={style.conLine}>
                            LINE
                        </div>
                        <div className={style.conMail}>
                            MAIL
                        </div>
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
