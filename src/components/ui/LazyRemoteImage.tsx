import getRemoteImage from '@/lib/common/getRemoteImage';
import Image, { ImageProps } from 'next/image';

interface LazyImageProps extends ImageProps {
  width: number;
  height: number;
  blur?: boolean;
}

// Image loading with blur effect make sure to only use this component for images that are lazy loaded
export default async function LazyRemoteImage({
  src,
  alt,
  width,
  height,
  // Typically only want to disable the blur if dealing with transparent background images
  blur = true,
  ...rest
}: LazyImageProps) {
  if (typeof src !== 'string') {
    throw new Error('src must be a string');
  }

  const imageBlur = await getRemoteImage(src);

  return (
    <Image
      src={src}
      alt={alt}
      placeholder={blur ? 'blur' : 'empty'}
      blurDataURL={imageBlur}
      priority={false}
      width={width}
      height={height}
      loading="lazy"
      {...rest}
    />
  );
}
