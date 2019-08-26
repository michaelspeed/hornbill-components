import React, {PureComponent} from "react";
import {IconSvgPaths16, IconSvgPaths20, IconNames} from "@blueprintjs/icons";
import Box from "ui-box";
import {withTheme} from "../Theme";

export { IconNames }

interface ComponentProps {
    color?: string
    icon: string
    size: number
    title?: string
    style?: any
    theme: any
}

class Icon extends PureComponent<ComponentProps>{
    static SIZE_STANDARD = 16;
    static SIZE_LARGE = 20;
    static defaultProps = {
        size: 16,
        color: 'currentColor'
    };

    renderSvgPaths = (pathSize, iconName) => {
        const svgPathsRecord = pathSize === Icon.SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20;
        const pathStrings = svgPathsRecord[iconName];
        if (pathStrings === null) {
            return null
        }

        return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd"/>)
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {theme, color, icon, size, title, ...svgProps} = this.props;
        let { style = {} } = this.props;
        if (icon === null) {return null}
        if (typeof icon !== 'string') {return icon}
        const pixelGridSize = size >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD;
        const paths = this.renderSvgPaths(pixelGridSize, icon);
        if (paths === null) {return null}
        const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`;
        if (color != null) {
            style = { ...style, fill: theme.getIconColor(color) }
        }
        return (
            <Box
                is='svg'
                {...svgProps}
                style={style}
                data-icon={icon}
                width={size}
                height={size}
                viewBox={viewBox}
            >
                {title ? <title>{title}</title> : null}
                {paths}
            </Box>
        )
    }
}

export default withTheme(Icon)
