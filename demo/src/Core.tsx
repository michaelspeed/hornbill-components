import React from 'react'
import {mount, route} from "navi";
import Home from "./Pages/Home/Home";
import {Router, View} from "react-navi";
import Buttons from "./Pages/Buttons/Buttons";
import PanelDoc from "./Pages/Panel/Panel";

const routes = mount({
    '/': route({
        title: 'Hornbill Components',
        view: <Home/>
    }),
    '/components/buttons': route({
        title: 'Hornbill Buttons',
        view: Buttons
    }),
    '/components/panel': route({
        title: 'Hornbill Panel',
        view: PanelDoc
    })
})

export default class Core extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Router routes={routes}>
                <View/>
            </Router>
        )
    }
}
