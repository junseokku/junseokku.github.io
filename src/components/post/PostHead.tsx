import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type PostHeadProps = {
    title: string;
    date: string;
    categories: string[];
};

const TitleDateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TitleWrapper = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 0.7rem;
`;

const CategoriesDateWrapper = styled.span`
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
`;

const PostHead: FunctionComponent<PostHeadProps> = function ({
    title,
    date,
    categories,
}) {
    return (
        <div>
            <TitleDateWrapper>
                <TitleWrapper>{title}</TitleWrapper>
                <CategoriesDateWrapper>
                    {categories}, {date}
                </CategoriesDateWrapper>
            </TitleDateWrapper>
        </div>
    );
};

export default PostHead;
