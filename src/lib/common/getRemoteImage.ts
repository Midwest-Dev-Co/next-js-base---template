import { getPlaiceholder } from 'plaiceholder';
import { baseBlur } from './baseBlur';

export default async function getRemoteImage(src: string) {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer()),
    );

    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (error) {
    console.error(error);
    return baseBlur;
  }
}
