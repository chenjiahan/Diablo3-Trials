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

    handleChoose() {

    }

    render() {
        return (
            <Choose handleChoose={this.handleChoose} />
        )
    }
}


window.onload = function() {

    let app = document.getElementById('app');
    let loadingArea = document.getElementsByClassName('loading-info')[0];

    loadingArea.innerHTML = '开始游戏';

    //React.render(
    //    <App />,
    //    app
    //);
}