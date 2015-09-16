import React, { Component } from 'react';
import Rodal from './rodal';
import './index.scss';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Rodal visible={true}>
                <span className="board-text">答题结束</span>
                <span className="board-text">你的成绩为</span>
                <span className="board-grade">{this.props.grade}分</span>
                <div className="btn board-btn" onClick={this.props.restart}><span>继续挑战</span></div>
            </Rodal>
        )
    }
}

export default Board;