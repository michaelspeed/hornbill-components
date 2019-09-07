import React from 'react'
import {Pane} from "../Layers";
import {Heading} from "../Typography";

export interface MenuGroupProps {
    title: React.ReactNode
    children: React.ReactNode
}

export default class MenuGroup extends React.PureComponent<MenuGroupProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {title, children} = this.props
        return (
            <Pane paddingY={8}>
                {title && (
                    <Heading type={5}>{title}</Heading>
                )}
                {children}
            </Pane>
        )
    }
}
