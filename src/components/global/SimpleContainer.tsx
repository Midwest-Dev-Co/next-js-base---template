import clsx from 'clsx';

// * Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// * Component: Container
export default function SimpleContainer({ children, className }: IProps) {
  // * Render
  return (
    <div className={clsx('relative mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
