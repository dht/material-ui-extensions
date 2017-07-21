import React from 'react';
import './App.scss';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App-container">
            <h1>material-ui extensions</h1>
            <h2>Drawer</h2>
            <ul>
                <li>
                    <a href="#/drawer/left/fixed">left fixed</a>
                </li>
                <li>
                    <a href="#/drawer/right/fixed">right fixed</a>
                </li>
                <li>
                    <a href="#/drawer/left/flex">left flex</a>
                </li>
                <li>
                    <a href="#/drawer/right/flex">right flex</a>
                </li>
            </ul>
        </div>
    }
}

