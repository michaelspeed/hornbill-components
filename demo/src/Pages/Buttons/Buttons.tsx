import React from 'react'
import Nav from "../../Components/Navigation/Nav";

export default class Buttons extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                <Nav/>
                <header className="header text-white bg-dark pt-9 pb-5"
                        style={{backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)'}}>
                    <div className="container">
                        <h3>Documentation</h3>
                    </div>
                </header>


                <main className="main-content">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-4 col-xl-3 order-last order-md-first">
                                <hr className="d-md-none"/>
                                <aside className="sidebar sidebar-sticky sidebar-stick-shadow pr-md-5 br-1">
                                    <ul className="nav nav-sidebar nav-sidebar-hero" data-accordion="true">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Getting started <i
                                                className="nav-angle"></i></a>
                                            <div className="nav">
                                                <a className="nav-link" href="kb-introduction.html">Introduction</a>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Component <i className="nav-angle"></i></a>
                                            <div className="nav">
                                                <a className="nav-link" href="typography.html">Button</a>
                                            </div>
                                        </li>

                                    </ul>
                                </aside>
                            </div>

                            <div className="col-md-7 col-xl-8 ml-md-auto py-8">
                                <article>
                                    <h1>Button</h1>
                                    <p className="lead">Different type of components and elements to display a code
                                        block.</p>

                                    <hr className="my-2"/>

                                    <h2 id="fontawesome">Props</h2>
                                    <hr className="my-2"/>
                                    <div>
                                        <h5>intent: String</h5>
                                    </div>
                                    <div>
                                        <h5>icon: String | React.Component</h5>
                                    </div>
                                    <div>
                                        <h5>size: String ()</h5>
                                    </div>
                                    <div>
                                        <h5>dashed: Boolean</h5>
                                    </div>
                                    <div>
                                        <h5>skew: Boolean</h5>
                                    </div>

                                </article>
                            </div>


                        </div>
                    </div>
                </main>


                <footer className="footer">
                    <div className="container">
                        <div className="row gap-y align-items-center">

                            <div className="col-md-9">
                                <div className="nav justify-content-center justify-content-md-start">
                                    <a className="nav-link" href="../index.html">Home</a>
                                    <a className="nav-link" href="kb-introduction.html">Docs</a>
                                    <a className="nav-link" href="../page/changelog-1.html">Changelog</a>
                                    <a className="nav-link"
                                       href="https://themeforest.net/item/thedocs-online-documentation-template/13070884?license=regular&open_purchase_for_item_id=13070884&purchasable=source&ref=thethemeio">Purchase</a>
                                </div>
                            </div>

                            <div className="col-md-3 text-center text-md-right">
                                <a href="../../index.html">© TheThemeio</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
