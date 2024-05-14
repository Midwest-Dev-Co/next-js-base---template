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
        'px-6 pb-24 sm:pb-32 max-w-2xl',
        isCentered ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {subtitle && (
        <p
          className={cn(
            `text-base font-semibold leading-7`,
            color === 'blue' && 'text-blue-600',
            color === 'purple' && 'text-purple-600',
            color === 'green' && 'text-green-600',
            color === 'yellow' && 'text-yellow-600',
            color === 'red' && 'text-red-600',
            color === 'gray' && 'text-gray-600',
            color === 'white' && 'text-white',
            color === 'black' && 'text-black',
            color === 'slate' && 'text-slate-600',
            color === 'zinc' && 'text-zinc-600',
            color === 'orange' && 'text-orange-600',
            color === 'teal' && 'text-teal-600',
            color === 'cyan' && 'text-cyan-600',
            color === 'pink' && 'text-pink-600',
            color === 'indigo' && 'text-indigo-600',
            color === 'violet' && 'text-violet-600',
            color === 'fuchsia' && 'text-fuchsia-600',
            color === 'rose' && 'text-rose-600',
            color === 'emerald' && 'text-emerald-600',
            color === 'lime' && 'text-lime-600',
            color === 'amber' && 'text-amber-600',
            color === 'sky' && 'text-sky-600',
            color === 'mint' && 'text-mint-600',
            color === 'royal' && 'text-royal-600',
          )}
        >
          {subtitle}
        </p>
      )}
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </header>
  );
}
