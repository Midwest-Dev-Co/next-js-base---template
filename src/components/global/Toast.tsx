'use client';

import { Toaster } from 'sonner';

// * Component: Toast
export default function Toast() {
  // * Render
  return (
    <Toaster className="print:hidden" richColors position="bottom-right" />
  );
}
