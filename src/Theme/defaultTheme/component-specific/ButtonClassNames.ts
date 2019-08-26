import {defaultControlStyles} from "../shared";
import {getPrimaryButtonStylesForIntent, getTextColorForIntent} from "../helper";
import {scales} from "../foundational-styles";
import {Themer} from "../../../Themer";
import memoizeClassName from "../utils/memorizeClassName";

const { disabled } = defaultControlStyles

const ButtonAppearence = (appearance, intent) => {
    switch (appearance) {
        case 'primary': {
            const { linearGradient, focusColor } = getPrimaryButtonStylesForIntent(
                intent
            )
            return Themer.createButtonAppearance({
                disabled,
                base: {
                    color: 'white',
                    backgroundColor: 'white',
                    backgroundImage: linearGradient.base,
                    boxShadow: `inset 0 0 0 1px ${
                        scales.neutral.N5A
                        }, inset 0 -1px 1px 0 ${scales.neutral.N2A}`
                },
                hover: {
                    backgroundImage: linearGradient.hover
                },
                focus: {
                    boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${
                        scales.neutral.N4A
                        }, inset 0 -1px 1px 0 ${scales.neutral.N5A}`
                },
                active: {
                    backgroundImage: linearGradient.active,
                    boxShadow: `inset 0 0 0 1px ${
                        scales.neutral.N4A
                        }, inset 0 1px 1px 0 ${scales.neutral.N2A}`
                },
                focusAndActive: {
                    boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${
                        scales.neutral.N4A
                        }, inset 0 1px 1px 0 ${scales.neutral.N2A}`
                }
            })
        }

        case 'minimal': {
            const intentTextColor = getTextColorForIntent(intent, scales.blue.B9)
            return Themer.createButtonAppearance({
                disabled,
                base: {
                    color: intentTextColor,
                    backgroundColor: 'transparent'
                },
                hover: {
                    backgroundColor: scales.neutral.N2A
                },
                focus: {
                    boxShadow: `0 0 0 3px ${scales.blue.B5A}`
                },
                active: {
                    backgroundImage: 'none',
                    backgroundColor: scales.blue.B3A
                },
                focusAndActive: {}
            })
        }

        case 'default':
        default: {
            const intentTextColor = getTextColorForIntent(intent)
            return Themer.createButtonAppearance({
                disabled,
                base: {
                    color: intentTextColor,
                    ...defaultControlStyles.base
                },
                hover: defaultControlStyles.hover,
                focus: defaultControlStyles.focus,
                active: defaultControlStyles.active,
                focusAndActive: defaultControlStyles.focusAndActive
            })
        }
    }
}

export default memoizeClassName(ButtonAppearence)
