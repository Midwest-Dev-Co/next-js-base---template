import Image from 'next/image';
import { cn } from '@/lib/utils';

import LogoSquareIcon from '@/assets/icons/brand/logo-square.svg'; // TODO

// * Component: Logo
export default function LogoSquare({ className = '' }: { className?: string }) {
  // * Render
  return (
    <Image
      className={cn('h-8 w-8', className)}
      src={LogoSquareIcon}
      alt={process.env.NEXT_PUBLIC_COMPANY_NAME || 'logo'}
      priority
    />
  );
}
