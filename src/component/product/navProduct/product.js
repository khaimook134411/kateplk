import React, { useState } from 'react'
import style from './product.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function Product() {
    const [actState, setActState] = useState(true)
    const [actionstate, setActionState] = useState(true)
    return (
        <>

            <div className={style.container}>
                <div className={style.conMenu}>
                    <div className={style.catalogMenu}>
                        {/* <FontAwesomeIcon icon={faBookOpen} /> */}
                        <Link to='/product'>
                            <span> Festo Catalog</span>
                        </Link>

                    </div>
                    <p>CATERGORIES PRODUCT</p>
                    <div className={style.menuTypeContainer}>
                        <div className={style.menu}>
                            <Link to="/industrial">
                                <span>Festo Industrial-automation</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleDown} onClick={() => setActState(!actState)} />


                            {
                                actState &&


                                <div className={style.subTypeProduct}>
                                    <div>Actuators</div>
                                    <div>Compressed air treatment</div>
                                    <div>Connectors, Fittings & Tubings & Tubings Connectors, Fittings</div>
                                    <div>Controllers and software</div>
                                    <div>Function-specific systems</div>
                                    <div>Festo Industrial robots</div>
                                    <div>Other pneumatic components</div>
                                    <div>Pneumatic valves and valve manifolds</div>
                                    <div>festo Sensors</div>
                                    <div>Servo motors and drives</div>
                                    <div>Vacuum technology</div>
                                    <div>Vision Systems</div>
                                </div>

                            }

                        </div>
                        <div className={style.menu}>
                            <span>Festo Process-automation</span>
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
