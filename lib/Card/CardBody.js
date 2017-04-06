'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('@material/card/dist/mdc.card.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 24/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CardBody = function (_React$PureComponent) {
    _inherits(CardBody, _React$PureComponent);

    function CardBody() {
        _classCallCheck(this, CardBody);

        return _possibleConstructorReturn(this, (CardBody.__proto__ || Object.getPrototypeOf(CardBody)).apply(this, arguments));
    }

    _createClass(CardBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                rest = _objectWithoutProperties(_props, ['className']);

            var classes = (0, _classnames2.default)("mdc-card__supporting-text", className);
            return _react2.default.createElement(
                'section',
                _extends({ className: classes }, rest),
                this.props.children
            );
        }
    }]);

    return CardBody;
}(_react2.default.PureComponent);

CardBody.propTypes = {
    className: _react.PropTypes.string,
    style: _react.PropTypes.object
};
exports.default = CardBody;