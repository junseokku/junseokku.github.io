import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Template from 'components/common/Template';

type AboutPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
                siteUrl: string;
            };
        };
        file: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
            publicURL: string;
        };
    };
};

const About: FunctionComponent<AboutPageProps> = function ({
    data: {
        site: {
            siteMetadata: { title, description, siteUrl },
        },
        file: {
            childImageSharp: { gatsbyImageData },
            publicURL,
        },
    },
}) {
    return (
        <Template title={title} description={description} url={siteUrl}>
            <MyInfoWrapper>
                <Title>About Me</Title>
                <Horizen />
                <IntroduceText>
                    <div>프론트엔드를 공부하고 있는 개발자입니다</div>
                    <div>TypeScript, React를 중심으로 공부중입니다.</div>
                    <div>
                        블로그는 공부한 내용과 개발 중 문제를 기록할 목적으로
                        만들었습니다.
                    </div>
                </IntroduceText>
            </MyInfoWrapper>
        </Template>
    );
};

const MyInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto 0;
    padding: 1.5rem;
    border: 1px rgba(0, 0, 0, 0.1) solid;
    border-radius: 1rem;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
`;

const Horizen = styled.hr`
    width: 80%;
    border: 0px;
    border-top: 1px solid #c4c4c4;
    margin: 2rem 0;
`;

const ProfileImage = styled.img`
    border-radius: 2rem;
`;

const IntroduceText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto 1rem;
`;

export default About;

export const getAbout = graphql`
    query getAbout {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        file(name: { eq: "profile-image" }) {
            childImageSharp {
                gatsbyImageData(width: 200, height: 200)
            }
            publicURL
        }
    }
`;
