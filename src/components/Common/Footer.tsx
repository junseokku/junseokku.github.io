import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWraper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWraper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2021 Developer, Powered By Gatsby.
    </FooterWraper>
  )
}

export default Footer