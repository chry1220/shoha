import React from 'react';
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from "./containers";
import {CTA, Brand, Navbar} from "./components";
import './App.css'
import './index.css'
import Like from './containers/features/Like';

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Like />
            {/* <Features/> */}
            <Brand/>
            {/* <WhatGPT3/> */}
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    );
}

export default App;
