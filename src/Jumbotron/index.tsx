import React from 'react';
import './Jumbotron.css';

 interface Props {
}

export default class Jumbotron extends React.Component<Props, {}>{
    render(){
        return (
            <div className="jumbotron mb-0 bg-light">
                <h1 className="display-4">Hello, world!</h1>
                    <span className="lead">
                        This is a simple hero unit,
                        a simple jumbotron-style component for calling extra attention 
                        to featured content or information.
                    </span>
                    <hr className="my-4"/>
                    <span>It uses utility classes for typography and spacing to 
                        space content out within the larger container.
                    </span>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        );
    }
}
