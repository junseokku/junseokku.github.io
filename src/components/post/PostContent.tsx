import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import 'github-markdown-css/github-markdown-light.css';

interface PostContentProps {
    html: string;
}

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
    return (
        <MarkdownRenderer
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

const MarkdownRenderer = styled.div`
    // Renderer Style
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
    word-break: break-all;
`;

export default PostContent;
