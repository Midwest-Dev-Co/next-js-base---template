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
