import React, { Component, PropTypes } from 'react';
import './index.scss';

class Questions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 1
        }
    }

    prev() {

    }

    next() {

    }

    submit() {

    }

    render() {
        return (
            <div>
                <div className="q-info">
                    <span>第 {this.state.currentQuestion} 题 / 共 10 题</span>
                </div>
                <div className="q-">

                </div>
                <div className="q-nav">
                    <span className="q-prev">上一题</span>
                    <span className="q-submit">直接提交</span>
                    <span className="q-next">下一题</span>
                </div>
            </div>
        )
    }
}

export default Questions;