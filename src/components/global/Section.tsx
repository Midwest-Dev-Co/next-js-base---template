import { cn } from '@/lib/utils';

interface IProps {
  children: React.ReactNode;
  name?: string;
  className?: string;
}

export default function Section({ children, name, className = '' }: IProps) {
  return (
    <section
      id={name ? name : ''}
      className={cn(
        'my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12 2xl:my-14 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-14',
        className,
      )}
    >
      {children}
    </section>
  );
}
