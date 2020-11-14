import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Budget from './components/Budget';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        margin: 0;
        font-size: 14px;
        color: #333;
    }
`;

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Budget />
        </React.Fragment>
    );
}

export default App;
