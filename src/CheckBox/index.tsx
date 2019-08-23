import React from 'react'
import './checkbox.css'
import clsx from 'clsx';

export interface ComponentProps{

};

class CheckBox extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className={
                clsx({'checkbox my-2':true})
            }>
                <div className={
                    clsx({
                        'custom-control':true,
                        'custom-checkbox':true
                    })
                }>
                    <input  type="checkbox" 
                            className={
                                clsx({'custom-control-input':true})
                            } 
                            id="customCheck02" 
                            data-parsley-multiple="groups" data-parsley-mincheck="2"
                    />
                        <label className={
                            clsx({'custom-control-label':true})
                        }>Unchecked</label>
                </div>
            </div>
        );
    }
}

export default CheckBox;