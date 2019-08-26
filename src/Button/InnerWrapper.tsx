import React from 'react'

interface Props {
    onClick?: React.MouseEventHandler;
    fit: boolean;
    children: React.ReactNode;
}

export default ({fit, children, ...rest}: Props) => (
    <span
        style={{
            alignSelf: 'center',
            display: 'inline-flex',
            flexWrap: 'nowrap',
            maxWidth: '100%',
            position: 'relative',
            ...(fit && { width: '100%' }),
            ...(fit && { justifyContent: 'center' }),
        }}
        {...rest}
    >
        {children}
    </span>
)
