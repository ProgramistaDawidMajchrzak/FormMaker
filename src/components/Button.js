import React from 'react';

export default function Button({ value, padding, margin }) {
    return (
        <>
            <input
                style={{ padding: padding, margin: margin }}
                className='main-button'
                type="button"
                value={value}
            />
        </>
    )
}
