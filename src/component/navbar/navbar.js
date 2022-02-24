import React, { useState, useEffect } from 'react'
import style from './navbar.module.css'
import img1 from './../../img/img1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMicrochip, faUser, faPhone, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [page, setPage] = useState(window.location.pathname)
    const [display, setdisplay] = useState(false);
    const displayNav = () => {
        setdisplay(!display)
    }

    useEffect(() => {
        setPage(window.location.pathname);
    }, [])
    return (
        <> 
                <div className={style.container}>
                    <div className={style.logoContainner}>

                        <img src={img1} />
                        <span>
                            <div className={style.nameCompany1}>KATE PLK </div>
                            <div className={style.nameCompany2}>บริษัท เคท พีแอลเค จำกัด</div>
                        </span>

                        <div className={style.search}>
                            <FontAwesomeIcon icon={faSearch} />
                            <input id="" type="search" placeholder="Find Product" />
                        </div>

                    </div>
                    <div className={style.menuContainer}>
                        {/* HOME */}
                        <div className={page == '/' ? style.menuActive : style.menu }>
                            <Link to="/"
                                  onClick={() => setPage('/')}>
                                <div className={style.menuIcon}>
                                    <FontAwesomeIcon icon={faHome} />
                                </div>
                                <div className={style.menuText}>HOME</div>
                            </Link>
                        </div>
                        {/* PRODUCT */}
                        <div className={page == '/product' ? style.menuActive : style.menu}>
                            <Link to="/product"
                                  onClick={() => setPage('/product')}>
                                <div className={style.menuIcon}>
                                    <FontAwesomeIcon icon={faMicrochip} />
                                </div>
                                <div className={style.menuText}>PRODUCT</div>
                            </Link>
                        </div>
                        {/* ABOUT US */}
                        <div className={style.menu}>
                            <Link to="/about">
                                <div className={style.menuIcon}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className={style.menuText}>ABOUT US</div>
                            </Link>
                        </div>
                        {/* CONTACT */}
                        <div className={style.menu}>
                            <Link to="/contact">
                                <div className={style.menuIcon}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className={style.menuText}>CONTACT</div>
                            </Link>
                        </div>
                    </div>
                    <div className={style.hamburger} onClick={displayNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                </div>

            {//jsx
                display && (
                    <div className={style.conMobile}>
                        {/* HOME */}
                        <div className={style.menuMobile}>
                            <Link to="/">
                                <div className={style.menuMobileIcon}>
                                    <FontAwesomeIcon icon={faHome} />
                                </div>
                                <div className={style.menuMobileText}>HOME</div>
                            </Link>

                        </div>
                        {/* PRODUCT */}
                        <div className={style.menuMobile}>
                            <Link to="/product">
                                <div className={style.menuMobileIcon}>
                                    <FontAwesomeIcon icon={faMicrochip} />
                                </div>
                                <div className={style.menuMobileText}>PRODUCT</div>
                            </Link>
                        </div>
                        {/* ABOUT US */}
                        <div className={style.menuMobile}>
                            <Link to="/about">
                                <div className={style.menuMobileIcon}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className={style.menuMobileText}>ABOUT US</div>
                            </Link>
                        </div>
                        {/* CONTACT */}
                        <div className={style.menuMobile}>
                            <Link to="/contact">
                                <div className={style.menuMobileIcon}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className={style.menuMobileText}>CONTACT</div>
                            </Link>

                        </div>
                        {/* search */}
                        <div className={style.searchMobile}>
                            <FontAwesomeIcon icon={faSearch} />
                            <input id="" type="search" placeholder="Find Product" />
                        </div>
                    </div>
                )
            }
        </>
    )
}
