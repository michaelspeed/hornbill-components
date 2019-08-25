import React from 'react'
import './button.css'
import clsx from 'clsx'
import {Intent} from "../globals/global";

export interface ComponentProps {
    intent: Intent
    children: any
    icon?: React.Component
    size?: string
    dashed?: boolean
    skew?: boolean
}

type HButtonProps = ComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>

class Button extends React.Component<HButtonProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {children, intent, icon, size, dashed, skew, ...restProps} = this.props;
        const bntIntent: string = this.getIntentProps(intent);
        const bntSizes: string = this.getButtonSizes(size);
        return (
            <button className={
                clsx({
                    'hb-btn': true,
                    'waves-effect': true,
                    'waves-light': true,
                    'hb-btn-outline-dashed': dashed,
                    'btn-skew': skew
                }, bntIntent, bntSizes)
            }
                    {...restProps}
            >{icon !== undefined ? icon: ''}{children}</button>
        )
    }

    getButtonSizes(size): string {
        if (size === "large") {
            return 'hb-btn-xl'
        } else if (size === "small") {
            return 'hb-btn-sm'
        } else if (size === "extrasmall") {
            return 'hb-btn-xs'
        } else {
            return ''
        }
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
