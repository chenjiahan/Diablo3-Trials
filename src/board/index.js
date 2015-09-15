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
                <span>你的成绩为{this.props.grade}分</span>
                <div className="btn">继续挑战</div>
            </Rodal>
        )
    }
}

export default Board;