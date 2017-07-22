'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppBar = exports.AppBarTitle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('@material/toolbar/dist/mdc.toolbar.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 25/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AppBarTitle = exports.AppBarTitle = function (_React$PureComponent) {
    _inherits(AppBarTitle, _React$PureComponent);

    function AppBarTitle() {
        _classCallCheck(this, AppBarTitle);

        return _possibleConstructorReturn(this, (AppBarTitle.__proto__ || Object.getPrototypeOf(AppBarTitle)).apply(this, arguments));
    }

    _createClass(AppBarTitle, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                icon = _props.icon,
                iconAlignment = _props.iconAlignment,
                title = _props.title,
                rest = _objectWithoutProperties(_props, ['className', 'icon', 'iconAlignment', 'title']);

            var style = Object.assign({
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }, this.props.style);
            return _react2.default.createElement(
                'span',
                _extends({ style: style }, rest, { className: className }),
                icon && (!iconAlignment || iconAlignment !== "right") && icon,
                _react2.default.createElement(
                    'span',
                    { className: 'mdc-toolbar__title' },
                    title
                ),
                icon && iconAlignment && iconAlignment.toLowerCase() === "right" && icon
            );
        }
    }]);

    return AppBarTitle;
}(_react2.default.PureComponent);

AppBarTitle.propTypes = {
    iconAlignment: _propTypes2.default.string,
    icon: _propTypes2.default.node,
    title: _propTypes2.default.string
};

var AppBar = exports.AppBar = function (_React$PureComponent2) {
    _inherits(AppBar, _React$PureComponent2);

    function AppBar() {
        _classCallCheck(this, AppBar);

        return _possibleConstructorReturn(this, (AppBar.__proto__ || Object.getPrototypeOf(AppBar)).apply(this, arguments));
    }

    _createClass(AppBar, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                fixed = _props2.fixed,
                style = _props2.style,
                barColor = _props2.barColor,
                leftElements = _props2.leftElements,
                rightElements = _props2.rightElements,
                middleElements = _props2.middleElements,
                otherProps = _objectWithoutProperties(_props2, ['className', 'fixed', 'style', 'barColor', 'leftElements', 'rightElements', 'middleElements']);

            var classes = (0, _classnames2.default)("mdc-toolbar", { "mdc-toolbar--fixed": fixed }, className);
            var barStyle = Object.assign({}, style, { backgroundColor: barColor });
            return _react2.default.createElement(
                'header',
                _extends({ className: classes, style: barStyle }, otherProps),
                leftElements && _react2.default.createElement(
                    'section',
                    { className: 'mdc-toolbar__section mdc-toolbar__section--align-start' },
                    leftElements
                ),
                middleElements && _react2.default.createElement(
                    'section',
                    { className: 'mdc-toolbar__section' },
                    middleElements
                ),
                rightElements && _react2.default.createElement(
                    'section',
                    { className: 'mdc-toolbar__section mdc-toolbar__section--align-end' },
                    rightElements
                )
            );
        }
    }]);

    return AppBar;
}(_react2.default.PureComponent);

AppBar.propTypes = {
    leftElements: _propTypes2.default.node,
    rightElements: _propTypes2.default.node,
    middleElements: _propTypes2.default.node,
    barColor: _propTypes2.default.string,
    fixed: _propTypes2.default.bool
};