'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../docs/index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WaveEffect = function (_React$Component) {
    _inherits(WaveEffect, _React$Component);

    function WaveEffect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WaveEffect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WaveEffect.__proto__ || Object.getPrototypeOf(WaveEffect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WaveEffect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.oldMouseDown = document.onmousedown;
            this.oldMouseUp = document.onmouseup;

            document.onmousedown = function (e) {
                if (e.target.classList.value.indexOf("wave-effect") > -1) {
                    this.setState({ active: true });
                    e.target.style.position = "relative";
                    var wave = document.createElement('div');
                    wave.style.position = "absolute";
                    wave.style.left = e.offsetX + 'px';
                    wave.style.top = e.offsetY + 'px';
                    wave.id = "temp-wave";
                    wave.className = "rmd-wave-effect";

                    e.target.appendChild(wave);
                }
                this.oldMouseDown && this.oldMouseDown(e);
            }.bind(this);

            document.onmouseup = function (e) {

                if (this.state.active) {
                    this.setState({ active: false });
                    var wave = document.querySelector('.rmd-wave-effect');
                    wave.className = "rmd-wave-effect-fade-out";
                    setTimeout(function () {
                        return wave.parentElement.removeChild(wave);
                    }, 1000);
                }
                this.oldMouseUp && this.oldMouseUp(e);
            }.bind(this);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return WaveEffect;
}(_react2.default.Component);

exports.default = WaveEffect;