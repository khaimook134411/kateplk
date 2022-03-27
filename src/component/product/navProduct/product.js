import React, { useState, useEffect } from 'react'
import style from './product.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { firestore } from '../../../firebase/firebase';
export default function Product() {
    const [actState, setActState] = useState(true)
    const [actionstate, setActionState] = useState(true)
    const [pages, setPages] = useState(window.location.pathname)

    const [listItem, setListItem] = useState([])
    const [listItem2, setListItem2] = useState([])



    useEffect(() => {
        setPages(window.location.pathname);
        const industrialRef = firestore.collection('industrial')
        industrialRef.onSnapshot(docs => {
            var temp = []
            docs.forEach(doc => {
                temp = [...temp , doc.data()]
            })
            setListItem(temp)
        })
        const processRef = firestore.collection('process')
        processRef.onSnapshot(docs => {
            var temp = []
            docs.forEach(doc => {
                temp = [...temp , doc.data()]
            })
            setListItem2(temp)
        })
    }, [])

    return (
        <>

            <div className={style.container}>
                <div className={style.conMenu}>
                    <div>
                        <Link to='/product'
                            onClick={() => setPages('/product')}>
                            <div className={pages == '/product' ? style.catalogMenuActive : style.catalogMenu}>

                                <span> Festo Catalog</span>
                                {/* </Link> */}

                            </div>
                        </Link>
                    </div>

                    <p>CATERGORIES PRODUCT</p>

                    <div className={style.menuTypeContainer}>


                        <div className={pages == '/industrial' ? style.menuActive : style.menu}>
                            <Link to="/industrial"
                                onClick={() => setPages('/industrial')}>
                                <span>Festo Industrial-automation</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleDown} onClick={() => setActState(!actState)} />


                            {
                                actState &&


                                <div className={style.subTypeProduct}>
                                    {
                                        listItem.map((value,index) => {
                                            return(
                                                <a href={`/industrial#${index-1 > -1 ? listItem[index-1].name : ''}`}>
                                                    {value.name}
                                                </a>
                                            )
                                        })
                                    }

                                </div>

                            }


                        </div>

                        <div className={pages == '/process' ? style.menuActive : style.menu}>
                            <Link to='/process'
                                onClick={() => setPages('/process')}>
                                <span>Festo Process-automation</span>
                            </Link>

                            <FontAwesomeIcon icon={faAngleDown} onClick={() => setActionState(!actionstate)} />
                            {
                                actionstate &&
                                <div className={style.subTypeProduct}>
                                    {
                                        listItem2.map((value,index) => {
                                            return(
                                                <a href={`/process#${index-1 > -1 ? listItem2[index-1].name : ''}`}>
                                                    {value.name}
                                                </a>
                                            )
                                        })
                                    }

                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>







        </>
    )
}
