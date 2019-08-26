import {ThemeConsumer} from "./ThemeContext";
import * as React from "react";

function withTheme(WrappedComponent) {
    const displayName =
        WrappedComponent.displayName || WrappedComponent.name || 'Component'

    return class extends React.Component {
        static displayName = `withTheme(${displayName})`

        render() {
            return (
                <ThemeConsumer>
                    {theme => <WrappedComponent theme={theme} {...this.props} />}
                </ThemeConsumer>
            )
        }
    }
}

export default withTheme
