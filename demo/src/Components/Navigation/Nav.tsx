import React from 'react'
import {useNavigation} from "react-navi";

const Nav = () => {
    let navigation = useNavigation()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-stick-dark" data-navbar="sticky">
            <div className="container">

                <div className="navbar-left">
                    <button className="navbar-toggler" type="button">&#9776;</button>
                    <a className="navbar-brand" href="index.html">
                        <img className="logo-dark" src="assets/img/logo-dark.png" alt="logo"/>
                        <img className="logo-light" src="assets/img/logo-light.png" alt="logo"/>
                    </a>
                </div>

                <section className="navbar-mobile">
                    <span className="navbar-divider d-mobile-none"></span>

                    <ul className="nav nav-navbar">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home<span className="arrow"></span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Get Started <span className="arrow"></span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Components <span className="arrow"></span></a>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href='#'
                                       onClick={() => navigation.navigate('/components/buttons')}
                                    >Buttons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='#'
                                       onClick={() => navigation.navigate('/components/panel')}
                                    >Panel</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Docs <span className="arrow"></span></a>
                            <nav className="nav">
                                <a className="nav-link" href="docs/kb-introduction.html">Getting started</a>
                                <a className="nav-link" href="docs/typography.html">Content</a>
                                <a className="nav-link" href="docs/navbar.html">Layout</a>
                                <a className="nav-link" href="docs/accordion.html">Components</a>
                            </nav>
                        </li>
                    </ul>
                </section>
            </div>
        </nav>
    )
}

export default Nav
