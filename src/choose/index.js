import React, { Component, PropTypes } from 'react';
import './index.scss';

class Choose extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const type = ['普 通', '困 难', '专 家', '大 师', '折 磨'];
        const buttons = type.map(function(value,index) {
            const delay = {
                animationDelay: index * 100 + 'ms',
                WebkitAnimationDelay: index * 100 + 'ms'
            }
            return (
               <div
                   key={index}
                   className="btn zoom-enter"
                   onClick={this.props.handleChoose.bind(this,index)}
                   style={delay}
                   >
                   <span>{value}</span>
               </div>
            )
        }.bind(this));

        return (
            <div className="choose-container">
                <img src="http://7xlrkz.com1.z0.glb.clouddn.com/logo.png" className="choose-logo"/>
                <h1 className="choose-title">暗黑3达人测验</h1>
                {buttons}
            </div>
        )
    }
}

export default Choose;