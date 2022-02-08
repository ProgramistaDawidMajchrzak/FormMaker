import React from 'react';

export default function Button({ value }) {
    return (
        <>
            <input
                className='main-button'
                type="button"
                value={value}
            />
        </>
    )
}
