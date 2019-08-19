import React from 'react';
import './form.css';
import clsx from 'clsx';

export interface ComponentProps {
    borderResult:string
    formStatus:string
    label?: string
    message?: string
};

type HFormProps = ComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>

class Form extends React.Component<HFormProps, {}>{
   
    getBorderStye = () => {
        if(this.props.borderResult === 'success'){
            return 'has-success';
        }
        else if( this.props.borderResult === 'warning'){
            return 'has-warning';
        }
        else if( this.props.borderResult === 'error' ){
            return 'has-error';
        }
    }

    FormController = () => {
        if( this.props.formStatus === 'success'){
            return 'form-control-success';
        }
        else if(this.props.formStatus === 'warning'){
            return 'form-control-warning';
        }
        else if (this.props.formStatus === 'danger'){
            return 'form-control-danger';
        }
    }
    getMessage= () => {
        if( this.props.formStatus === 'success'){
            return "Success! You've done it.";
        }
        else if(this.props.formStatus === 'warning'){
            return 'Warning message';
        }
        else if (this.props.formStatus === 'danger'){
            return 'danger message';
        }
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const borderResult:string = this.getBorderStye();
        const formDetails:string = this.FormController();
        const message:string  = this.getMessage();
        return(
            <div className={
                    clsx({
                        'form-group':true,
                        'row':true
                    },borderResult)
                }>
                <label className={
                    clsx({
                        'col-sm-2':true,
                        'col-form-label':true,
                        'text-right':true
                    })
                }>
                        Email
                </label>
                <div className={clsx({'col-sm-10':true})}>
                    <input type="email" className={
                        clsx({
                            'form-control':true,
                        },formDetails)
                    }
                        id="inputHorizontalSuccess" placeholder="name@example.com"/>

                    <div className={
                        clsx({
                            'form-control-feedback':true
                        })
                    }>
                        Success! You've done it.
                        {/* call the getMEssage Function */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;