'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('@material/fab/dist/mdc.fab.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 25/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var FAB = function (_React$PureComponent) {
    _inherits(FAB, _React$PureComponent);

    function FAB() {
        _classCallCheck(this, FAB);

        return _possibleConstructorReturn(this, (FAB.__proto__ || Object.getPrototypeOf(FAB)).apply(this, arguments));
    }

    _createClass(FAB, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                className = _props.className,
                buttonColor = _props.buttonColor,
                onClick = _props.onClick,
                buttonSize = _props.buttonSize,
                mini = _props.mini,
                icon = _props.icon,
                rest = _objectWithoutProperties(_props, ['style', 'className', 'buttonColor', 'onClick', 'buttonSize', 'mini', 'icon']);

            var buttonStyle = Object.assign({}, style, {
                backgroundColor: buttonColor,
                width: buttonSize,
                height: buttonSize
            });
            var classes = (0, _classnames2.default)("mdc-fab", "material-icons", {
                "mdc-fab--mini": mini
            }, className);
            return _react2.default.createElement(
                'button',
                _extends({ className: classes, style: buttonStyle, onClick: onClick }, rest),
                buttonSize ? _react2.default.cloneElement(icon, { iconSize: buttonSize * 44 / 100 }) : icon
            );
        }
    }]);

    return FAB;
}(_react2.default.PureComponent);

FAB.propTypes = {
    buttonColor: _react.PropTypes.string,
    buttonSize: _react.PropTypes.number,
    style: _react.PropTypes.object,
    mini: _react.PropTypes.bool,
    icon: _react.PropTypes.string,
    onClick: _react.PropTypes.func
};
exports.default = FAB;