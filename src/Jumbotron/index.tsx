import React from 'react';
import './Jumbotron.css';

export interface ComponentProps {
    height: number
    backgroundColor?: string
    textColor?: string
    children: any
}

export type JumbotronProps = ComponentProps & React.HTMLAttributes<HTMLDivElement>

export default class Jumbotron extends React.Component<JumbotronProps, {}>{
    render(){
        return (
            <div className="jumb-body" style={{height: this.props.height, backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#4285F4', paddingTop: 80, color: this.props.textColor ? this.props.textColor : 'white'}} {...this.props}>
                {this.props.children}
            </div>
        );
    }
}
