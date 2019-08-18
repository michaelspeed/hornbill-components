import React from 'react'
import ReactDOM from 'react-dom'

let portalContainer;

export default class Portal extends React.Component {

    canUseDom: boolean;
    el: any;

    constructor(props) {
        super(props);
        if (!this.canUseDom) return;
        if (!portalContainer) {
            portalContainer =  document.createElement('div');
            portalContainer.setAttribute('hornbill-portal-container', '');
            document.body.append(portalContainer)
        }
        this.el = document.createElement('div');
        portalContainer.append(this.el)
    }

    componentWillMount(): void {
        portalContainer.removeChild(this.el)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        if (!this.canUseDom) return  null
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}
