import React, { Component, PropTypes } from 'react';
import './index.scss';

class Questions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 0,
            answerList: []
        }
    }

    nextQuestion(index) {
        const current = this.state.currentQuestion;
        this.state.answerList[current] = index;
        if(current < 9) {
            this.setState({
                currentQuestion: current + 1
            });
        } else {
            console.log(this.state.answerList);
            this.submit();
        }
    }

    submit() {
        console.log(this.state.answerList);
        console.log(this.props.correctAnswer);
    }

    render() {
        const current = this.state.currentQuestion;
        const questions = this.props.questions[current];

        const options = questions.options.map(function(value, index) {
            const delay = {
                animationDelay: index * 100 + 'ms',
                WebkitAnimationDelay: index * 100 + 'ms'
            };
            return (
                <div
                    key={index}
                    className="btn zoom-enter"
                    onClick={this.nextQuestion.bind(this, index)}
                    style={delay}
                    >
                    <span>{value}</span>
                </div>
            )
        }.bind(this));

        return (
            <div className="q-container">
                <div className="q-info">
                    <span>第 {current + 1} 题 / 共 10 题</span>
                </div>
                <div className="q-question">
                    <span>{questions.question}</span>
                </div>
                <div className="q-options">
                    {options}
                </div>
            </div>
        )
    }
}

export default Questions;