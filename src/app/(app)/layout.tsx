// * Styles
import '@/assets/styles/globals.css';

// * Imports
// Next
import dynamic from 'next/dynamic';
// import { Analytics } from '@vercel/analytics/react';

// Metadata
import { defaultMetadata } from '../defaultMetadata';

// Fonts
import { baskervville, inter } from '@/assets/fonts/googleFonts';
import { lexend } from '@/assets/fonts/localFonts';
import { cn } from '@/lib/utils';
import { Viewport } from 'next';
import Navigation from '@/components/global/navigation/Navigation';
import Footer from '@/components/global/footer/Footer';
import { PropsWithChildren } from 'react';

// * Dynamic Imports
const Toaster = dynamic(() => import('@/components/containers/Toaster'), {
    ssr: false,
});

// * Component
export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html
            lang="en"
            className={cn(
                inter.variable,
                baskervville.variable,
                lexend.variable
            )}
        >
            <body suppressHydrationWarning>
                {/* Navigation */}
                <Navigation />

                {/* Children */}
                {children}

                {/* Footer */}
                <Footer />

                {/* Toast Container */}
                <Toaster />

                {/* Analytics */}
                {/* <Analytics /> */}
            </body>
        </html>
    );
}

// * Metadata & Viewport
export const viewport: Viewport = {
    themeColor: '#FFFFFF', // TSKCOLOR
};

export const metadata = defaultMetadata;
