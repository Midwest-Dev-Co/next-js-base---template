import { PropsWithChildren } from 'react';
import Link from 'next/link';

import LogoSquare from '@/components/branding/LogoSquare';
import SimpleFooter from '@/components/global/SimpleFooter';
import SimpleContainer from '@/components/global/SimpleContainer';

export default function LegalLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">
                {process.env.NEXT_PUBLIC_COMPANY_NAME}
              </span>
              <LogoSquare />
            </Link>
          </div>
        </nav>
      </header>

      <main className="my-24 relative">
        <SimpleContainer className="max-w-5xl space-y-6">
          {children}
        </SimpleContainer>
      </main>

      <SimpleFooter />
    </>
  );
}
