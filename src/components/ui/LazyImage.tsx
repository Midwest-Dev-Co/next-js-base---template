import { baseBlur } from '@/lib/common/baseBlur';
import getLocalImage from '@/lib/common/getLocalImage';
import getRemoteImage from '@/lib/common/getRemoteImage';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';

interface LazyImageProps extends ImageProps {
  width: number;
  height: number;
  blur?: boolean;
}

// Image loading with blur effect make sure to only use this component for images that are lazy loaded
export default async function LazyImage({
  src,
  alt,
  width,
  height,
  // Typically only want to disable the blur if dealing with transparent background images
  blur = true,
  ...rest
}: LazyImageProps) {
  const imageBlur = await getblur(src);

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

async function getblur(src: string | StaticImport) {
  if (typeof src === 'string') {
    const blur = await getRemoteImage(src);

    return blur;
  } else if (typeof src === 'object') {
    const blur = await getLocalImage(src);

    return blur;
  }

  return baseBlur;
}
