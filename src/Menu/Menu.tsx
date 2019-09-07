import React from 'react'
import {Pane} from "../Layers";

export interface ComponentProps {
    children: React.ReactNode
}

export type MenuProps = ComponentProps

export default class Menu extends React.Component<MenuProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Pane></Pane>
        )
    }
}
