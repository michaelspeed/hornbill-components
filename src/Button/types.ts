import * as React from "react";
import {HTMLAttributes} from "react";

export type ButtonAppearances =
    | 'default'
    | 'danger'
    | 'link'
    | 'primary'
    | 'subtle'
    | 'subtle-link'
    | 'warning';

export type Spacing = 'compact' | 'default' | 'none';

export type OnlyButtonProps = {
    appearance?: ButtonAppearances
    autoFocus?: boolean
    className?: string
    component?: React.ElementType<any>
    consumerRef?: React.Ref<HTMLElement>
    href?: string
    iconAfter?: React.ReactChild
    iconBefore?: React.ReactChild
    isDisabled?: boolean
    isLoading?: boolean
    isSelected?: boolean
    onBlur?: React.FocusEventHandler<HTMLElement>
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
    onMouseDown?: React.MouseEventHandler<HTMLElement>
    onMouseEnter?: React.MouseEventHandler<HTMLElement>
    onMouseLeave?: React.MouseEventHandler<HTMLElement>
    onMouseUp?: React.MouseEventHandler<HTMLElement>
    onFocus?: React.FocusEventHandler<HTMLElement>
    spacing?: Spacing
    target?: string
    shouldFitContainer?: boolean
    theme?: any
    children?: React.ReactNode
}

export type ButtonProps = HTMLAttributes<any> & OnlyButtonProps
