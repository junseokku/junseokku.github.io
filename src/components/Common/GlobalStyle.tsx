import React, { FunctionComponent } from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
    @import url('https://fonts.googleapis.com/css2?family=Newsreader&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Gothic A1', sans-serif;
    }

    html,
    body,
    #___gatsby {
        height: 100%;
        overflow: overlay;
    }

    a,
    a:hover {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`;

const GlobalStyle: FunctionComponent = () => {
    return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
