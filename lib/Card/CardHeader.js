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

require('@material/card/dist/mdc.card.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 24/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CardHeader = function (_React$PureComponent) {
    _inherits(CardHeader, _React$PureComponent);

    function CardHeader() {
        _classCallCheck(this, CardHeader);

        return _possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
    }

    _createClass(CardHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                style = _props.style,
                subtitle = _props.subtitle,
                rest = _objectWithoutProperties(_props, ['className', 'style', 'subtitle']);

            var classes = (0, _classnames2.default)("mdc-card__primary", className);
            return _react2.default.createElement(
                'section',
                _extends({ className: classes, style: style }, rest),
                this.props.title ? _react2.default.createElement(
                    'h1',
                    { className: 'mdc-card__title mdc-card__title--large' },
                    this.props.title
                ) : this.props.children,
                subtitle && _react2.default.createElement(
                    'h2',
                    { className: 'mdc-card__subtitle' },
                    subtitle
                )
            );
        }
    }]);

    return CardHeader;
}(_react2.default.PureComponent);

CardHeader.propTypes = {
    className: _propTypes2.default.string,
    title: _propTypes2.default.string,
    style: _propTypes2.default.object,
    subtitle: _propTypes2.default.string
};
exports.default = CardHeader;