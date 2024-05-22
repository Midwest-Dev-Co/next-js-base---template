import Image, { ImageProps } from 'next/image';

type ConditionalProps =
  | { fill: true }
  | { fill?: false; width: number; height: number };

type LazyImageProps = ConditionalProps &
  ImageProps & {
    blur?: boolean;
  };
/**
 * LazyLocalImage is a component that loads images lazily with an optional blur effect.
 *
 * @param {Object} props - The properties for the LazyLocalImage component.
 * @param {Object} props.src - The source of the image. Must be a static import.
 * @param {string} props.alt - The alt text for the image.
 * @param {number} [props.width] - The width of the image. Required if `fill` is false.
 * @param {number} [props.height] - The height of the image. Required if `fill` is false.
 * @param {boolean} [props.blur=true] - Whether to apply a blur effect while the image is loading.
 * @param {boolean} [props.fill=false] - Whether the image should fill its container.
 * @param {string} [props.sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'] - The sizes attribute for responsive images.
 *
 * @throws Will throw an error if `src` is not a static import.
 *
 * @returns {JSX.Element} The LazyLocalImage component.
 */
export default function LazyImageLocal({
  src,
  alt,
  width,
  height,
  blur = true,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...rest
}: LazyImageProps): JSX.Element {
  if (typeof src !== 'object') {
    throw new Error('src must be a static import');
  }

  return (
    <Image
      src={src}
      alt={alt}
      placeholder={blur ? 'blur' : 'empty'}
      priority={false}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill ? fill : undefined}
      loading="lazy"
      sizes={sizes}
      {...rest}
    />
  );
}
