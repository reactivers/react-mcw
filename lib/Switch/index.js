'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('@material/switch/dist/mdc.switch.css');

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


var Switch = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.switchId = (0, _generateId2.default)();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                label = _props.label,
                style = _props.style,
                rest = _objectWithoutProperties(_props, ['className', 'label', 'style']);

            var classes = (0, _classnames2.default)("mdc-switch-label", className);
            return _react2.default.createElement(
                'label',
                { htmlFor: this.switchId, className: classes, style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'mdc-switch' },
                    _react2.default.createElement('input', _extends({ type: 'checkbox' }, rest, { id: this.switchId, className: 'mdc-switch__native-control' })),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdc-switch__background' },
                        _react2.default.createElement('div', { className: 'mdc-switch__knob' })
                    )
                ),
                label
            );
        }
    }]);

    return Switch;
}(_react2.default.Component);

Switch.propTypes = {
    checked: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    label: _react.PropTypes.string,
    style: _react.PropTypes.object
};
exports.default = Switch;