'use client';

import { Toaster as Sonner } from 'sonner';

export default function Toaster({ ...props }) {
    return (
        <Sonner
            richColors
            closeButton
            position="bottom-right"
            {...props}
        />
    );
}
