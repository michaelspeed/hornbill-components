import React from 'react'
import {Pane} from "../Layers";
import {withTheme} from "../Theme";
import {Intent} from "../globals/Intent";
import safeInvoke from "../libs/safeInvoke";

export interface MenuItemInterface {
    is: string | any
    onSelect?: (any?: any) => any
    icon?: React.ReactNode
    children?: React.ReactNode
    secondaryText?: React.ReactNode
    appearance: string
    intent: Intent
    theme: object
    onClick?: any
}

class MenuItem extends React.PureComponent<MenuItemInterface, {}>{
    static defaultProps = {
        id: 'div',
        intent: Intent.NONE,
        appearance: 'default',
        onSelect: () => {}
    }

    handleClick = event => {
        this.props.onSelect(event)
        safeInvoke(this.props.)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Pane></Pane>
        )
    }
}

export default withTheme(MenuItem) as any
