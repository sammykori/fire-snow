import React from 'react';

export default function PrimaryButton({ type = 'submit', className = '', processing, children }) {
    return (
        <button
            type={type}
            className={
                `w-64 text-center px-4 py-2 bg-fireball-red border border-transparent font-display text-2xl text-white active:bg-red-900 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
