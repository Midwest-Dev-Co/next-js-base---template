import { cn } from '@/lib/utils';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className }: IProps) {
  return (
    <main
      className={cn(
        'grow max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full',
        className,
      )}
    >
      {children}
    </main>
  );
}
