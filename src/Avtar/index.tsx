import React from 'react';
import './Avtar.css';

export interface ComponentProps {
    size?: string
    rounded: boolean
    img:string
};

type HAvtarProps = ComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>

class Avtar extends React.Component<HAvtarProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <a className="user-avatar" href="#">
                >
            </a>
        );
    }
}

export default Avtar;
