import React from 'react'
import {ButtonProps} from "./types";

export const filterProps = (
    { ...props }: Partial<ButtonProps>,
    type: React.ReactNode,
) => {
    if (type === 'span') {
        const { target, href, ...rest } = props;
        return rest;
    }
    return props;
};

export const composeRefs = (...refs: any[]) => {
    return (x: HTMLElement) => {
        refs
            .filter(r => !!r)
            .forEach(ref => {
                if (typeof ref === 'function') {
                    ref(x);
                } else {
                    ref.current = x;
                }
            });
    };
};
