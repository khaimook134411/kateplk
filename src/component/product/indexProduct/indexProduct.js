import React from 'react'
import style from './indexProduct.module.css'
import Product from '../navProduct/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown} from '@fortawesome/free-solid-svg-icons'
export default function IndexProduct() {

    return (
        <div className={style.container}>
            <Product />
            <div className={style.contentContainer}>
                <div className={style.message}>
                    Click the book thumbnail below to open this book in a LightBox

                </div>
                <div className={style.icon}>
                   <FontAwesomeIcon icon={faAnglesDown} /> 
                </div>
                
                <div className={style.book}>
                    <a href='https://online.pubhtml5.com/evgg/gaqw/' target='_blank'>
                        <img src='https://online.pubhtml5.com/evgg/gaqw/files/shot.jpg' data-rel='fh5-light-box-demo' data-width='900' data-height='500' data-title='ProductOverview_2021_EN_low' />
                    </a>
                </div>


                {/* <div className={style.pdf}>
                <iframe className={style.iframe}
                    src='https://online.pubhtml5.com/evgg/gaqw/#p=1'
                    seamless='seamless' scrolling='no' frameborder='0'
                    allowtransparency='true' allowfullscreen='true' >
                </iframe>
            </div> */}
            </div>


        </div>
    )
}
