import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Footer: FunctionComponent = () => {
    return <FooterWrapper>© 2022 Jun, Powered By Gatsby.</FooterWrapper>;
};

const FooterWrapper = styled.footer`
    display: grid;
    place-items: center;
    margin-top: auto;
    padding: 50px 0;
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
`;

export default Footer;
