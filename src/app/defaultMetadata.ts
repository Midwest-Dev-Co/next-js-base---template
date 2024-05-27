import { Metadata } from 'next';

const title = 'TSKSLOGAN | ' + process.env.NEXT_PUBLIC_COMPANY_NAME;
const description = 'TSKDESCRIPTION';
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL!;

const images = [
    {
        url: '/static/favicon/maskable_icon.png',
        alt: `${process.env.NEXT_PUBLIC_COMPANY_NAME} Maskable Logo`,
        width: 512,
        height: 512,
    },
    // {
    //   url: '/static/brand/logo-pattern.jpg',
    //   alt: 'TSK Brand Pattern',
    //   width: 3840,
    //   height: 2160,
    // },
    // {
    //   url: '/static/brand/og-facebook.jpg',
    //   alt: 'TSK Facebook Cover',
    //   width: 2460,
    //   height: 1110,
    // },
    // {
    //   url: '/static/brand/og-twitter.jpg',
    //   alt: 'TSK Twitter Cover',
    //   width: 4500,
    //   height: 1500,
    // },
];

export const defaultMetadata: Metadata = {
    title: {
        template: `%s | ${title}`,
        default: title,
    },
    description,
    applicationName: title,
    creator: 'Midwest Dev Co, LLC',
    assets: '/static',
    metadataBase: new URL(baseUrl),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/',
        },
    },
    manifest: '/manifest.json',
    keywords: [
        // TODO: General Keywords
        // TODO: Long-tail keywords
    ],
    bookmarks: [baseUrl + '/'],
    openGraph: {
        type: 'website',
        siteName: process.env.NEXT_PUBLIC_COMPANY_NAME!,
        title,
        description,
        url: baseUrl,
        images,
        locale: 'en_US',
        countryName: 'United States',
        emails: [process.env.NEXT_PUBLIC_CONTACT_EMAIL!],
        ttl: 60 * 60 * 24 * 7, // 1 week
    },
    icons: {
        icon: [
            { url: '/static/favicon/maskable_icon.png' },
            new URL('/static/favicon/maskable_icon.png', baseUrl).toString(),
        ],
        apple: '/static/favicon/apple-icon.png',
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   creator: '@midwestdevco',
    //   title,
    //   description,
    //   images,
    // },
};
