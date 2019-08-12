// import React from 'react'
// import './spinner.css'
// import clsx from 'clsx'
// import {Intent} from "../globals/global";

// interface Props {
//     intent: Intent
// }


// class Spinner extends React.Component<Props, {}>{
//     render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined 
//     {
//         const {intent} = this.props;
//         const bntIntent: string = this.getIntentProps(intent)
//         return (
//             <div className={
//                 clsx({
//                     'alert' : true,
//                 //"alert alert-secondary border-0"
//                 },bntIntent)}
//                  >
//             </div>  
//         )
//     }

//     getIntentProps(intent): string {
//         if (intent === "info"){
//             return 'hb-alert-info'
//         }

//         else if (intent === "light"){
//             return 'hb-alert-light'
//         }

//         else if (intent === "secondary"){
//             return 'hb-alert-secondary'
//         }

//         else{
//             return ''
//         }
//     }

// }
// export default Spinner;