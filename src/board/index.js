import React, { Component } from 'react';
import Rodal from './rodal';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Rodal visible={true}>
                <span>答题结束~</span>
                <span>你的成绩为<span className="board-grade">{this.props.grade}</span>分</span>
                <div className="btn" onClick={this.props.restart}><span>继续挑战</span></div>
            </Rodal>
        )
    }
}

export default Board;