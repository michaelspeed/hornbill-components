import React from 'react';
import './Radios.css';
import clsx from 'clsx';

export interface ComponentProps{

};

class Radios extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
                <div className={
                    clsx({
                        'custom-control':true,
                        'custom-radio':true
                    })
                }>
                    <input  type="radio"
                            id="customRadio3" name="customRadio"
                            className={
                                clsx({'custom-control-input':true})
                            }
                    /> 
                        <label
                            className={
                                clsx({'custom-control-label':true})
                            }
                        >
                            {/* name of the radios */}
                        </label>
                </div>
        );
    }
}

export default Radios;
