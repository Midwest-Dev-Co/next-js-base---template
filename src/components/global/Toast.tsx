'use client';

import { Toaster } from '../ui/Toaster';

// * Component: Toast
export default function Toast() {
  // * Render
  return (
    <Toaster className="print:hidden" richColors position="bottom-right" />
  );
}
