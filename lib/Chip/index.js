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

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

require('../index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 01/04/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Chip = function (_React$Component) {
    _inherits(Chip, _React$Component);

    function Chip() {
        _classCallCheck(this, Chip);

        return _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).apply(this, arguments));
    }

    _createClass(Chip, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                avatar = _props.avatar,
                onCancel = _props.onCancel,
                style = _props.style,
                avatarStyle = _props.avatarStyle,
                avatarColor = _props.avatarColor,
                cancelButtonStyle = _props.cancelButtonStyle,
                children = _props.children,
                chipColor = _props.chipColor,
                otherProps = _objectWithoutProperties(_props, ['avatar', 'onCancel', 'style', 'avatarStyle', 'avatarColor', 'cancelButtonStyle', 'children', 'chipColor']);

            var chipStyle = style;
            var avStyle = avatarStyle;
            if (chipColor) {
                chipStyle = _extends({ backgroundColor: chipColor }, chipStyle);
            }
            if (avatarColor) {
                avStyle = _extends({ backgroundColor: avatarColor }, avStyle);
            }

            return _react2.default.createElement(
                'div',
                _extends({ style: chipStyle, className: 'rmd-chip' }, otherProps),
                avatar && _react2.default.createElement(
                    'div',
                    { style: avStyle, className: 'rmd-chip-contact' },
                    avatar
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'rmd-chip-text' },
                    children
                ),
                onCancel && _react2.default.createElement(_IconButton2.default, { iconName: 'cancel',
                    mini: true,
                    onClick: onCancel,
                    iconColor: 'gray',
                    style: cancelButtonStyle,
                    iconClassName: 'rmd-chip-action' })
            );
        }
    }]);

    return Chip;
}(_react2.default.Component);

Chip.propTypes = {
    avatar: _propTypes2.default.any,
    onCancel: _propTypes2.default.func,
    style: _propTypes2.default.object,
    avatarStyle: _propTypes2.default.object,
    cancelButtonStyle: _propTypes2.default.object,
    avatarColor: _propTypes2.default.string,
    chipColor: _propTypes2.default.string
};
exports.default = Chip;