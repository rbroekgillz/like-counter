import React from 'react';
import logo from './logo.svg';
import './App.css';

import LikeCounter from "./components/LikeCounter";

function App() {
    return (
        <div className="App">

            <main>
                <h1>LikeCounter</h1>
                <LikeCounter/>
            </main>
        </div>
    );
}

export default App;
