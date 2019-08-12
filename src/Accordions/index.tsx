import React from 'react';
import './accordance.css';

interface Props{

}

export default class Accordance extends React.Component<Props, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                {/* first tab component */}
                <ul className="nav nav-pills nav-justified" role="tablist">
                    <li className="nav-item waves-effect waves-light">
                         <a className="nav-link active" data-toggle="tab" href="#home-1" role="tab">Home</a>
                    </li>
                    <li className="nav-item waves-effect waves-light">
                        <a className="nav-link" data-toggle="tab" href="#profile-1" role="tab">Profile</a>
                    </li>
                    <li className="nav-item waves-effect waves-light">
                        <a className="nav-link" data-toggle="tab" href="#settings-1" role="tab">Settings</a>
                    </li>
                </ul>
    
                <div className="tab-content">
                    <div className="tab-pane active p-3" id="home-1" role="tabpanel">
                        <p className="text-muted mb-0">
                            Home page
                        </p>
                    </div>
                    <div className="tab-pane p-3" id="profile-1" role="tabpanel">
                        <p className="text-muted mb-0">
                            profile page
                        </p>
                    </div>
                    <div className="tab-pane p-3" id="settings-1" role="tabpanel">
                        <p className="text-muted mb-0">
                            settings page
                        </p>
                    </div>
                </div>

                {/* second tab Systm */}
                
            </div>
        );
    }
}