import * as React from "react";
import defaultTheme from './defaultTheme'

const ThemeContext = React.createContext(defaultTheme)
const {
    Provider: ThemeProvider,
    Consumer: ThemeConsumer
} = ThemeContext

export default ThemeContext
export {ThemeProvider, ThemeConsumer}
