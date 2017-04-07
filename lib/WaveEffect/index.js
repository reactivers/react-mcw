'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../index.scss');

var _generateId = require('../utils/generateId');

var _generateId2 = _interopRequireDefault(_generateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WaveEffect = function (_React$Component) {
    _inherits(WaveEffect, _React$Component);

    function WaveEffect() {
        _classCallCheck(this, WaveEffect);

        return _possibleConstructorReturn(this, (WaveEffect.__proto__ || Object.getPrototypeOf(WaveEffect)).apply(this, arguments));
    }

    _createClass(WaveEffect, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.rootId = (0, _generateId2.default)();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var elements = document.getElementById(this.rootId);
            elements.addEventListener("mousedown", this.handleMouseDown.bind(this));
            elements.addEventListener("mouseup", this.handleMouseUp.bind(this));
            elements.addEventListener("mouseleave", this.handleMouseUp.bind(this));
        }
    }, {
        key: 'handleMouseDown',
        value: function handleMouseDown(event) {
            if (event.target.id === this.rootId) {
                this.id = (0, _generateId2.default)();
                event.target.style.position = "relative";
                event.target.style.overflow = "hidden";
                var wave = document.createElement('div');
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

                var width = event.target.getBoundingClientRect().width;
                var height = event.target.getBoundingClientRect().height;

                var x = event.offsetX;
                var y = event.offsetY;

                if (y > height / 2) {
                    if (x > width / 2) {
                        width = Math.sqrt(x * x + y * y);
                    } else {
                        x = width - x;
                        width = Math.sqrt(x * x + y * y);
                    }
                } else {
                    y = height - y;
                    if (x > width / 2) {
                        width = Math.sqrt(x * x + y * y);
                    } else {
                        x = width - x;
                        width = Math.sqrt(x * x + y * y);
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
    }, {
        key: 'handleMouseUp',
        value: function handleMouseUp(event) {
            var wave = document.getElementById('wave' + this.id);
            if (!!wave) {
                var width = event.target.getBoundingClientRect().width;
                var height = event.target.getBoundingClientRect().height;

                var x = event.offsetX;
                var y = event.offsetY;

                if (y > height / 2) {
                    if (x > width / 2) {
                        width = Math.sqrt(x * x + y * y);
                    } else {
                        x = width - x;
                        width = Math.sqrt(x * x + y * y);
                    }
                } else {
                    y = height - y;
                    if (x > width / 2) {
                        width = Math.sqrt(x * x + y * y);
                    } else {
                        x = width - x;
                        width = Math.sqrt(x * x + y * y);
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
                setTimeout(function () {
                    return !!wave.parentElement && wave.parentElement.removeChild(wave);
                }, 1200);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.cloneElement(this.props.children, {
                id: this.rootId
            });
        }
    }]);

    return WaveEffect;
}(_react2.default.Component);

exports.default = WaveEffect;


WaveEffect.propTypes = {
    light: _react.PropTypes.bool
};