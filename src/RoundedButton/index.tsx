import React from 'react'
import './RoundedButton.css'
import clsx from 'clsx'
import {Intent} from "../globals/Intent";

interface Props {
    intent: Intent
    children: string | React.Component
    icon?: React.Component
}

export class RoundedButton extends React.Component<Props, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {children, intent, icon} = this.props;
        // @ts-ignore
        let bntIntent: string
        if (intent === "danger") {
            {
                bntIntent = 'btn-danger'
            }
        } else if (intent === "info") {
            {
                bntIntent = 'btn-info'
            }
        } else if (intent === "none") {
            {
                bntIntent = ''
            }
        } else if (intent === "primary") {
            {
                bntIntent = 'btn-primary'
            }
        } else if (intent === "success") {
            {
                bntIntent = 'btn-success'
            }
        } else if (intent === "warning") {
            {
                bntIntent = 'btn-warning'
            }
        } else {
            {
                bntIntent = ''
            }
        }
        return (
            <button
                className={clsx({
                    'btn': true,
                    'btn-round': true,
                    bntIntent: true,
                    'waves-effect waves-light': true
                })}
            >{icon !== undefined ? icon: ''}{children}</button>
        )
    }
}
