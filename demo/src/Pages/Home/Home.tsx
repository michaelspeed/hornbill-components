import React from 'react'
import '../../assets/css/page.min.css'
import '../../assets/css/style.css'
import Nav from "../../Components/Navigation/Nav";

export default class Home extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                <Nav/>
                <header className="header"
                        style={{backgroundImage: 'linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%)'}}>
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <h1>Your Support Center</h1>
                                <p className="lead mt-5 mb-8">Thinking about having an online documentation or support
                                    system for your startup? TheDocs have everythings you need to develop your own help
                                    center.</p>
                                <p><a className="btn btn-lg btn-round btn-info"
                                      href="https://themeforest.net/item/thedocs-online-documentation-template/13070884?license=regular&open_purchase_for_item_id=13070884&purchasable=source&ref=thethemeio"
                                      target="_blank">Purchase Now</a></p>
                            </div>

                            <div className="col-lg-5 ml-auto d-none d-lg-block">
                                <img src="assets/img/vector/1.png" alt="img"/>
                            </div>

                        </div>
                    </div>
                </header>




                <main className="main-content">


                    <section className="section py-9">
                        <div className="container">
                            <div className="row gap-y text-center">

                                <div className="col-md-4">
                                    <a className="card px-6 py-8 shadow-11 hover-shadow-9 text-default border"
                                       href="help/archive-1.html">
                                        <p><i className="ti-book lead-7 text-primary"></i></p>
                                        <h5 className="fw-500 my-4">Knowledge Base</h5>
                                        <p className="mb-0">Get started using this template by reading the helpful
                                            articles.</p>
                                    </a>
                                </div>

                                <div className="col-md-4">
                                    <a className="card px-6 py-8 shadow-11 hover-shadow-9 text-default border"
                                       href="help/faq-1.html">
                                        <p><i className="ti-help lead-7 text-primary"></i></p>
                                        <h5 className="fw-500 my-4">FAQ</h5>
                                        <p className="mb-0">Lots of questions have asked before and have answers
                                            here.</p>
                                    </a>
                                </div>

                                <div className="col-md-4">
                                    <a className="card px-6 py-8 shadow-11 hover-shadow-9 text-default border"
                                       href="docs/kb-introduction.html">
                                        <p><i className="ti-agenda lead-7 text-primary"></i></p>
                                        <h5 className="fw-500 my-4">Documentation</h5>
                                        <p className="mb-0">Read our documentation to get start and browse the available
                                            UI kit.</p>
                                    </a>
                                </div>

                            </div>


                        </div>
                    </section>

                    <section className="section bg-gray">
                        <div className="container">
                            <header className="section-header">
                                <small>UI Kit</small>
                                <h2>Popular Articles</h2>
                                <hr/>
                                    <p className="lead">The following articles are the most helpful articles. One of
                                        them might be the one you look for.</p>
                            </header>


                            <div className="row gap-y">

                                <div className="col-md-6 col-xl-4">
                                    <h6 className="fw-500">Getting started</h6>
                                    <ul className="list-unstyled lead">
                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit"
                                               href="docs/kb-introduction.html">Introduction</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/kb-contents.html">Contents</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/kb-basic-starter.html">Basic
                                                starter</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/kb-expert-starter.html">Expert
                                                starter</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="small" href="docs/kb-introduction.html">See All (4)</a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="col-md-6 col-xl-4">
                                    <h6 className="fw-500">Content</h6>
                                    <ul className="list-unstyled lead">
                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/typography.html">Typography</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/code.html">Code</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/icon.html">Icons</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/table.html">Tables</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="small" href="docs/typography.html">See All (6)</a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="col-md-6 col-xl-4">
                                    <h6 className="fw-500">Components</h6>
                                    <ul className="list-unstyled lead">
                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/button.html">Buttons</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/form.html">Forms</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/alert.html">Alert</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="text-inherit" href="docs/palette.html">Palette</a>
                                        </li>

                                        <li>
                                            <i className="fa fa-caret-right text-primary small-1 mr-2"></i>
                                            <a className="small" href="docs/accordion.html">See All (13)</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>


                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <header className="section-header">
                                <h2>Get More Help</h2>
                                <hr/>
                                    <p className="lead">Here we have more ways to get help from real humans.</p>
                            </header>


                            <div className="row gap-y">

                                <div className="col-md-6 col-lg-3">
                                    <a className="card card-body border hover-shadow-6 text-center py-6" href="#">
                                        <p><i className="fa fa-users lead-7 text-lighter"></i></p>
                                        <h6 className="mb-0 mt-3">Forums</h6>
                                    </a>
                                </div>


                                <div className="col-md-6 col-lg-3">
                                    <a className="card card-body border hover-shadow-6 text-center py-6" href="#">
                                        <p><i className="fa fa-twitter lead-7 text-lighter"></i></p>
                                        <h6 className="mb-0 mt-3">Twitter Support</h6>
                                    </a>
                                </div>


                                <div className="col-md-6 col-lg-3">
                                    <a className="card card-body border hover-shadow-6 text-center py-6" href="#">
                                        <p><i className="fa fa-envelope lead-7 text-lighter"></i></p>
                                        <h6 className="mb-0 mt-3">Email Us</h6>
                                    </a>
                                </div>


                                <div className="col-md-6 col-lg-3">
                                    <a className="card card-body border hover-shadow-6 text-center py-6" href="#">
                                        <p><i className="fa fa-phone lead-7 text-lighter"></i></p>
                                        <h6 className="mb-0 mt-3">Phone Call</h6>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </section>


                </main>




                <footer className="footer">
                    <div className="container">
                        <div className="row gap-y align-items-center">

                            <div className="col-md-9">
                                <div className="nav justify-content-center justify-content-md-start">
                                    <a className="nav-link" href="index.html">Home</a>
                                    <a className="nav-link" href="docs/kb-introduction.html">Docs</a>
                                    <a className="nav-link" href="page/changelog-1.html">Changelog</a>
                                    <a className="nav-link"
                                       href="https://themeforest.net/item/thedocs-online-documentation-template/13070884?license=regular&open_purchase_for_item_id=13070884&purchasable=source&ref=thethemeio">Purchase</a>
                                </div>
                            </div>

                            <div className="col-md-3 text-center text-md-right">
                                <a href="../index.html">© TheThemeio</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
