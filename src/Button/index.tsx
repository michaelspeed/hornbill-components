import React from 'react'
import '@material/button/dist/mdc.button.css'

export default class Button extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <button className='mdc-button'>sdsds</button>
        )
    }
}
