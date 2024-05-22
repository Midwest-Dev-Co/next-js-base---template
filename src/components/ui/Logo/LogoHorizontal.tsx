import LogoHorizontalIcon from '@/assets/icons/logo/logo-horizontal.svg'; // TODO
import LazyImageLocal from '../../containers/LazyImageLocal';

// * Component: Logo
export default function LogoHorizontal() {
  // * Render
  return (
    <LazyImageLocal
      className="h-6 w-auto"
      src={LogoHorizontalIcon || ''}
      alt={process.env.NEXT_PUBLIC_COMPANY_NAME || 'logo'}
      width={LogoHorizontalIcon.width}
      height={LogoHorizontalIcon.height}
    />
  );
}
