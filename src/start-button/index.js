import React, { Component } from 'react';
import './index.scss';
import Controller from '../controller';

class StartButton extends Component {
    constructor(props) {
        super(props);
    }

    start() {
        React.render(
            <Controller />,
            document.getElementById('app')
        );
    }

    render() {
        return (
            <div className="btn start-btn zoom-enter" onClick={this.start}>
                <span>开 始</span>
            </div>
        )
    }
}

export default StartButton;