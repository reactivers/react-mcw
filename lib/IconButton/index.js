'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 27/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var IconButton = function (_React$Component) {
    _inherits(IconButton, _React$Component);

    function IconButton() {
        _classCallCheck(this, IconButton);

        return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
    }

    _createClass(IconButton, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                iconSize = _props.iconSize,
                iconColor = _props.iconColor,
                mini = _props.mini,
                onClick = _props.onClick,
                style = _props.style,
                iconClassName = _props.iconClassName,
                iconName = _props.iconName,
                rest = _objectWithoutProperties(_props, ['iconSize', 'iconColor', 'mini', 'onClick', 'style', 'iconClassName', 'iconName']);

            var iconStyle = Object.assign({}, { color: iconColor, fontSize: iconSize });
            var iconButtonStyle = {
                borderRadius: mini ? 30 : 36,
                width: mini ? 30 : 36,
                height: mini ? 30 : 36,
                minWidth: 24,
                padding: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            };
            return _react2.default.createElement(
                _Button2.default,
                { style: _extends({}, iconButtonStyle, style), className: iconClassName, onClick: onClick },
                _react2.default.createElement(
                    'i',
                    _extends({ className: 'material-icons', style: iconStyle }, rest),
                    iconName
                )
            );
        }
    }]);

    return IconButton;
}(_react2.default.Component);

IconButton.propTypes = {
    iconName: _react.PropTypes.string,
    iconSize: _react.PropTypes.number,
    iconColor: _react.PropTypes.string,
    iconClassName: _react.PropTypes.string,
    style: _react.PropTypes.object,
    onClick: _react.PropTypes.func
};
exports.default = IconButton;