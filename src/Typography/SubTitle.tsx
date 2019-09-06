import React from 'react'
import '@material/typography/dist/mdc.typography.css'
import './fonts.css'

export interface ComponentProps {
    children: string
}

export type SubTitleProps = ComponentProps & React.HTMLAttributes<HTMLSpanElement>

export default class SubTitle extends React.Component<SubTitleProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                <span className='mdc-typography--subtitle1' style={{fontFamily:'product_sansbold'}} {...this.props}>{this.props.children}</span>
            </React.Fragment>
        )
    }
}
