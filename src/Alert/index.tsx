import React from 'react'
import './alert.css'
import clsx from 'clsx'
import {Intent} from "../globals/global";

export interface ComponentProps {
    intent: Intent
    title: "Alert!"
    message: "Oh snap! Change a few things up and try submitting again."
}

export type HAlertProps = ComponentProps & React.HTMLAttributes<HTMLDivElement>

class Alert extends React.Component<HAlertProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined 
    {
        const {message, intent, title} = this.props;
        const bntIntent: string = this.getIntentProps(intent)
        return (
            <div className={
                clsx({
                    'alert' : true,
                //"alert alert-secondary border-0"
                },bntIntent)}
                 >
                 {title !== undefined ? title: ''}{message}
            </div>  
        )
    }

    getIntentProps(intent): string {
        if (intent === "info"){
            return 'hb-alert-info'
        }

        else if (intent === "primary"){
            return 'hb-alert-light'
        }

        else if (intent === "success"){
            return 'hb-alert-secondary'
        }

        else if (intent === "warning"){
            return 'hb-alert-dismissible'
        }

        else if (intent === "none"){
            return 'hb-alert-heading'
        }

        else{
            return ''
        }
    }

}
export default Alert;