import React, { Component, PropTypes } from 'react';
import './index.scss';

import Loading from './loading';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Loading />
        )
    }
}

React.render(
    <App />,
    document.getElementById('app')
);