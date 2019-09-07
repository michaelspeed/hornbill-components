import React from 'react'
import Box from 'ui-box'
import {Elevation} from "../globals";
import {Colors} from "../Colors";
import {withTheme} from "../Theme";

export interface ComponentProps {
    background?: string
    elevation?: Elevation
    hoverElevation?: Elevation
    activeElevation?: Elevation
    border?: string | boolean
    borderTop?: string | boolean
    borderRight?: string | boolean
    borderBottom?: string | boolean
    borderLeft?: string | boolean
    theme: any
}

export type PaneProps = ComponentProps & Box.propTypes

class Pane extends React.Component<PaneProps, {}>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            border,
            theme,
            elevation,
            hoverElevation,
            activeElevation,
            background,
            css = {},
            ...props
        } = this.props
        const [_borderTop, _borderRight, _borderBottom, _borderLeft] = [
            borderTop,
            borderRight,
            borderBottom,
            borderLeft
        ].map(borderSideProperty => this.getBorderSideProperty({borderSideProperty, border}))
        const elevationStyle = theme.getElevation(elevation)
        const hoverElevationStyle = this.getHoverElevationStyle(hoverElevation, css)
        const activeElevationStyle  = this.getActiveElevationStyle(activeElevation, css)

        return (
            <Box
                borderTop={_borderTop}
                borderRight={_borderRight}
                borderBottom={_borderBottom}
                borderLeft={_borderLeft}
                boxShadow={elevationStyle}
                background={theme.getBackground(background)}
                css={{
                    ...css,
                    ...hoverElevationStyle,
                    ...activeElevationStyle
                }}
                {...props}
            />
        )
    }

    getHoverElevationStyle = (hoverElevation, css) => {
        const {theme} = this.props

        if (!Number.isInteger(hoverElevation)) return {}

        return {
            transitionDuration: '150ms',
            transitionProperty: 'box-shadow, transform',
            transitionTimingFunction: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
            ':hover': {
                ...(css[':hover'] || {}),
                transform: 'translateY(-2px)',
                boxShadow: theme.getElevation(hoverElevation)
            }
        }
    }

    getActiveElevationStyle = (activeElevation, css) => {
        const {theme} = this.props
        if (!Number.isInteger(activeElevation)) return {}
        return {
            ':active': {
                ...(css[':active'] || {}),
                transform: 'translateY(-1px)',
                boxShadow: theme.getElevation(activeElevation)
            }
        }
    }

    getBorderSideProperty = ({borderSideProperty, border}) => {
        const {theme} = this.props
        if (
            Object.prototype.hasOwnProperty.call(
                theme.colors.border,
                borderSideProperty
            )
        ) {
            return `1px solid ${theme.colors.border[borderSideProperty]}`
        }
        if (borderSideProperty === true) {
            return `1px solid ${Colors.warmGray60}`
        }

        if (border === true) {
            return `1px solid ${Colors.warmGray60}`
        }

        return borderSideProperty
    }
}

export default withTheme(Pane) as any
