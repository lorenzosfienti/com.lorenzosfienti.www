export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Lorenzo Sfienti',
    subtitle: 'AWS, Terraform, Wordpress',
    description: '',
    image: {
        src: '/preview.jpeg',
        alt: 'Lorenzo Sfienti - AWS, Terraform, Wordpress'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
    ],
    socialLinks: [
    ],
    hero: {
        title: 'Welcome to My Digital Hub!',
        text: "I'm Lorenzo Sfienti, a cloud solutions architect specializing in AWS, Terraform, and WordPress development. I’m passionate about collaboration, cloud-native technologies, and crafting intuitive, scalable solutions. My approach combines thorough research, aesthetics, and a deep understanding of DevOps and Infrastructure as Code to drive exceptional products. Whether it's optimizing cloud environments, automating workflows, or building websites, I aim to deliver high-quality results. Feel free to explore my projects on <a href='' target='_blank'>GitHub</a>",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
