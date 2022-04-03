import React, { useState, useEffect } from 'react'
import style from './navbar.module.css'
import img1 from './../../img/img1.png'
import Search from '../search/search'
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
                 
                        <Link to="/"
                            onClick={() => setPage('/')}>
                            <img src={img1} />
                        </Link>
                        <Link to="/"
                            onClick={() => setPage('/')}>
                            <span>
                                <div className={style.nameCompany1}>KATE PLK Co., Ltd. </div>
                                <div className={style.nameCompany2}>บริษัท เคท พีแอลเค จำกัด</div>
                            </span>
                        </Link>
               
                        <Search />
          

                    {/* <div className={style.search}>
                        <FontAwesomeIcon icon={faSearch} />
                        <input id="" type="search" placeholder="Find Product" />
                    </div> */}

                </div>
                <div className={style.menuContainer}>
                    {/* HOME */}
                    <div className={page == '/' ? style.menuActive : style.menu}>
                        <Link to="/"
                            onClick={() => setPage('/')}>
                            <div className={style.menuIcon}>
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <div className={style.menuText}>HOME</div>
                        </Link>
                    </div>
                    {/* PRODUCT */}
                    <div className={page == '/product' || page == '/industrial' || page == '/process' ? style.menuActive : style.menu}>
                        <Link to="/product"
                            onClick={() => setPage('/product')}>
                            <div className={style.menuIcon}>
                                <FontAwesomeIcon icon={faMicrochip} />
                            </div>
                            <div className={style.menuText}>PRODUCT</div>
                        </Link>
                    </div>
                    {/* ABOUT US */}
                    <div className={page == '/about' ? style.menuActive : style.menu}>
                        <Link to="/about"
                            onClick={() => setPage('/about')}>
                            <div className={style.menuIcon}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className={style.menuText}>ABOUT US</div>
                        </Link>
                    </div>
                    {/* CONTACT */}
                    <div className={page == '/contact' ? style.menuActive : style.menu}>
                        <Link to="/contact"
                            onClick={() => setPage('/contact')}>
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
                        {/* <div className={style.menuMobile}>
                            <Search />
                        </div> */}
                        {/* HOME */}
                        <div className={style.menuMobile}>
                            <Link to="/"
                                onClick={displayNav}>
                                <div className={style.menuMobileIcon}>
                                    <FontAwesomeIcon icon={faHome} />
                                </div>
                                <div className={style.menuMobileText}>HOME</div>
                            </Link>

                        </div>
                        {/* PRODUCT */}
                        <div className={style.menuMobile}>
                            <Link to="/product"
                                onClick={displayNav}>
                                <div className={style.menuMobileIcon}>
                                    <FontAwesomeIcon icon={faMicrochip} />
                                </div>
                                <div className={style.menuMobileText}>PRODUCT</div>
                            </Link>
                        </div>
                        {/* ABOUT US */}
                        <div className={style.menuMobile}>
                            <Link to="/about"
                                onClick={displayNav}>
                                <div className={style.menuMobileIcon}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className={style.menuMobileText}>ABOUT US</div>
                            </Link>
                        </div>
                        {/* CONTACT */}
                        <div className={style.menuMobile}>
                            <Link to="/contact"
                                onClick={displayNav}>
                                <div className={style.menuMobileIcon}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className={style.menuMobileText}>CONTACT</div>
                            </Link>

                        </div>



                    </div>
                )
            }
        </>
    )
}
