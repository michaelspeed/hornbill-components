import React from 'react'
import '@material/top-app-bar/dist/mdc.top-app-bar.css'
import "@material/elevation/dist/mdc.elevation.css"
import "@material/icon-button/dist/mdc.icon-button.css"
import './AppBar.css'
import clsx from 'clsx'
import '../Typography/fonts.css'
import '../Typography/MaterialIcons.css'

export interface AppBarProps {
    heading?: string
    blockHeading?: string
    background?: string
    actionMenu?: React.ReactNode[]
    menu?: boolean
}

interface State {
    lastScrollTop: number
    boxShado: number
}

export default class AppBar extends React.Component<AppBarProps, State>{

    public state: State

    constructor(props) {
        super(props);
        this.state = {
            lastScrollTop: 0,
            boxShado: -1.6
        }
    }

    componentDidMount(): void {
        window.addEventListener("scroll", () => {
            this.changeBoxShadow()
        })
    }

    changeBoxShadow() {
        let final = this.state.boxShado
        if (this.state.lastScrollTop < window.pageYOffset) {
            let s = 0.8
            if (final < 4) {
                final = final + s
                s =+ 1
            }
            if (final !== this.state.boxShado) {
                this.setState({boxShado: final})
            }
        } else if (this.state.lastScrollTop > window.pageYOffset) {
            let s = 0.8
            if (final > -0.8) {
                final = final - s
                s =- 1
            }
            if (final !== this.state.boxShado) {
                this.setState({boxShado: final})
            }
        }
        this.setState({lastScrollTop: window.pageYOffset})
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                <header className={clsx({
                    'mdc-top-app-bar': true
                })} style={{backgroundColor: this.props.background ? this.props.background : '#4285F4',
                    boxShadow: `rgba(0, 0, 0, 0.28) 0px ${this.state.boxShado}px 8px`
                }}>
                    <div className="mdc-top-app-bar__row">
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" style={{paddingLeft: 20}}>
                            {this.props.menu && <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu
                            </button>}
                            <span className="mdc-top-app-bar__title" style={{fontFamily: 'product_sansbold', paddingLeft: 0}}>{this.props.blockHeading}</span>
                            <span className="mdc-top-app-bar__title" style={{fontFamily: 'product_sansregular', paddingLeft: 0}}>{this.props.heading}</span>
                        </section>
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
                                 role="toolbar">
                            {this.props.actionMenu && <React.Fragment>
                                {this.props.actionMenu.map((items) => (items))}
                            </React.Fragment>}
                        </section>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}
