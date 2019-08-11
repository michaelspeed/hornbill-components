import React from 'react'
import './Panel.css'
import Modal from 'react-responsive-modal';

export interface PanelProps {
    isOpen: boolean
    size?: string
    onDismiss?: () => any
}

class Panel extends React.Component<PanelProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {isOpen, children, onDismiss} = this.props;
        return (
            <Modal open={isOpen} onClose={onDismiss}>
                <div style={{width: '100vw'}}>
                    {children}
                </div>
            </Modal>
        )
    }

    GetSize = (size) => {
        if (size === undefined) {
            return '100vw'
        } else {
            return `${size}vw`
        }
    }
}

export default Panel
