import React, { useState, useEffect } from 'react'
import style from './processProduct.module.css'
import Product from './../navProduct/product'
import process from './../../../img/process.png'
import p1 from './../../../img/process/Control-technology.jpeg'
import p2 from './../../../img/process/Valve-teminals.jpeg'
import p3 from './../../../img/process/Pilo-Valves.jpeg'
import p4 from './../../../img/process/Sensor-Boxes.jpeg'
import p5 from './../../../img/process/Positioners.jpeg'
import p6 from './../../../img/process/Actuators.jpeg'
import p7 from './../../../img/process/Process-Valves.jpeg'
import p8 from './../../../img/process/Compressed-air.jpeg'
import p9 from './../../../img/process/Pneumatic-connectors.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { firestore } from '../../../firebase/firebase'
export default function ProcessProduct() {
    const [listItem, setListItem] = useState([])

    useEffect(() => {
        const industrialRef = firestore.collection('process')
        industrialRef.onSnapshot(docs => {
            var temp = []
            docs.forEach(doc => {
                temp = [...temp, doc.data()]
            })
            setListItem(temp)
        })
    }, [])
    return (
        <div className={style.container}>
            <Product />
            <div className={style.contentContainer}>
                <h1>Festo Process-automation</h1>

                <div className={style.productContainer}>
                    {
                        listItem.map((value, index) => {
                            return (
                                <div className={style.product} id={value.name} key={index}>
                                    <div className={style.imgProduct}>
                                        <img src={value.imgUrl} />
                                    </div>

                                    <div>
                                    {value.name}
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className={style.poster}>
                    <img src={process} />
                </div>
                <div className={style.icon}>
                    <a href="#" rel="nofollow" >
                        <FontAwesomeIcon icon={faAnglesUp} />
                    </a>
                </div>
            </div>
        </div>
    )
}
