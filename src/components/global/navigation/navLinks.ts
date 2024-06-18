import {
    BarChart,
    PlayCircleIcon,
    PhoneIcon,
    TextCursor,
    Shield,
    Blocks,
    ArrowBigDown,
} from 'lucide-react';

export const resources = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: BarChart,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers',
        href: '#',
        icon: TextCursor,
    },
    {
        name: 'Security',
        description: 'Your customers’ data will be safe and secure',
        href: '#',
        icon: Shield,
    },
    {
        name: 'Integrations',
        description: 'Connect with third-party tools',
        href: '#',
        icon: Blocks,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will convert',
        href: '#',
        icon: ArrowBigDown,
    },
];

export const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    {
        name: 'Contact sales',
        href: 'https://calendly.com/agile-acq/b2b-intro?hide_gdpr_banner=1&primary_color=22c55e',
        icon: PhoneIcon,
    },
];

export const blog = [
    {
        name: 'Top 10 Business Automations to Save You Time in 2023',
        href: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laudantium.',
    },
    // ... TSK
    {
        name: 'All Blog Posts',
        href: '#',
        description:
            'Read our latest blog posts and learn more about business automations and utilizing AI in your work flow',
    },
];
