import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { PostPageItemType } from 'types/PostItem.types';
import Template from 'components/common/Template';
import PostHead from 'components/post/PostHead';
import PostContent from 'components/post/PostContent';
import styled from '@emotion/styled';

type PostTemplateProps = {
    data: {
        allMarkdownRemark: {
            edges: PostPageItemType[];
        };
        site: {
            siteMetadata: {
                title: string;
                description: string;
                siteUrl: string;
            };
        };
    };
    location: {
        href: string;
    };
};

const PostWrapper = styled.div`
    padding: 50px 30px 0;
    display: flex;
    flex-direction: column;
`;

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
    data: {
        allMarkdownRemark: { edges },
        site: { siteMetadata },
    },
    location: { href },
}) {
    const {
        node: {
            html,
            frontmatter: { title, summary, date, categories },
        },
    } = edges[0];

    return (
        <Template
            title={siteMetadata.title}
            description={siteMetadata.description}
            url={siteMetadata.siteUrl}
        >
            <PostWrapper>
                <PostHead title={title} date={date} categories={categories} />
                <PostContent html={html} />
            </PostWrapper>
        </Template>
    );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
    query queryMarkdownDataBySlug($slug: String) {
        allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        summary
                        date(formatString: "YYYY.MM.DD.")
                        categories
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
    }
`;
