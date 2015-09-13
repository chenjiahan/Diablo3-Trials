import React, { Component } from 'react';
import './index.scss';
import Choose from '../choose';

class Controller extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showChoose: true,
            showQuestions: false
        }
    }

    handleChoose(index) {
        console.log(index);
    }

    render() {
        return (
            <Choose handleChoose={this.handleChoose} />
        )
    }
}

export default Controller;