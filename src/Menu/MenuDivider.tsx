import React from 'react'
import {Pane} from "../Layers";

export default class MenuDivider extends React.PureComponent{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Pane borderBottom={true}/>
        )
    }
}
