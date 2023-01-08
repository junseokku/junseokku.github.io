import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
    html: string;
}

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
    return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

const MarkdownRenderer = styled.div`
    // Renderer Style
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
    word-break: break-all;

    a {
        color: #4183c4;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    p,
    blockquote,
    ul,
    ol,
    dl,
    table,
    pre {
        margin: 15px 0;
    }

    ul,
    ol {
        padding-left: 30px;
    }

    h1 {
        border-bottom: 1px solid #ddd;
        color: #000;
        font-size: 2.5em;
    }

    h2 {
        border-bottom: 1px solid #eee;
        color: #000;
        font-size: 2em;
    }

    h3 {
        font-size: 1.5em;
    }

    h4 {
        font-size: 1.2em;
    }

    h5 {
        font-size: 1em;
    }

    h6 {
        color: #777;
        font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: bold;
        line-height: 1.7;
        margin: 1em 0 15px 0;
    }

    h1 + p,
    h2 + p,
    h3 + p {
        margin-top: 10px;
    }

    img {
        max-width: 100%;
    }

    code[class*='language-'],
    pre[class*='language-'] {
        background-color: #f8f8f8;
        border-radius: 3px;
        border: 1px solid #ddd;
        font-family: Consolas, 'Liberation Mono', Courier, monospace;
        font-size: 12px;
        margin: 0 2px;
        padding: 0 5px;
        white-space: pre;
    }

    pre code[class*='language-'] {
        border: none;
        margin: 0;
        padding: 0;
        white-space: pre;
    }

    blockquote {
        margin: 0;
        padding: 0 1em;
        color: #57606a;
        border-left: 0.25em solid #d0d7de;
    }

    blockquote > :first-child {
        margin-top: 0;
    }

    blockquote > :last-child {
        margin-bottom: 0;
    }
`;

export default PostContent;
