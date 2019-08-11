import React from 'react'
import './Panel.css'

export interface PanelProps {
    isOpen: boolean
}
class Panel extends React.Component<PanelProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {isOpen, children} = this.props;
        let overlay;
        if (isOpen) {
            overlay = (
                <div className='hb-Panel-overlay'>
                    {children}
                </div>
            )
        }
        return (
            <React.Fragment>
                {overlay}
            </React.Fragment>
        )
    }
}

export default Panel
