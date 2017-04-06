'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 01/04/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Badge = function (_React$Component) {
    _inherits(Badge, _React$Component);

    function Badge() {
        _classCallCheck(this, Badge);

        return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    _createClass(Badge, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                iconName = _props.iconName,
                style = _props.style,
                buttonStyle = _props.buttonStyle,
                badgeStyle = _props.badgeStyle,
                onClick = _props.onClick,
                badgeColor = _props.badgeColor,
                iconSize = _props.iconSize,
                label = _props.label,
                otherProps = _objectWithoutProperties(_props, ['iconName', 'style', 'buttonStyle', 'badgeStyle', 'onClick', 'badgeColor', 'iconSize', 'label']);

            return _react2.default.createElement(
                'div',
                _extends({ style: _extends({ position: "relative", width: 80, height: 80 }, style) }, otherProps),
                _react2.default.createElement(_IconButton2.default, { iconName: iconName || "notifications", iconSize: iconSize, onClick: onClick, style: _extends({ bottom: 12, position: "absolute", left: 12 }, buttonStyle) }),
                _react2.default.createElement(
                    'div',
                    { className: 'rmd-centered-item', style: _extends({
                            backgroundColor: badgeColor || "rgb(0, 188, 212)",
                            position: "absolute",
                            width: 24,
                            height: 24,
                            fontSize: 12,
                            color: "white",
                            borderRadius: "50%",
                            top: 12,
                            right: 12 }, badgeStyle) },
                    label
                )
            );
        }
    }]);

    return Badge;
}(_react2.default.Component);

Badge.propTypes = {
    iconName: _react.PropTypes.string,
    style: _react.PropTypes.object,
    badgeStyle: _react.PropTypes.object,
    buttonStyle: _react.PropTypes.object,
    badgeColor: _react.PropTypes.string,
    label: _react.PropTypes.string,
    iconSize: _react.PropTypes.number,
    onClick: _react.PropTypes.func
};
exports.default = Badge;