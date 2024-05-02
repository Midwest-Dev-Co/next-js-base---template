import Image from 'next/image';

import LogoSquareIcon from '@/assets/icons/brand/logo-square.svg'; // TODO
import { cn } from '@/lib/utils';

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
