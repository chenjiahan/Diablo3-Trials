import React, { Component } from 'react';
import './index.scss';
import Choose from '../choose';
import Questions from '../questions';
import data from './data';

class Controller extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: 'choose',
            difficulty: 0,
            questions: []
        }
    }

    generateQuestions(difficulty) {
        const questions = data[difficulty];
        const len = questions.length;
        const QUESTION_NUM = 10;
        let randomNums = [];
        let random;
        let result = [];
        while(randomNums.length < QUESTION_NUM) {
            do {
                random = Math.floor(Math.random() * len);
            } while(randomNums.indexOf(random) !== -1)
            randomNums.push(random);
        }
        for(let i = 0; i < QUESTION_NUM; i++) {
            result.push(questions[randomNums[i]]);
        }
        console.log(result);
        return result;
    }

    handleChoose(difficulty) {
        const questions = this.generateQuestions(difficulty);
        this.setState({
            questions,
            difficulty,
            show: 'questions'
        });
    }

    render() {
        switch (this.state.show) {
            case 'choose':
                return (
                    <Choose handleChoose={this.handleChoose.bind(this)} />
                )
            case 'questions':
                return (
                    <Questions
                        questions={this.state.questions}
                        diffculty={this.state.difficulty}
                        />
                )
        }
    }
}

export default Controller;