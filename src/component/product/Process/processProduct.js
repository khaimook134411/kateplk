import React from 'react'
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
export default function ProcessProduct() {
    return (
        <div className={style.container}>
            <Product />
            <div className={style.contentContainer}>
                <h1>Festo Process-automation</h1>

                <div className={style.productContainer}>
                    <div className={style.product}>
                        <div className={style.imgProduct}>
                            <img src={p1} />
                        </div>

                        <div>
                            Control technology and remote IO
                            <p>Compact controllers with serial and Ethernet interfaces., Electric components for valve AS-Interface componentsmanifolds., Pneumatic/mechanical stepping circuit and command module Steps Control block for two-hand start .</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.imgProduct}>
                            <img src={p2} />
                        </div>

                        <div>
                            Valve terminals
                            <p>Valve modules to ISO 15407-1, 15407-2 and ISO 5599-2 for standards-based valves with versatile valve functions and as a plug-in or individual connection., Sturdy and modular valve modules as a compact or modular sub-base for all standard tasks.</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.imgProduct}>
                            <img src={p3} />
                        </div>
                        <div>
                            Pilot valves
                            <p>The VSNC pilot valve is a low-cost NAMUR valve that can be used in a wide range of markets. There are two basic versions of the valve kit: the F8 and the FN option. In the F8 version, the valve is suitable for standard applications and has a magnet system with plastic cover and brass armature guide tube. In contrast, the optimized FN option has a cover made of aluminum and a guide tube made of stainless steel in addition to the wide selection of coils for potentially hazardous environments. For this more sturdy variant, the disk seat variant is available in addition to the standard piston valve.</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.imgProduct}>
                            <img src={p4} />
                        </div>
                        <div>
                            Sensor boxes
                            <p>Sensor boxes SRBG The new sensor box SRBG is a compact and cost-effective solution when it comes to optical position indication and electrical position sensing of automated or manually actuated process valves. The SRBG can easily be mounted directly without additional accessories and ideally minimizes the space requirement. The SRBC sensor box is the reliable and cost-effective solution when it comes to electronic position sensing and optical position indication of automated process valves. The sturdy version with IP67 and NEMA 4/4X is ideal for use indoors and outdoors, even in aggressive or corrosive environments.</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.imgProduct}>
                            <img src={p5} />
                        </div>
                        <div>
                            Positioners
                            <p>The CMSX valve positioner from Festo is a digital, electropneumatic valve positioner for attachment to pneumatic quarter turn and linear actuators for a wide variety of applications in the process industry. It enables simple and efficient control of the position of process valves actuated by pneumatic actuators. The CMSX is suitable for single and double-acting quarter turn actuators with a swivel angle of 0-100° and mechanical interface to VDI/VDE 3845..</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.imgProduct}>
                            <img src={p6} />
                        </div>
                        <div>
                            Actuators
                            <p>Festo linear actuators are double-acting pneumatic piston actuators. The sturdy corrosion-resistant design of the actuators is ideal for use in harsh and hazardous environments in process automation. Actuators with different diameters, stroke lengths and standardized mounting interfaces are available for the respective installation situations. The linear actuators are suitable for open/close and control applications. Special product versions with integrated linear potentiometer or completely integrated positioner are available for control applications. Applications for linear actuators can be found in numerous industrial segments of process automation, such as linear movements for process valves (knife gate valves, shut-off valves, metering valves, pinch valves) or pivoting movements for damper control (ventilation flaps, turbine blade adjustment, ...</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.imgProduct}>
                            <img src={p7} />
                        </div>
                        <div>
                            Process valves
                            <p>Ball valves enable the control and switching of media. A ball is rotated in a sealing principle for control. The sealing system consists of the ball and one or more seat rings. Ball valves differ in material types, sealing principles and connection standards. The resulting fields of application range from simple applications in factory automation to demanding applications in the chemicals or pharmaceuticals industry.</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.imgProduct}>
                            <img src={p8} />
                        </div>
                        <div>
                            Compressed air treatment
                            <p>The air preparation combination unit ensures the correct compressed air quality and filters compressor oil, condensate and dirt particles from the air. Depending on the application, a service unit consists of a pressure regulator, various filters, a branch module and pressurization and exhaust valves. Various combinations are available and in stock. In addition, service units can be configured individually in the MS modular system.</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.imgProduct}>
                            <img src={p9} />
                        </div>
                        <div>
                            Pneumatic connectors
                            <p>Our range of tubing covers every conceivable task. Regardless of whether standard requirements or extreme conditions such as heat, welding spatter, high pH values or resistance to hydrolysis are called for. Here you will find the right tube for every industry. Fittings There is also a fitting for every tube. From pure plastic fittings to stainless steel fittings, you will find the optimum fitting for your applications here.</p>
                        </div>
                    </div>

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
