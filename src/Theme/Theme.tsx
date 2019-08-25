import React from "react"
import {defaultTheme} from "./DefaultTheme";
import {Theme} from "./Theme";

interface HThemeProps {
    theme?: Theme | null
}

class HornBillProvider extends React.Component<HThemeProps, {}>{
    public theme: any
    constructor(props) {
        super(props);
        if (props.theme === null) {
            this.theme = React.createContext(defaultTheme)
        } else {
            this.theme = React.createContext(props.theme)
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const ThemeProvider = this.theme.Provider;
        return (
            <ThemeProvider>
                {this.props.children}
            </ThemeProvider>
        )
    }

}

export default HornBillProvider
