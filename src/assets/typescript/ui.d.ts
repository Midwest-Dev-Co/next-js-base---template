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
  | 'royal';
