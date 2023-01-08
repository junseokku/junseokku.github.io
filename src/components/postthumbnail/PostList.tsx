import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import { PostListItemType } from 'types/PostItem.types';
import useInfiniteScroll, {
    useInfiniteScrollType,
} from 'hooks/useInfiniteScroll';

type PostListProps = {
    selectedCategory: string;
    posts: PostListItemType[];
};

const PostList: FunctionComponent<PostListProps> = function ({
    selectedCategory,
    posts,
}) {
    const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
        selectedCategory,
        posts,
    );

    return (
        <PostListWrapper ref={containerRef}>
            {postList.map(
                ({
                    node: {
                        id,
                        fields: { slug },
                        frontmatter,
                    },
                }: PostListItemType) => (
                    <PostItem {...frontmatter} link={slug} key={id} />
                ),
            )}
        </PostListWrapper>
    );
};

const PostListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding-top: 50px;
`;

export default PostList;
