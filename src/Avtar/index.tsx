import React from 'react';
import './Avtar.css';
import clsx from 'clsx';
import { AvtarSize } from '../globals/global';

export interface ComponentProps {
    size?: string
    rounded: boolean
    img:string
};

type HAvtarProps = ComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>

class Avtar extends React.Component<HAvtarProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const round:string = this.getRounded();
        const AvtarSize:string = this.getSizeOfAvtar();
        return(
            <a className="user-avatar" href="#">
                <img src={this.props.img} alt="avatar" className={
                    clsx(round, AvtarSize)
                }/>
            </a>
        );
    }

    getRounded = () => {
        if (this.props.rounded) {
            return 'rounded-circle'
        } else {
            return 'rounded'
        }
    }

    getSizeOfAvtar = () => {
        if (this.props.size === AvtarSize.EXTRALARGE){
            return 'hb-thumb-xl';
        }
        else if (this.props.size === AvtarSize.LARGE){
            return 'hb-thumb-lg';
        }
        else if (this.props.size === AvtarSize.MEDIUM){
            return 'hb-thumb-mb';
        }
        else if (this.props.size === AvtarSize.SMALL){
            return 'hb-thumb-sm';
        }
        else if(this.props.size === AvtarSize.EXTRASMALL){
            return 'hb-thumb-xs';
        }
    }
}

export default Avtar;