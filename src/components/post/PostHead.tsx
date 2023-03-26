import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type PostHeadProps = {
    title: string;
    date: string;
    categories: string[];
};

const PostHead: FunctionComponent<PostHeadProps> = function ({
    title,
    date,
    categories,
}) {
    return (
        <PostHeaderWrapper>
            <TitleDateWrapper>
                <TitleWrapper>{title}</TitleWrapper>
                <CategoriesDateWrapper>
                    {categories}, {date}
                </CategoriesDateWrapper>
            </TitleDateWrapper>
        </PostHeaderWrapper>
    );
};

const PostHeaderWrapper = styled.div`
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const TitleDateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TitleWrapper = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
`;

const CategoriesDateWrapper = styled.span`
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
`;

export default PostHead;
