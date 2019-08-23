/*Basic Intent Types*/

export const Intent = {
    NONE: "none" as "none",
    PRIMARY: "primary" as "primary",
    SUCCESS: "success" as "success",
    WARNING: "warning" as "warning",
    DANGER: "danger" as "danger",
    INFO: "info" as "info",
};

export type Intent = typeof Intent[keyof typeof Intent]

export const ButtonSize = {
    LARGE: "large" as "large",
    SMALL: "small" as "small",
    EXTRASMALL: "extrasmall" as "extrasmall"
}

export type ButtonSize = typeof ButtonSize[keyof  typeof ButtonSize]

// export const SpinnerType = {
//     "text-primary" : "primary" as "primary",
//     "text-blue" :    "blueText" as "blueText",
//     "text-secondary" : "secondary" as "secondary",
//     "text-success" : "success" as "success",
//     "text-danger" : "danger" as "danger",
//     "text-warning" : "warning" as "warning",
//     "text-info" : "info"
//     "text-pink" : 
//     "text-purple" : 
//     "text-light" : 
//     "text-dark" : 
// }

// export type SpinnerType = typeof SpinnerType[keyof typeof SpinnerType]