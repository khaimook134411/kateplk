import React, {useState, useEffect} from 'react'
import style from './industrialProduct.module.css'
import Product from './../navProduct/product'
import industrial from './../../../img/industrial.png'
import i1 from './../../../img/industrial/actuators.jpeg'
import i2 from './../../../img/industrial/compressed-air-treatment.jpeg'
import i3 from './../../../img/industrial/connector.jpeg'
import i4 from './../../../img/industrial/controller.jpeg'
import i5 from './../../../img/industrial/function-specific.jpeg'
import i6 from './../../../img/industrial/industrial-robots.jpeg'
import i7 from './../../../img/industrial/pneumatic-component.jpeg'
import i8 from './../../../img/industrial/pneumatic-valve.jpeg'
import i9 from './../../../img/industrial/Sensors.jpeg'
import i10 from './../../../img/industrial/servo-motor.jpeg'
import i11 from './../../../img/industrial/vacuum-technology.jpeg'
import i12 from './../../../img/industrial/vision-system.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { firestore } from '../../../firebase/firebase'
export default function IndustrialProduct() {

    const [listItem, setListItem] = useState([])

    useEffect(() => {
        const industrialRef = firestore.collection('industrial')
        industrialRef.onSnapshot(docs => {
            var temp = []
            docs.forEach(doc => {
                temp = [...temp , doc.data()]
            })
            setListItem(temp)
        })
    }, [])
    

    return (
        <div className={style.container}>

            <Product />


            <div className={style.contentContainer}>

                <h1>Festo Industrial-automation</h1>

                <div className={style.productContainer}>

                    {
                        listItem.map((value,index) => {
                            return(
                                <div className={style.product} id={value.name} key={index}>
                                    <img src={value.imgUrl} />
                                    <div>{value.name}
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className={style.poster}>
                    <img src={industrial} />
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