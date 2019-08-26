import Box, {css} from 'ui-box'
import React, {PureComponent} from "react";
import {withTheme} from "../Theme";

const loadingKeyframes = css.keyframes('loading', {
    '0%': {
        transform: 'rotate(0)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
});

const loadingCircleKeyframes = css.keyframes('loading-circle', {
    '0%': {
        strokeDashoffset: 600
    },
    '100%': {
        strokeDashoffset: 0
    }
});

const outer = {
    animation: `${loadingKeyframes} 2s linear infinite`
};

const inner = color => ({
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round',
    animation: `${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
    stroke: color,
    fill: 'transparent'
});

export interface ComponentProps {
    delay?: number
    size: number
    theme: any
}

export type SpinnerProps = ComponentProps & Box.propTypes

interface State {
    isVisible: boolean
}

class Spinner extends PureComponent<SpinnerProps, State> {
    static defaultProps = {
        size: 40,
        delay: 0
    };

    delayTimer: any;

    constructor(props) {
        super(props);
        this.state = {
            isVisible: props.delay === 0
        }
    }

    componentDidMount(): void {
        const {delay} = this.props;
        if (delay > 0) {
            this.delayTimer = setTimeout(() => {
                this.setState({
                    isVisible: true
                })
            }, delay)
        }
    }

    componentWillUnmount(): void {
        clearTimeout(this.delayTimer)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        if (!this.state.isVisible) {
            return null
        }
        const {theme, size, ...props} = this.props;
        return (
            <Box width={size} height={size} lineHeight={0} {...props}>
                <Box is='svg' css={outer} x='0px' viewBox='0 0 150 150'>
                    <Box
                        is='circle'
                        css={inner(theme.spinnerColor)}
                        cx='75'
                        cy='75'
                        r='60'
                    />
                </Box>
            </Box>
        )
    }
}

export default withTheme(Spinner)
