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
                    <div className={pages == '/product' ? style.catalogMenuActive : style.catalogMenu}>
                       
                        <Link to='/product'
                            onClick={() => setPages('/product') }>
                            <span> Festo Catalog</span>
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
                                    <div href='#i1'>Actuators</div>
                                    <div href='#i2'>Compressed air treatment</div>
                                    <div href='#i3'>Connectors, Fittings & Tubings & Tubings Connectors, Fittings</div>
                                    <div href='#i4'>Controllers and software</div>
                                    <div href='#i5'>Function-specific systems</div>
                                    <div href='#i6'>Festo Industrial robots</div>
                                    <div href='#i7'>Other pneumatic components</div>
                                    <div href='#i8'>Pneumatic valves and valve manifolds</div>
                                    <div href='#i9'>festo Sensors</div>
                                    <div href='#i10'>Servo motors and drives</div>
                                    <div href='#i11'>Vacuum technology</div>
                                    <div href='#i12'>Vision Systems</div>
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
                                    <div>Control technology and remote IO</div>
                                    <div>Valve terminals</div>
                                    <div>Pilot valves</div>
                                    <div>Sensor boxes</div>
                                    <div>Positioners</div>
                                    <div>Actuators</div>
                                    <div>Process valves</div>
                                    <div>Compressed air treatment</div>
                                    <div>Pneumatic connectors</div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>







        </>
    )
}
