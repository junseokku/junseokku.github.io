module.exports = {
    siteMetadata: {
        title: `Jun.Dev`,
        description: `My Blog for record to study`,
        author: `Jun`,
        siteUrl: `https://junseokku.github.io/`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        `gatsby-remark-autolink-headers`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://junseokku.github.io/',
                stripQueryString: true,
            },
        },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: ['auto', 'webp'],
                    quality: 100,
                    placeholder: 'blurred',
                },
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-smartypants',
                        options: {
                            dashes: 'oldschool',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 768,
                            quality: 100,
                            withWebp: true,
                        },
                    },
                    {
                        resolve: `gatsby-source-filesystem`,
                        options: {
                            path: `${__dirname}/src/pages`,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {},
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow',
                        },
                    },
                ],
            },
        },
    ],
};
