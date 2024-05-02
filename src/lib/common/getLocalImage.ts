import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { getPlaiceholder } from 'plaiceholder';
import baseUrl from './baseUrl';

export default async function getLocalImage(staticImport: StaticImport) {
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
