import { getPlaiceholder } from 'plaiceholder';
import { baseUrl } from './utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const baseBlur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nGNgYGBIZWBgqGJgYPBhYGBQAwALHgFSVljFWAAAAABJRU5ErkJggg==';

export async function getRemoteImage(src: string) {
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

export async function getLocalImage(staticImport: StaticImport) {
  try {
    const src =
      'default' in staticImport ? staticImport.default.src : staticImport.src;

    const buffer = await fetch(`${baseUrl}${src}`).then(async (res) =>
      Buffer.from(await res.arrayBuffer()),
    );

    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (error) {
    console.log(error);
    return baseUrl;
  }
}
