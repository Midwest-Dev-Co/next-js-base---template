import clsx from 'clsx';

// * Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// * Component: Bubble
export default function Bubble({ children, className }: IProps) {
  // * Render
  return (
    <div
      className={clsx(
        'flex items-center font-medium text-xs xl:text-sm justify-center py-1.5 px-3 rounded-full',
        className,
      )}
    >
      {children}
    </div>
  );
}
