import React, { Component, PropTypes } from 'react';
import './index.scss';

class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = {
            height: window.innerHeight
        }

        return (
            <div className="loading-container" style={style}>

            </div>
        )
    }
}

export default Loading;