import React, { Component, PropTypes } from 'react';
import './index.scss';
import Choose from './choose';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Choose />
        )
    }
}


window.onload = function() {
    React.render(
        <App />,
        document.getElementById('app')
    );
}