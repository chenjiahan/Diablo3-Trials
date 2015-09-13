import React, { Component, PropTypes } from 'react';
import './index.scss';
import Choose from './choose';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showChoose: true,
            showQuestions: false
        }
    }

    handleChoose(index) {
        console.log(index);
    }

    render() {
        return (
            <Choose handleChoose={this.handleChoose} />
        )
    }
}

class StartButton extends Component {
    constructor(props) {
        super(props);
    }

    start() {
        React.render(
            <App />,
            document.getElementById('app')
        );
    }

    render() {
        return (
            <div className="btn begin-btn" onClick={this.start}>
                <span>开 始</span>
            </div>
        )
    }
}

window.onload = function() {
    React.render(
        <StartButton />,
        document.getElementsByClassName('loading-container')[0]
    );
}