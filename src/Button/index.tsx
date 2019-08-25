import React from 'react'
import './button.css'
import {ButtonProps} from "./types";

export type ButtonState = {
    isHover: boolean;
    isActive: boolean;
    isFocus: boolean;
}

class Button extends React.Component<ButtonProps, ButtonState>{
    static defaultProps = {
        appearance: 'default',
        autoFocus: false,
        isDisabled: false,
        isLoading: false,
        isSelected: false,
        shouldFitContainer: false,
        spacing: 'default',
        type: 'button',
    };

    button: React.Ref<HTMLButtonElement> = React.createRef<HTMLButtonElement>();

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isFocus: false,
            isHover: false
        }
    }

    inInteractive = () => !this.props.isDisabled && !this.props.isLoading;

    onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        this.setState({isHover: true});
        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(e)
        }
    };

    onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        this.setState({ isHover: false, isActive: false });
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    };

    onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        this.setState({ isActive: true });
        if (this.props.onMouseDown) {
            this.props.onMouseDown(e);
        }
    };

    onMouseUp = (e: React.MouseEvent<HTMLElement>) => {
        this.setState({ isActive: false });
        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    };

    onFocus: React.FocusEventHandler<HTMLButtonElement> = event => {
        this.setState({ isFocus: true });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    onBlur: React.FocusEventHandler<HTMLButtonElement> = event => {
        this.setState({ isFocus: false });
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    getElement = () => {
        const {href, isDisabled} = this.props;
        if (href) {
            return isDisabled ? 'span' : 'a'
        }
        return 'button'
    };

    onInnerClick: React.MouseEventHandler<HTMLElement> = e => {
        if (!this.inInteractive()) {
            e.stopPropagation();
        }
        return true;
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div></div>
        )
    }
}

export default Button;
