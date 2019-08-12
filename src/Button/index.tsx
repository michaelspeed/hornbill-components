import React from 'react'
import './button.css'
import clsx from 'clsx'
import {Intent} from "../globals/global";

interface Props {
    intent: Intent
    children: string | React.Component
    icon?: React.Component
}

class Button extends React.Component<Props, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {children, intent, icon} = this.props;
        const bntIntent: string = this.getIntentProps(intent)
        return (
            <button className={
                clsx({
                    'hb-btn': true,
                    'waves-effect': true,
                    'waves-light': true,
                }, bntIntent)
            }
            >{icon !== undefined ? icon: ''}{children}</button>
        )
    }

    getIntentProps(intent): string {
        if (intent === "danger") {
            {
                return 'hb-btn-danger'
            }
        } else if (intent === "info") {
            {
                return 'hb-btn-info'
            }
        } else if (intent === "none") {
            {
                return ''
            }
        } else if (intent === "primary") {
            {
                return 'hb-btn-primary'
            }
        } else if (intent === "success") {
            {
                return 'hb-btn-success'
            }
        } else if (intent === "warning") {
            {
                return 'hb-btn-warning'
            }
        } else 
            {
                return ''
            }
    }
}

export default Button;
