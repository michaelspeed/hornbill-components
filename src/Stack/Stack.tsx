import React, {PureComponent} from 'react'
import StackingOrder from "../globals/StackingOrder";
import StackingContext from "./StackingContext";

interface StackProps {
    children: any
    value: number
}

export default class Stack extends PureComponent<StackProps, {}> {

    static defaultProps = {
        value: StackingOrder.STACKING_CONTEXT
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {children, value} = this.props
        return (
            <StackingContext.Consumer>
                {previousvalue => {
                    const currentValue = Math.max(value, previousvalue)
                    const nextValue = currentValue + 1
                    return (
                        <StackingContext.Provider value={nextValue}>
                            {children(currentValue)}
                        </StackingContext.Provider>
                    )
                }}
            </StackingContext.Consumer>
        )
    }

}
