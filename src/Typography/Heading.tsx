import React from 'react'
import './fonts.css'

export interface ComponentProps {
    type: number
    children: any
}

export type HeadingProps = ComponentProps & React.HTMLAttributes<HTMLSpanElement>

export default class Heading extends React.Component<HeadingProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                {this.props.type === 1 && <h1 className='mdc-typography--headline1' style={{fontFamily: 'product_sansbold'}} {...this.props}>{this.props.children}</h1>}
                {this.props.type === 2 && <h2 className='mdc-typography--headline2' style={{fontFamily: 'product_sansbold'}} {...this.props}>{this.props.children}</h2>}
                {this.props.type === 3 && <h3 className='mdc-typography--headline3' style={{fontFamily: 'product_sansbold'}} {...this.props}>{this.props.children}</h3>}
                {this.props.type === 4 && <h4 className='mdc-typography--headline4' style={{fontFamily: 'product_sansbold'}} {...this.props}>{this.props.children}</h4>}
                {this.props.type === 5 && <h5 className='mdc-typography--headline5' style={{fontFamily: 'product_sansbold'}} {...this.props}>{this.props.children}</h5>}
                {this.props.type === 6 && <h6 className='mdc-typography--headline6' style={{fontFamily: 'product_sansbold'}} {...this.props}>{this.props.children}</h6>}
            </React.Fragment>
        )
    }
}
