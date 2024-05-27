import { StaticImageData } from 'next/image';

export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TVariant = 'primary' | 'secondary' | 'dark' | 'light';
export type TFill = 'solid' | 'outline' | 'gradient' | 'none';
export type TEffect = 'scale';

export type IconType = React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
>;

export type ITailwindColor =
    | 'blue'
    | 'purple'
    | 'green'
    | 'yellow'
    | 'red'
    | 'gray'
    | 'white'
    | 'black'
    | 'slate'
    | 'zinc'
    | 'orange'
    | 'teal'
    | 'cyan'
    | 'pink'
    | 'indigo'
    | 'violet'
    | 'fuchsia'
    | 'rose'
    | 'emerald'
    | 'lime'
    | 'amber'
    | 'sky'
    | 'mint'
    | 'royal'
    | 'palette-1'
    | 'palette-2'
    | 'palette-3'
    | 'palette-4'
    | 'palette-5'
    | 'palette-6';

export interface IImage {
    name: string;
    href: string;
    src: StaticImageData;
    alt: string;
}
