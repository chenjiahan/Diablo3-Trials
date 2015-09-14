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
            questions: [],
            correctAnswer: []
        }
    }

    getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    generateQuestions(difficulty) {
        const questions = data[difficulty];
        const len = questions.length;
        const QUESTION_NUM = 10;

        //随机选择10道题目
        let randomNumbers = [];
        let random;
        let result = [];
        while(randomNumbers.length < QUESTION_NUM) {
            do {
                random = this.getRandom(len);
            } while (randomNumbers.indexOf(random) !== -1);
            randomNumbers.push(random);
        }
        for(let i = 0; i < QUESTION_NUM; i++) {
            result.push(questions[randomNumbers[i]]);
        }

        //打乱选项并保存正确选项
        let correctAnswer = [];
        let options;
        let temp;
        for(let i = 0; i < QUESTION_NUM; i++) {
            options = result[i].options;
            random = this.getRandom(options.length);
            correctAnswer.push(random);

            //switch
            temp = options[random];
            options[random] = options[0];
            options[0] = temp;
        }
        this.setState({
            questions,
            correctAnswer
        });
    }

    handleChoose(difficulty) {
        this.generateQuestions(difficulty);
        this.setState({
            difficulty,
            show: 'questions'
        });
    }

    render() {
        switch (this.state.show) {
            case 'choose':
                return (
                    <Choose handleChoose={this.handleChoose.bind(this)} />
                );
            case 'questions':
                return (
                    <Questions
                        questions={this.state.questions}
                        diffculty={this.state.difficulty}
                        correctAnswer={this.state.correctAnswer}
                        />
                );
        }
    }
}

export default Controller;