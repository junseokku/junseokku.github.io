import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import GlobalStyle from './GlobalStyle';
import Footer from './Footer';
import Header from 'components/common/Header';

type TemplateProps = {
    title: string;
    description: string;
    url: string;
    children: ReactNode;
};

const Template: FunctionComponent<TemplateProps> = function ({
    title,
    description,
    url,
    children,
}) {
    return (
        <Container>
            <Helmet>
                <title>{title}</title>

                <meta name="description" content={description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html;charset=UTF-8"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:site_name" content={title} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content="@사용자이름" />
                <meta name="twitter:creator" content="@사용자이름" />

                <html lang="ko" />
            </Helmet>

            <GlobalStyle />
            <Header title={title} />
            <ChildrenWrapper>{children}</ChildrenWrapper>
            <Footer />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const ChildrenWrapper = styled.div`
    width: 1024px;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export default Template;
