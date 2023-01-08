import React, { FunctionComponent, ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

export type CategoryListProps = {
    selectedCategory: string;
    categoryList: {
        [key: string]: number;
    };
};

type CategoryItemProps = {
    active: boolean;
};

type GatsbyLinkProps = {
    children: ReactNode;
    className?: string;
    to: string;
} & CategoryItemProps;

const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1024px;
    margin: 20px auto 0;
    padding: 1.5rem;
    border: 1px rgba(0, 0, 0, 0.1) solid;
    border-radius: 1rem;

    @media (max-width: 1024px) {
        width: 100%;
        margin-top: 50px;
        padding: 0 20px;
    }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
    <Link {...props} />
))<CategoryItemProps>`
    margin-right: 15px;
    padding: 7px;
    font-size: 15px;
    font-weight: ${({ active }) => (active ? '700' : '400')};
    color: ${({ active }) => (active ? 'black' : '#828282')};
    cursor: pointer;
    border-radius: 10px;

    &:last-of-type {
        margin-right: 0;
    }

    :hover {
        color: black;
    }

    @media (max-width: 1024px) {
        font-size: 15px;
    }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({
    selectedCategory,
    categoryList,
}) {
    return (
        <CategoryListWrapper>
            {Object.entries(categoryList).map(([name, count]) => (
                <CategoryItem
                    to={`/?category=${name}`}
                    active={name === selectedCategory}
                    key={name}
                >
                    {name} ({count})
                </CategoryItem>
            ))}
        </CategoryListWrapper>
    );
};

export default CategoryList;
