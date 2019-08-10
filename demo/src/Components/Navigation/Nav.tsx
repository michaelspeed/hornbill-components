import React from 'react'

export default class Nav extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
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
                                <a className="nav-link" href="#">Pages <span className="arrow"></span></a>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact <span className="arrow"></span></a>
                                        <nav className="nav">
                                            <a className="nav-link" href="page/contact-1.html">Contact 1</a>
                                            <a className="nav-link" href="page/contact-2.html">Contact 2</a>
                                        </nav>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Changelog <span
                                            className="arrow"></span></a>
                                        <nav className="nav">
                                            <a className="nav-link" href="page/changelog-1.html">Changelog 1</a>
                                            <a className="nav-link" href="page/changelog-2.html">Changelog 2</a>
                                        </nav>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="page/terms.html">Terms</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="page/error-404.html">Error 404</a>
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
}
