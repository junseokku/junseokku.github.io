import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type HeaderProps = {
    title: string;
};

const Header: FunctionComponent<HeaderProps> = function ({ title }) {
    return (
        <Background>
            <Wrapper>
                <MainTitle to="/">{title}</MainTitle>
                <Menu>
                    <SubTitle to="/about">About</SubTitle>
                    <SubTitle to="/">Posts</SubTitle>
                </Menu>
            </Wrapper>
        </Background>
    );
};

const Background = styled.div`
    position: sticky;
    width: 100%;
    background-color: rgb(255, 255, 255);
    color: #000000;
    box-shadow: 0px 2px 5px 0px rgb(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    margin: 1.3rem auto;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;
`;

const MainTitle = styled(Link)`
    font-size: 40px;
    font-weight: 900;
    margin: 0px 10px;
`;

const SubTitle = styled(Link)`
    font-size: 20px;
    font-weight: 500;
    margin: 0px 10px;
    color: rgba(0, 0, 0, 0.5);
`;

export default Header;
