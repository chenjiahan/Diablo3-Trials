import React, { Component, PropTypes } from 'react';
import './rodal.scss';

const propTypes = {
    visible: PropTypes.bool,
    duration: PropTypes.number,
    showMask: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    autoClose: PropTypes.number
};

const defaultProps = {
    visible: false,
    duration: 300,
    showMask: true,
    showCloseButton: true
};

let EVENT_NAME_MAP = {
    transitionend: {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'mozTransitionEnd',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd'
    },

    animationend: {
        'animation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd',
        'MozAnimation': 'mozAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd'
    }
};

let endEvents = [];

//detect events
(() => {
    let testEl = document.createElement('div');
    let style = testEl.style;

    if (!('AnimationEvent' in window)) {
        delete EVENT_NAME_MAP.animationend.animation;
    }

    if (!('TransitionEvent' in window)) {
        delete EVENT_NAME_MAP.transitionend.transition;
    }

    for (let baseEventName in EVENT_NAME_MAP) {
        let baseEvents = EVENT_NAME_MAP[baseEventName];
        for (let styleName in baseEvents) {
            if (styleName in style) {
                endEvents.push(baseEvents[styleName]);
                break;
            }
        }
    }
})();

const TransitionEvents =  {
    addEndEventListener: (node, eventListener) => {
        if (endEvents.length === 0) {
            window.setTimeout(eventListener, 0);
            return;
        }
        endEvents.forEach( endEvent => {
            node.addEventListener(endEvent, eventListener, false);
        });
    },
    removeEndEventListener: (node, eventListener) => {
        if (endEvents.length === 0) {
            return;
        }
        endEvents.forEach( endEvent => {
            node.removeEventListener(endEvent, eventListener, false);
        });
    }
};

class RodalBox extends Component {

    render () {

        const style = {
            animationDuration: this.props.duration + 'ms',
            WebkitAnimationDuration: this.props.duration + 'ms'
        };

        const className = `rodal-box rodal-zoom-${this.props.animationType}`;

        return (
            <div style={style} className={className}>
                {this.props.children}
            </div>
        )
    }
}

class Rodal extends Component {

    constructor (props) {
        super(props);

        this.state = {
            isShow: this.props.visible,
            animationType: this.props.visible ? 'enter' : 'leave'
        };
    }

    componentDidMount () {
        TransitionEvents.addEndEventListener (
            React.findDOMNode(this),
            this.transitionEnd.bind(this)
        );
    }

    componentWillUnmount () {
        TransitionEvents.removeEndEventListener (
            React.findDOMNode(this),
            this.transitionEnd
        );
    }

    componentWillReceiveProps (nextProps) {
        if (!this.props.visible && nextProps.visible) {
            this.fadeIn();
        } else if (this.props.visible && !nextProps.visible) {
            this.fadeOut();
        }
    }

    fadeIn () {
        this.setState({
            isShow: true,
            animationType: 'enter'
        });
    }

    fadeOut () {
        this.setState({
            animationType: 'leave'
        });

        //IE9
        if (endEvents.length === 0) {
            this.setState({
                isShow: false
            });
        }
    }

    transitionEnd (e) {
        const node = React.findDOMNode(this);
        if (e && e.target !== node) {
            return;
        }
        if (this.state.animationType === 'leave') {
            this.setState({
                isShow: false
            });
        }
    }

    render () {

        const style = {
            display: this.state.isShow ? 'block' : 'none',
            animationDuration: this.props.duration + 'ms',
            WebkitAnimationDuration: this.props.duration + 'ms'
        };

        const Mask = this.props.showMask ? <div className="rodal-mask" onClick={this.props.onClose} /> : null;

        const animationType = this.state.animationType;

        const autoClose = this.props.autoClose;
        if ( typeof autoClose === 'number' && animationType === 'enter' ) {
            this.autoClose = setTimeout( function() {
                this.props.onClose();
            }.bind(this), autoClose );
        } else if (this.autoClose !== undefined) {
            clearTimeout(this.autoClose);
        }

        return (
            <div
                ref="rodal"
                style={style}
                className={"rodal rodal-fade-" + animationType}
                tabIndex={-1}
            >
                {Mask}
                <RodalBox {...this.props} animationType={animationType}>
                    {this.props.children}
                </RodalBox>
            </div>
        )
    }
}

Rodal.propTypes = propTypes;
Rodal.defaultProps = defaultProps;

export default Rodal;