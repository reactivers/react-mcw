'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('@material/button/dist/mdc.button.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _generateId = require('../utils/generateId');

var _generateId2 = _interopRequireDefault(_generateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 24/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Button = function (_React$PureComponent) {
    _inherits(Button, _React$PureComponent);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.buttonId = (0, _generateId2.default)();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                dense = _props.dense,
                compact = _props.compact,
                style = _props.style,
                textColor = _props.textColor,
                buttonColor = _props.buttonColor,
                raised = _props.raised,
                primary = _props.primary,
                accent = _props.accent,
                rest = _objectWithoutProperties(_props, ['className', 'dense', 'compact', 'style', 'textColor', 'buttonColor', 'raised', 'primary', 'accent']);

            var classes = (0, _classnames2.default)("mdc-button", {
                "mdc-button--accent": accent,
                "mdc-button--primary": primary,
                "mdc-button--raised": raised,
                "mdc-button--dense": dense,
                "mdc-button--compact": compact
            }, className);
            var buttonStyle = Object.assign({}, style, { backgroundColor: buttonColor, color: textColor, fontWeight: "bold" });
            return _react2.default.createElement(
                'button',
                _extends({ className: classes, key: this.props.key || this.buttonId, style: buttonStyle }, rest),
                this.props.children
            );
        }
    }]);

    return Button;
}(_react2.default.PureComponent);

Button.propTypes = {
    className: _propTypes2.default.string,
    primary: _propTypes2.default.bool,
    accent: _propTypes2.default.bool,
    textColor: _propTypes2.default.string,
    buttonColor: _propTypes2.default.string,
    style: _propTypes2.default.object,
    raised: _propTypes2.default.bool,
    onClick: _propTypes2.default.func,
    disabled: _propTypes2.default.bool,
    dense: _propTypes2.default.bool,
    compact: _propTypes2.default.bool
};
Button.defaultProps = {
    dense: false,
    compact: false,
    disabled: false
};
exports.default = Button;