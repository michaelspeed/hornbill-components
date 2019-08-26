import {Intent} from "../..";
import {evergreen} from "../../Colors";
import tinycolor from 'tinycolor2'

const linearGradient = (top, bottom) => {
    return `linear-gradient(to bottom, ${top}, ${bottom})`
};

const getTextColorForIntent = (intent, defaultColor?) => {
    switch (intent) {
        case Intent.SUCCESS:
            return evergreen.text.success;
        case Intent.DANGER:
            return evergreen.text.danger;
        case Intent.WARNING:
            return evergreen.text.warning;
        default:
            return defaultColor || evergreen.text.default
    }
};

/**
 * @param {String} startColor
 * @param {String} endColor
 * @param {Number} intensityMultiplier - Some colors need more darkening.
 */
const getLinearGradientWithStates = (
    startColor,
    endColor,
    intensityMultiplier = 1
) => {
    return {
        base: linearGradient(startColor, endColor),
        hover: linearGradient(
            tinycolor(startColor)
                .darken(5 * intensityMultiplier)
                .toString(),
            tinycolor(endColor)
                .darken(5 * intensityMultiplier)
                .toString()
        ),
        active: linearGradient(
            tinycolor(endColor)
                .darken(5 * intensityMultiplier)
                .toString(),
            tinycolor(endColor)
                .darken(5 * intensityMultiplier)
                .toString()
        )
    }
};

/**
 * Gradients in the default theme have a intentional hue shift.
 * @param {Intent} intent - intent of the gradient.
 * @return {Object} { base, hover, active }
 */
const getPrimaryButtonStylesForIntent = intent => {
    switch (intent) {
        case Intent.SUCCESS: {
            const startColor = '#23C277';
            const endColor = '#399D6C';
            return {
                linearGradient: getLinearGradientWithStates(startColor, endColor),
                focusColor: tinycolor(startColor)
                    .setAlpha(0.4)
                    .toString()
            }
        }

        case Intent.WARNING: {
            const startColor = '#EE9913';
            const endColor = '#D9822B';
            return {
                linearGradient: getLinearGradientWithStates(startColor, endColor),
                focusColor: tinycolor(startColor)
                    .setAlpha(0.4)
                    .toString()
            }
        }

        case Intent.DANGER: {
            const startColor = '#EC4C47';
            const endColor = '#D64540';
            return {
                linearGradient: getLinearGradientWithStates(startColor, endColor),
                focusColor: tinycolor(startColor)
                    .setAlpha(0.4)
                    .toString()
            }
        }

        default: {
            const startColor = '#0788DE';
            const endColor = '#116AB8';
            return {
                linearGradient: getLinearGradientWithStates(startColor, endColor),
                focusColor: tinycolor(startColor)
                    .setAlpha(0.4)
                    .toString()
            }
        }
    }
};

export {
    linearGradient,
    getTextColorForIntent,
    getLinearGradientWithStates,
    getPrimaryButtonStylesForIntent
}
