import { cn } from '@/lib/utils';

// * Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// * Component: Container
export default function SimpleContainer({ children, className }: IProps) {
  // * Render
  return (
    <div className={cn('relative mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
