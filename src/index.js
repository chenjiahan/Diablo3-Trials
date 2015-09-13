import React, { Component } from 'react';
import './index.scss';
import StartButton from './start-button';

window.onload = function() {
    React.render(
        <StartButton />,
        document.getElementsByClassName('loading-container')[0]
    );
}