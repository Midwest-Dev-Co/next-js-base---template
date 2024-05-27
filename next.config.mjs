import { withPayload } from '@payloadcms/next/withPayload';
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'source.unsplash.com'],
        // remotePatterns: [
        //   {
        //     hostname: 'images.unsplash.com',
        //     pathname: '/.*',
        //   },
        //   {
        //     hostname: 'source.unsplash.com',
        //     pathname: '/.*',
        //   },
        // ],
    }, // https://nextjs.org/docs/pages/api-reference/next-config-js/images
    reactStrictMode: true,
    poweredByHeader: false,
};

export default withPayload(nextConfig);
