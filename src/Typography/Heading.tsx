import React from 'react'

export interface HeadingProps {
    type: number
    children: any
}

export default class Heading extends React.Component<HeadingProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                {this.props.type === 1 && <span className='mdc-typography--headline1'>{this.props.children}</span>}
                {this.props.type === 2 && <span className='mdc-typography--headline2'>{this.props.children}</span>}
                {this.props.type === 3 && <span className='mdc-typography--headline3'>{this.props.children}</span>}
                {this.props.type === 4 && <span className='mdc-typography--headline4'>{this.props.children}</span>}
                {this.props.type === 5 && <span className='mdc-typography--headline5'>{this.props.children}</span>}
                {this.props.type === 6 && <span className='mdc-typography--headline6'>{this.props.children}</span>}
            </React.Fragment>
        )
    }
}
