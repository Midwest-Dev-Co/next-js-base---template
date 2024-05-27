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
                '2xl:py-18 my-4 py-4 sm:my-6 sm:py-6 md:my-8 md:py-8 lg:my-10 lg:py-12 xl:my-12 xl:py-16 2xl:my-14',
                className
            )}
        >
            {children}
        </section>
    );
}
