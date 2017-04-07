'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('@material/radio/dist/mdc.radio.css');

var _mdc = require('@material/radio/dist/mdc.radio');

var _generateId = require('../utils/generateId');

var _generateId2 = _interopRequireDefault(_generateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 27/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RadioButton = function (_PureComponent) {
    _inherits(RadioButton, _PureComponent);

    function RadioButton() {
        _classCallCheck(this, RadioButton);

        return _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
    }

    _createClass(RadioButton, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.generateId = (0, _generateId2.default)();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.radio = new _mdc.MDCRadio(document.querySelector('#' + this.generateId));
            this.radioOptions(this.props);
            window.radio = this.radio;
        }
    }, {
        key: 'radioOptions',
        value: function radioOptions(nextProps) {
            if (nextProps.isDisabled) nextProps.isDisabled(this.radio.foundation_.isDisabled());

            if (nextProps.setChecked !== undefined) {
                this.radio.foundation_.setChecked(nextProps.setChecked);
            }

            if (nextProps.setDisabled) this.radio.foundation_.setDisabled(nextProps.setDisabled);

            if (nextProps.isChecked) nextProps.isChecked(this.radio.foundation_.isChecked());

            if (nextProps.onChange) nextProps.onChange(this.radio.foundation_.isChecked());
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextState) {
            this.radioOptions(nextProps);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                onChange = _props.onChange,
                isChecked = _props.isChecked,
                isDisabled = _props.isDisabled,
                setChecked = _props.setChecked,
                setDisabled = _props.setDisabled,
                value = _props.value,
                style = _props.style,
                className = _props.className,
                name = _props.name,
                otherProps = _objectWithoutProperties(_props, ['label', 'onChange', 'isChecked', 'isDisabled', 'setChecked', 'setDisabled', 'value', 'style', 'className', 'name']);

            return _react2.default.createElement(
                'div',
                _extends({ className: "mdc-form-field" + className, style: _extends({ display: "flex", alignItems: "center" }, style) }, otherProps),
                _react2.default.createElement(
                    'div',
                    { id: this.generateId, className: 'mdc-radio' },
                    _react2.default.createElement('input', { className: 'mdc-radio__native-control', type: 'radio', onChange: onChange,
                        id: this.generateId + "radio", name: name }),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdc-radio__background' },
                        _react2.default.createElement('div', { className: 'mdc-radio__outer-circle' }),
                        _react2.default.createElement('div', { className: 'mdc-radio__inner-circle' })
                    )
                ),
                _react2.default.createElement(
                    'label',
                    { htmlFor: this.generateId + "radio" },
                    label
                )
            );
        }
    }]);

    return RadioButton;
}(_react.PureComponent);

RadioButton.propTypes = {
    label: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    isChecked: _react.PropTypes.func,
    isDisabled: _react.PropTypes.func,
    setChecked: _react.PropTypes.bool,
    setDisabled: _react.PropTypes.bool,
    name: _react.PropTypes.string,
    style: _react.PropTypes.object,
    className: _react.PropTypes.string
};
exports.default = RadioButton;