import React from 'react'
import Box, {css} from 'ui-box'

const animationEasing = {
    standard: `cubic-bezier(0.4, 0.0, 0.2, 1)`,
    deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
    acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
    sharp: `cubic-bezier(0.4, 0.0, 0.6, 1)`,
    spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
};

const ANIMATION_DURATION = 240;

const fadeInAnimation = css.keyframes('fadeInAnimation', {
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    }
});

const fadeOutAnimation = css.keyframes('fadeOutAnimation', {
    from: {
        opacity: 1
    },
    to: {
        opacity: 0
    }
});

const animationStyles = backgroundColor => ({
    '&::before': {
        backgroundColor,
        left: 0,
        top: 0,
        position: 'fixed',
        display: 'block',
        width: '100%',
        height: '100%',
        content: '" "'
    },
    '&[data-state="entering"]::before, &[data-state="entered"]::before': {
        animation: `${fadeInAnimation} ${ANIMATION_DURATION}ms ${
            animationEasing.deceleration
            } both`
    },
    '&[data-state="exiting"]::before, &[data-state="exited"]::before': {
        animation: `${fadeOutAnimation} ${ANIMATION_DURATION}ms ${
            animationEasing.acceleration
            } both`
    }
});

export interface OverlayProps {
    children: any
    isShown: boolean
    containerProps: object
    preventBodyScrolling: boolean
    shouldCloseOnClick: boolean
    shouldCloseOnEscapePress: boolean
    onBeforeClose: () => any
    onExit: () => any
    onExiting: () => any
    onExited: () => any
    onEntering: () => any
    onEntered: () => any
}

interface State {
    exiting: boolean
    exited: boolean
}

class Overlay extends React.Component<OverlayProps, State>{

    static defaultProps = {
        shouldCloseOnClick: true,
        shouldCloseOnEscapePress: true,
        preventBodyScrolling: false,
        onExit: () => {},
        onExiting: () => {},
        onExited: () => {},
        onEnter: () => {},
        onEntering: () => {},
        onEntered: () => {}
    };

    containerElement: any;

    constructor(props) {
        super(props);
        this.state = {
            exiting: false,
            exited: !this.props.isShown
        }
    }

    componentDidUpdate(prevProps: Readonly<OverlayProps>, prevState: Readonly<State>, snapshot?: any): void {
        if (!prevProps.isShown && this.props.isShown) {
            this.setState({
                exited: false
            })
        }
    }

    componentWillUnmount(): void {

    }

    bringFocusInsideOverlay = () => {
        return requestAnimationFrame(() => {
            if (
                this.containerElement === null ||
                document.activeElement === null ||
                !this.props.isShown
            ) {return}

            const isFocusOutsideModal = !this.containerElement.contains(
                document.activeElement
            );
            if (isFocusOutsideModal) {
                const autofocusElement = this.containerElement.querySelector(
                    '[autofocus]'
                );
                const wrapperElement = this.containerElement.querySelector('[tabindex]');
                const buttonElement = this.containerElement.querySelector('button');

                if (autofocusElement) {
                    autofocusElement.focus()
                } else if (wrapperElement) {
                    wrapperElement.focus()
                } else if (buttonElement) {
                    buttonElement.focus()
                }
            }
        })
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div></div>
        )
    }
}

export default Overlay;
