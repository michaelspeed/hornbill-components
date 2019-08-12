import React from 'react';
import './progressbar.css';
import clsx from 'clsx';
import { Intent } from '../globals/global';

export interface ComponentProps{
    intent: Intent
    strip?: boolean
}

export type HProgressBarProps = ComponentProps & React.HTMLAttributes<HTMLDivElement>

export default class ProgressBar extends React.Component<HProgressBarProps, {}>{ 
    getIntentProps(intent): string {
        if(intent === 'warning') {
            return 'hb-bg-warning';
        }
        else if(intent === 'primary'){
            return 'hb-bg-secondary';
        }
    }

    getStipped(strip): string {
        if(strip) {
            return 'progress-bar-striped'
        } else {
            return ''
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { intent, strip, ...restProps } = this.props;
        const progressBarFunc:string = this.getIntentProps(intent);
        const progressstripe: string = this.getStipped(strip)
        return(
                <div className={
                    clsx({
                        'progress':true,
                        'progress-bar':true,
                    },progressBarFunc, progressstripe)
                } {...restProps}>
                </div>
        );
    }
}
{/* 
                <div className="progress mb-4" style={{height: "3px"}}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "15%"}}></div>
                </div>

                <div className="progress mb-4">
                    <div className="progress-bar" role="progressbar" style={{width: "25%"}}>25%</div>
                </div>

                <div className="progress mb-4" style={{height: "12px"}}>
                    <div className="progress-bar  progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{width: "35%"}}></div>
                </div>

                <div className="progress mb-4">
                    <div className="progress-bar" role="progressbar" style={{width: "15%"}}>15%</div>
                    <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{width: "15%"}}>15%</div>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{width: "15%"}}>15%</div>
                </div>

                <div className="progress" style={{height:"24px"}}>
                    <div className="progress-bar" role="progressbar" style={{width: "80%"}}></div>
                </div> */}