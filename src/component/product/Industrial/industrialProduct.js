import React from 'react'
import style from './industrialProduct.module.css'
import Product from './../navProduct/product'
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
export default function IndustrialProduct() {
    return (
        <div className={style.container}>
         
                <Product />
  
            
            <div className={style.contentContainer}>

                <h1>Festo Industrial-automation</h1>
                <div className={style.productContainer}>
                    <div className={style.product}>
                        <img src={i1} />
                        <div>Actuators
                            <p>Festo Actuators Pneumatic linear actuator for opening/closing and control applications with integrated positioner. Suitable for linear valves such as knife gate valves, penstock valves and pinch valves.</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <img src={i2} />
                        <div>
                            Compressed air treatment
                            <p>Festo Compressed air treatment You achieve the right pressure and the perfect quality of compressed air with filters and pressure regulators. Pneuparts offers a wide program of FESTO air conditioning to get this done. Our pressure regulators are also available in stainless steel for aggressive environments. Pressure gauges are available in different variants for the correct pressure display. If we want to switch to a certain pressure, our program of pressure switches is the perfect solution.</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i3} />
                        <div>
                            Connectors, Fittings & Tubings & Tubings Connectors, Fittings
                            <p>Festo Connectors, Fittings Connector cables, Pre-assembled plug connectors, Connecting cables, Distributors and adapters, Status indications.</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i4} />
                        <div>
                            Controllers and software
                            <p>Festo Controllers and software Logical sequences of pneumatic functions can be implemented with pneumatic and electropneumatic controllers. Bistable valves are used as command memory modules for the pulse stages.</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i5} />
                        <div>
                            Function-specific systems
                            <p>Festo Function-specific systems Successful machine building no longer depends entirely on constructing systems using components, but increasingly also on process expertise and reliable subsystems. The process of joining and press-fitting is much older than automated production technology. Automated processes with calculated parameters offer significant advantages: the reproducibility of force and speed during the joining and press-fitting process is much better, while the result ensures consistent quality.</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i6} />
                        <div>
                            Festo Industrial robots
                            <p>Festo Industrial robots This is a ready-to-install functional module for transferring, feeding and removing small parts in highly confined spaces. The movement is positively guided in a link and enables very short cycle times. Depending on the industrial robot, a C or L-shaped movement is carried out. The movements in Y and Z direction are variable in the range up to 40 millimeters. Pick and place machines are designed for use with electric, servo-pneumatic or pneumatic actuators. Pre-assembled modules with attached actuator are also available. The interface to the workpiece allows different gripper types from Festo to be adapted.</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i7} />
                        <div>
                            Other pneumatic components
                            <p>Festo Other pneumatic components Pneumatic assembly tools, components for storing compressed air, component to reduce the exhaust noise, Air blow gun and nozzles, components for visual pressure display</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i8} />
                        <div>
                            Pneumatic valves and valve manifolds
                            <p>Festo Pneumatic valves and valve manifolds Standards-based directional control valves universal directional control vavles Apllication-specific derectional</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i9} />
                        <div>
                            festo Sensors
                            <p>Festo Sensors Proximity sensors are used for binary feedback of the piston position of pneumatic actuators. They are sensors that detect the magnetic field of the piston magnet via a magnetic field or reed contact. They are mounted at the desired switching position in the T-slot or circumferential slot of the cylinder and output a standardized 24 V switching signal when the piston magnetic field is detected.</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i10} />
                        <div>
                            Servo motors and drives
                            <p>Festo Servo motors Flange size of motors: 40, 55, 60, 70, 80, 100, 140, 190 stall torque: 0.16... 38.8 Nm Voltage: 300, 360 ... 565 V DC</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i11} />
                        <div>
                            Vacuum technology
                            <p>Festo Vacuum technology Vacuum generators accounding to the venturi principle in various performance categories.</p>
                        </div>

                    </div>
                    <div className={style.product}>
                        <img src={i12} />
                        <div>
                            Vision Systems
                            <p>Festo Vacuum technology The vision sensors SBSx are the easy entry into image processing and, depending on the model family, enable reading of 1D/2D codes or quality inspection of parts. In the SBSI model variants, the lighting and optics are already integrated in the compact IP67 housing designed for harsh industrial environments.</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}