import React, { Component, PropTypes } from 'react';
import './index.scss';

class Questions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 1,
            chosenAnswer: null,
            answerList: []
        }
    }

    switch() {
        this.setState({
            answer: ''
        });
    }

    chooseAnswer() {

    }

    submit() {

    }

    render() {
        return (
            <div className="q-container">
                <div className="q-info">
                    <span>第 {this.state.currentQuestion} 题 / 共 10 题</span>
                </div>
                <div className="q-question">

                </div>
                <div className="q-options">

                </div>
                <div className="q-toolbar">
                    <span className="q-prev" onClick={this.switch.bind(this,'prev')}>上一题</span>
                    <span className="q-submit" onClick={this.submit.bind(this)}>直接提交</span>
                    <span className="q-next" onClick={this.switch.bind(this)}>下一题</span>
                </div>
            </div>
        )
    }
}

export default Questions;