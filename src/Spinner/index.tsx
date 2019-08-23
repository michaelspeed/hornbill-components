import React from 'react';
import './spinner.css';
import clsx from 'clsx'

export interface ComponentProps{
    sippnerType:string
    spinnerBorderType:string
    spinnerSize: string
};

type HSpinnerProps = ComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>

export default class Spinner extends React.Component<HSpinnerProps, {}>{

    getTextSpinner = () => {
        if (this.props.sippnerType === 'primary'){
            return 'hb-text-primary'
        }
        else if (this.props.sippnerType === 'secondary'){
            return 'hb-text-secondary'
        }
        else if (this.props.sippnerType === 'success'){
            return 'hb-text-success'
        }
        else if (this.props.sippnerType === 'danger'){
            return 'hb-text-danger'
        }
        else if (this.props.sippnerType === 'warning'){
            return 'hb-text-warning'
        }
        else if (this.props.sippnerType === 'info'){
            return 'hb-text-info'
        }
        else if (this.props.sippnerType === 'light'){
            return 'hb-text-light'
        }
        else if (this.props.sippnerType === 'dark'){
            return 'hb-text-dark'
        }
    }

    getSpinnerBorderType = () => {
        if( this.props.spinnerBorderType === 'border' ){
            return 'spinner-border';
        }
        else if( this.props.spinnerBorderType === 'grow' ){
            return 'spinner-grow';
        }
    }

    getSizeOfSpinner = () => {
        if(this.props.spinnerSize === 'medium'){
            return 'hb-thumb-md'
        }
        else if( this.props.spinnerSize === 'small'){
            return 'hb-thumb-sm';
        }
        else if( this.props.spinnerSize === 'extra-small'){
            return 'hb-thumb-xs';
        }
        else if( this.props.spinnerSize === 'large'){
            return 'hb-thumb-lg';
        }
        else if( this.props.spinnerSize === 'extra-large'){
            return 'hb-thumb-xl';
        }
    }
    

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const spinnerSize: string = this.getSizeOfSpinner();
        const spinnerBorderType: string = this.getSpinnerBorderType();
        const textSpinner: string = this.getTextSpinner();
        return(
            <div className={
                clsx(
                   spinnerSize,
                   spinnerBorderType,
                   textSpinner, 
                )
            } role="status"></div>
        );
    }
} 