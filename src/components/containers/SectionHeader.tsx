import { ITailwindColor } from '@/assets/typescript/ui';
import { cn } from '@/lib/utils';

interface IProps {
    title: string;
    subtitle?: string;
    description?: string;
    color?: ITailwindColor;
    isCentered?: boolean;
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    description,
    color = 'blue',
    isCentered = true,
    className,
}: IProps) {
    return (
        <header
            className={cn(
                'max-w-2xl px-6 pb-16 sm:pb-24',
                isCentered ? 'mx-auto text-center' : 'text-left',
                className
            )}
        >
            {subtitle && (
                <p
                    className={cn(
                        `text-base font-semibold leading-7`,
                        color === 'blue' && 'text-blue-700',
                        color === 'purple' && 'text-purple-700',
                        color === 'green' && 'text-green-700',
                        color === 'yellow' && 'text-yellow-700',
                        color === 'red' && 'text-red-700',
                        color === 'gray' && 'text-gray-700',
                        color === 'white' && 'text-white',
                        color === 'black' && 'text-black',
                        color === 'slate' && 'text-slate-700',
                        color === 'zinc' && 'text-zinc-700',
                        color === 'orange' && 'text-orange-700',
                        color === 'teal' && 'text-teal-700',
                        color === 'cyan' && 'text-cyan-700',
                        color === 'pink' && 'text-pink-700',
                        color === 'indigo' && 'text-indigo-700',
                        color === 'violet' && 'text-violet-700',
                        color === 'fuchsia' && 'text-fuchsia-700',
                        color === 'rose' && 'text-rose-700',
                        color === 'emerald' && 'text-emerald-700',
                        color === 'lime' && 'text-lime-700',
                        color === 'amber' && 'text-amber-700',
                        color === 'sky' && 'text-sky-700',
                        color === 'mint' && 'text-mint-700',
                        color === 'royal' && 'text-royal-700'
                    )}
                >
                    {subtitle}
                </p>
            )}
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                {title}
            </h2>
            {description && (
                <p className="mt-6 text-lg leading-8 text-slate-600">
                    {description}
                </p>
            )}
        </header>
    );
}
