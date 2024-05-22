import { cn } from '@/lib/utils';

import LogoSquareIcon from '@/assets/icons/logo/logo-square.svg'; // TODO
import LazyImageLocal from '../../containers/LazyImageLocal';

// * Component: Logo
export default function LogoSquare({ className = '' }: { className?: string }) {
  // * Render
  return (
    <LazyImageLocal
      className={cn('h-8 w-8', className)}
      src={LogoSquareIcon}
      alt={process.env.NEXT_PUBLIC_COMPANY_NAME || 'logo'}
      width={LogoSquareIcon.width}
      height={LogoSquareIcon.height}
    />
  );
}
