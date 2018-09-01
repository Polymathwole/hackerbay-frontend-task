import React from 'react';
import logo from '../logo.svg'

const Welcome = () => {
    return (
        <div className="welcome-header">
            <header className="welcome">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="welcome-title">Welcome to React</h1>
            </header>
            <p className="welcome-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
        );
}

export default Welcome;