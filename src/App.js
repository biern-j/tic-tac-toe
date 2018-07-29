import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import TocTacToi from "./Components/Toc-Tac-Toe";


const App = () =>
        <div>
            <img src={logo}/>
          <TocTacToi />
        </div>;


export default App;
