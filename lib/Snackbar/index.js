'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('@material/snackbar/dist/mdc.snackbar.css');

var _mdc = require('@material/snackbar/dist/mdc.snackbar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 26/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Snackbar = function (_React$PureComponent) {
    _inherits(Snackbar, _React$PureComponent);

    function Snackbar() {
        _classCallCheck(this, Snackbar);

        return _possibleConstructorReturn(this, (Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).apply(this, arguments));
    }

    _createClass(Snackbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.snackbar = new _mdc.MDCSnackbar(document.querySelector('.mdc-snackbar'));
            window.snackbar = this.snackbar;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (nextProps.open) {

                this.snackbar.show({
                    message: nextProps.message,
                    timeout: nextProps.timeout,
                    actionHandler: function actionHandler() {
                        _this2.snackbar.foundation_.cleanup_();_this2.props.onClose();
                    },
                    actionText: nextProps.buttonText,
                    multiline: nextProps.multiline,
                    actionOnBottom: nextProps.buttonOnBottom
                });
                this.snackbar.foundation_.setActionHidden_ = function () {
                    return nextProps.onClose();
                };
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                buttonColor = _props.buttonColor,
                barColor = _props.barColor,
                barTextColor = _props.barTextColor;


            return _react2.default.createElement(
                'div',
                { className: 'mdc-snackbar',
                    style: { backgroundColor: barColor },
                    'aria-live': 'assertive',
                    'aria-atomic': 'true',
                    'aria-hidden': 'true' },
                _react2.default.createElement('div', { className: 'mdc-snackbar__text', style: { color: barTextColor } }),
                _react2.default.createElement(
                    'div',
                    { className: 'mdc-snackbar__action-wrapper' },
                    _react2.default.createElement('button', { type: 'button', style: { color: buttonColor }, className: 'mdc-button mdc-snackbar__action-button' })
                )
            );
        }
    }]);

    return Snackbar;
}(_react2.default.PureComponent);

Snackbar.propTypes = {
    open: _react.PropTypes.bool.isRequired,
    message: _react.PropTypes.string.isRequired,
    multiline: _react.PropTypes.bool,
    buttonOnBottom: _react.PropTypes.bool,
    buttonText: _react.PropTypes.string,
    buttonColor: _react.PropTypes.string,
    barColor: _react.PropTypes.string,
    barTextColor: _react.PropTypes.string,
    onClose: _react.PropTypes.func,
    timeout: _react.PropTypes.number
};
exports.default = Snackbar;