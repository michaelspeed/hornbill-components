import React from 'react';
import './TabComponent.css';

interface Props{

}

export default class Tab extends React.Component<Props, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                {/* first tab component */}
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
                    </li>                                                
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a>
                     </li>
                </ul>
    
                <div className="tab-content">
                    <div className="tab-pane active p-3" id="home" role="tabpanel">
                         <p className="mb-0 text-muted">
                            Home activate
                          </p>
                    </div>
                    <div className="tab-pane p-3" id="profile" role="tabpanel">
                        <p className="mb-0 text-muted">
                            Profile activate. 
                        </p>
                    </div>                                                
                    <div className="tab-pane p-3" id="settings" role="tabpanel">
                        <p className="text-muted mb-0">
                            Setting activate
                        </p>
                    </div>
                </div>

                {/* second tab Systm */}
                
            </div>
        );
    }
}