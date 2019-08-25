import React from "react"
import {defaultTheme} from "./DefaultTheme";

const HornBillContext = React.createContext(defaultTheme);
export const Provider = HornBillContext.Provider;
export const Consumer = HornBillContext.Consumer;
