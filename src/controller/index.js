import React, { Component } from 'react';
import './index.scss';
import Choose from '../choose';
import Questions from '../questions';

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