import React, { Component, PropTypes } from 'react';
import './index.scss';

class Questions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 0,
            answerList: [],
            showAnswer: -1
        }
    }

    handleChoose(index) {
        //显示答案时,不响应点击事件
        if(this.state.showAnswer !== -1) return;

        //显示答案
        const correct = this.props.correctAnswer[this.state.currentQuestion];
        this.setState({
            showAnswer: correct
        });

        //选错答案后,跳转延迟更长
        let delay = correct === index ? 500 : 1500;
        setTimeout(() => {
            this.nextQuestion(index);
        }, delay)
    }

    nextQuestion(index) {
        this.setState({
            showAnswer: -1
        });
        const current = this.state.currentQuestion;
        this.state.answerList[current] = index;
        if(current < 9) {
            this.setState({
                currentQuestion: current + 1
            });
        } else {
            this.endAnswer();
        }
    }

    endAnswer() {
        const answerList = this.state.answerList;
        const correctAnswer = this.props.correctAnswer;
        let grade = 0;
        for(let i = 0; i < 10; i++) {
            if(answerList[i] === correctAnswer[i]) {
                grade += 10;
            }
        }
        this.state = {
            currentQuestion: 0,
            answerList: []
        };
        this.props.showGradeBoard(grade);
    }

    render() {
        const current = this.state.currentQuestion;
        const questions = this.props.questions[current];

        const options = questions.options.map(function(value, index) {
            const delay = {
                animationDelay: index * 100 + 'ms',
                WebkitAnimationDelay: index * 100 + 'ms'
            };
            let className;
            if(index === this.state.showAnswer) {
                className = 'btn zoom-enter btn-correct'
            } else {
                className = 'btn zoom-enter'
            }
            return (
                <div
                    key={index}
                    className={className}
                    onClick={this.handleChoose.bind(this, index)}
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
                <div className="q-question door-enter">
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