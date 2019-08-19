import React from 'react';
import './Switches.css';
import clsx from 'clsx';

export interface ComponentProps{
    switchType:string
};

type HSwitchesProps = ComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>

class Switches extends React.Component<HSwitchesProps, {}>{
    getSwitchType = () => {
        if(this.props.switchType === 'primary'){
            return 'switch-primary';
        }
        else if ( this.props.switchType === 'secondary'){
            return 'switch-secondary'
        }
        else if(this.props.switchType === 'success'){
            return 'switch-success';
        }
        else if ( this.props.switchType === 'warning'){
            return 'switch-warning'
        }
        else if(this.props.switchType === 'info'){
            return 'switch-info';
        }
        else if ( this.props.switchType === 'danger'){
            return 'switch-danger'
        }
        else if(this.props.switchType === 'dark'){
            return 'switch-dark';
        }
        else if ( this.props.switchType === 'purple'){
            return 'switch-purple'
        }
        else if(this.props.switchType === 'pink'){
            return 'switch-pink';
        }
        else if ( this.props.switchType === 'blue'){
            return 'switch-blue'
        }
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const switchType:string = this.getSwitchType();
        return(
            <div className={
                clsx({
                    'custom-control':true,
                    'custom-switch': true
                },switchType )
            }>
                <input type="checkbox" className={
                    clsx({'custom-control-input':true})
                } id="customSwitchPrimary" />
                    <label className={
                        clsx({'custom-control-label':true})
                    }>
                        {/* name of the switch */}
                    </label>
            </div>
        );
    }
}

export default Switches