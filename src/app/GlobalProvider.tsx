'use client';

import React from 'react';
import {APIOptions, PrimeReactProvider} from 'primereact/api';

export function GlobalProvider({children}: { children: React.ReactNode }) {
    const primeReactConfig: Partial<APIOptions> = {
        inputStyle: 'filled',
        ripple: true,
    };

    return (
        <PrimeReactProvider value={primeReactConfig}>
            {children}
        </PrimeReactProvider>
    );
}
