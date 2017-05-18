import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss'
import generateId from '../utils/generateId';

export default class WaveEffect extends React.Component {

    componentWillMount() {
        this.rootId = generateId();
    }

    componentDidMount() {
        let elements = document.getElementById(this.rootId);
        elements.addEventListener("mousedown", this.handleMouseDown.bind(this));
        elements.addEventListener("mouseup", this.handleMouseUp.bind(this));
        elements.addEventListener("mouseleave", this.handleMouseUp.bind(this));
    }


    handleMouseDown(event) {
        if (event.target.id === this.rootId) {
            this.id = generateId();
            event.target.style.position = "relative";
            event.target.style.overflow = "hidden";
            let wave = document.createElement('div');
            wave.style.position = "absolute";
            wave.style.overflow = "hidden";
            wave.style.pointerEvents = "none";
            wave.style.left = event.offsetX + 'px';
            wave.style.top = event.offsetY + 'px';
            wave.style.width = "0";
            wave.style.height = "0";
            wave.style.backgroundColor = this.props.light ? "#fff" : "#000";
            wave.style.opacity = "0.3";
            wave.style.borderRadius = "50%";
            wave.id = "wave" + this.id;
            wave.style.transition = "1s";

            let width = event.target.getBoundingClientRect().width;
            let height = event.target.getBoundingClientRect().height;

            let x = event.offsetX;
            let y = event.offsetY;

            if (y > height / 2) {
                if (x > width / 2) {
                    width = Math.sqrt((x * x) + (y * y));
                } else {
                    x = width - x;
                    width = Math.sqrt((x * x) + (y * y));
                }
            } else {
                y = height - y;
                if (x > width / 2) {
                    width = Math.sqrt((x * x) + (y * y));
                } else {
                    x = width - x;
                    width = Math.sqrt((x * x) + (y * y));
                }
            }

            event.target.appendChild(wave);
            setTimeout(function () {
                wave.style.width = width * 2 + 'px';
                wave.style.height = width * 2 + 'px';
                wave.style.marginLeft = -width + "px";
                wave.style.marginTop = -width + "px";
                wave.style.backgroundColor = this.props.light ? "#ddd" : "#aaa";
                wave.style.opacity = "0.3";
                wave.style.borderRadius = "50%";
            }.bind(this), 1);
        }
    }

    handleMouseUp(event) {
        let wave = document.getElementById('wave' + this.id);
        if(!!wave) {
            let width = event.target.getBoundingClientRect().width;
            let height = event.target.getBoundingClientRect().height;

            let x = event.offsetX;
            let y = event.offsetY;

            if (y > height / 2) {
                if (x > width / 2) {
                    width = Math.sqrt((x * x) + (y * y));
                } else {
                    x = width - x;
                    width = Math.sqrt((x * x) + (y * y));
                }
            } else {
                y = height - y;
                if (x > width / 2) {
                    width = Math.sqrt((x * x) + (y * y));
                } else {
                    x = width - x;
                    width = Math.sqrt((x * x) + (y * y));
                }
            }

            wave.style.width = width * 2 + "px";
            wave.style.transition = "1s";
            wave.style.height = width * 2 + "px";
            wave.style.marginLeft = -width + "px";
            wave.style.marginTop = -width + "px";
            wave.style.backgroundColor = "#eee";
            wave.style.opacity = "0";
            wave.style.borderRadius = "50%";
            setTimeout(() => !!wave.parentElement && wave.parentElement.removeChild(wave), 1200);
        }
    }


    render() {
        return React.cloneElement(this.props.children, {
            id: this.rootId
        })
    }
}


WaveEffect.propTypes = {
    light: PropTypes.bool
};
