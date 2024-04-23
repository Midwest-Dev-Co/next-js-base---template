import Link from 'next/link';
import LogoHorizontal from '@/components/branding/LogoHorizontal';

export default function SimpleFooter() {
  return (
    <footer
      id="footer"
      className="bg-slate-50/80 px-6 pt-14 pb-12 sm:pt-16 lg:px-8 flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <LogoHorizontal />

      {/* Copyright */}
      <p className="mt-8 text-center text-xs leading-5 text-slate-700">
        &copy; {new Date().getFullYear()} Midwest Dev Co, LLC. All rights
        reserved.
      </p>

      {/* Address */}
      <div className="mt-4 text-center text-xs leading-5 text-slate-500 italic">
        <p>2028 Walden Pond Way</p>
        <p>Cape Girardeau, MO 63701</p>
        <p>United States of America</p>
      </div>

      {/* Legal Docs */}
      <div className="mt-4 text-center text-xs leading-5 text-slate-600">
        <Link
          href="/terms-of-service"
          className="hocus:text-slate-800 transition-colors duration-200"
        >
          Terms of Service
        </Link>
        {' | '}
        <Link
          href="/privacy-policy"
          className="hocus:text-slate-800 transition-colors duration-200"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
