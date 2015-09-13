import React, { Component, PropTypes } from 'react';
import './index.scss';

class Choose extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const type = ['普 通', '困 难', '专 家', '大 师', '折 磨'];
        const buttons = type.map(function(value){
           return <div className="choose-btn"><span>{value}</span></div>
        });

        return (
            <div className="choose-container">
                <img src="img/logo.png" className="choose-logo"/>
                <h1 className="choose-title">暗黑3达人测验</h1>
                {buttons}
            </div>
        )
    }
}

export default Choose;