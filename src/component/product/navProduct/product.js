import React, { useState, useEffect } from 'react'
import style from './product.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function Product() {
    const [actState, setActState] = useState(true)
    const [actionstate, setActionState] = useState(true)
    const [pages, setPages] = useState(window.location.pathname)


    useEffect(() => {
        setPages(window.location.pathname);
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

                                    <a href='#'>Actuators</a>
                                    <a href='#i2'>Compressed air treatment</a>
                                    <a href='#i3'>Connectors, Fittings & Tubings & Tubings Connectors, Fittings</a>
                                    <a href='#i4'>Controllers and software</a>
                                    <a href='#i5'>Function-specific systems</a>
                                    <a href='#i6'>Festo Industrial robots</a>
                                    <a href='#i7'>Other pneumatic components</a>
                                    <a href='#i8'>Pneumatic valves and valve manifolds</a>
                                    <a href='#i9'>festo Sensors</a>
                                    <a href='#i10'>Servo motors and drives</a>
                                    <a href='#i11'>Vacuum technology</a>
                                    <a href='#i12'>Vision Systems</a>

                                </div>

                            }


                        </div>

                        <div className={pages == '/process' ? style.menuActive : style.menu}>
                            <Link to='/process'>
                                <span>Festo Process-automation</span>
                            </Link>

                            <FontAwesomeIcon icon={faAngleDown} onClick={() => setActionState(!actionstate)} />
                            {
                                actionstate &&
                                <div className={style.subTypeProduct}>
                                    <a href='#'>Control technology and remote IO</a>
                                    <a href='#p2'>Valve terminals</a>
                                    <a href='#p3'>Pilot valves</a>
                                    <a href='#p4'>Sensor boxes</a>
                                    <a href='#p5'>Positioners</a>
                                    <a href='#p6'>Actuators</a>
                                    <a href='#p7'>Process valves</a>
                                    <a href='#p8'>Compressed air treatment</a>
                                    <a href='#p9'>Pneumatic connectors</a>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>







        </>
    )
}
