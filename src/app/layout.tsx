// * Styles
import '@/assets/styles/globals.css';

// * Imports
// Next
import dynamic from 'next/dynamic';
// import { Analytics } from '@vercel/analytics/react';

// Metadata
import { defaultMetadata } from './defaultMetadata';

// Fonts
import { baskervville, inter } from '@/assets/fonts/googleFonts';
import { lexend } from '@/assets/fonts/localFonts';
import { cn } from '@/lib/utils';

// * Dynamic Imports
const Toast = dynamic(() => import('@/components/global/Toast'), {
  ssr: false,
});

// * Props
interface IProps {
  children: React.ReactNode;
  // modal: React.ReactNode;
}

// * Component
export default function RootLayout({ children }: IProps) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, baskervville.variable, lexend.variable)}
    >
      <body suppressHydrationWarning>
        {/* Children */}
        {children}

        {/* Modal */}
        {/* {modal} */}

        {/* Toast Container */}
        <Toast />

        {/* Analytics */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}

// * Metadata
export const metadata = defaultMetadata;
