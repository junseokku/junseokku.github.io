import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostFrontmatterType } from 'types/PostItem.types';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItem: FunctionComponent<PostItemProps> = function ({
    title,
    date,
    summary,
    link,
}) {
    return (
        <PostItemWrapper to={link}>
            <Title>{title}</Title>
            <Summary>{summary}</Summary>
            <Date>{date}</Date>
        </PostItemWrapper>
    );
};

const PostItemWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    border-radius: 1.5rem;
    padding: 2rem;
    cursor: pointer;

    :hover {
        box-shadow: 2px 2px 7px gray;
        transform: scale(1.005);
        transition: box-shadow 0.3s, transform 0.3s;
    }
`;

const Title = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
`;

const Summary = styled.div`
    display: -webkit-box;
    overflow: hidden;
    margin-top: auto;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 0.4rem;
`;

const Date = styled.div`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
`;

export default PostItem;
