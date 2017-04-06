'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('@material/textfield/dist/mdc.textfield.css');

var _mdc = require('@material/textfield/dist/mdc.textfield');

var _generateId = require('../utils/generateId');

var _generateId2 = _interopRequireDefault(_generateId);

require('../index.scss');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 25/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TextField = function (_React$PureComponent) {
    _inherits(TextField, _React$PureComponent);

    function TextField() {
        _classCallCheck(this, TextField);

        return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
    }

    _createClass(TextField, [{
        key: 'copmonentWillMount',
        value: function copmonentWillMount() {
            this.textFieldId = (0, _generateId2.default)();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _mdc.MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                error = _props.error,
                floatingLabel = _props.floatingLabel,
                helpText = _props.helpText,
                style = _props.style,
                textfieldStyle = _props.textfieldStyle,
                placeholder = _props.placeholder,
                rest = _objectWithoutProperties(_props, ['label', 'error', 'floatingLabel', 'helpText', 'style', 'textfieldStyle', 'placeholder']);

            var inputClass = (0, _classnames2.default)("mdc-textfield__input", {
                "placeholderClass": !!floatingLabel && placeholder
            });
            var helpTextClass = (0, _classnames2.default)("mdc-textfield-helptext mdc-textfield-helptext--persistent", {
                "mdc-textfield-helptext--validation-msg": error
            });
            return _react2.default.createElement(
                'div',
                { style: style },
                _react2.default.createElement(
                    'div',
                    { className: "mdc-textfield", style: style },
                    _react2.default.createElement('input', _extends({ className: inputClass, id: this.textFieldId
                    }, rest, { style: textfieldStyle,
                        placeholder: !floatingLabel ? label : placeholder })),
                    !!floatingLabel && _react2.default.createElement(
                        'label',
                        { htmlFor: this.textFieldId, className: 'mdc-textfield__label' },
                        label
                    )
                ),
                (helpText || error) && _react2.default.createElement(
                    'p',
                    { className: helpTextClass, id: this.textFieldId },
                    !error ? helpText : error
                )
            );
        }
    }]);

    return TextField;
}(_react2.default.PureComponent);

TextField.propTypes = {
    label: _react.PropTypes.string,
    error: _react.PropTypes.string,
    floatingLabel: _react.PropTypes.bool,
    helpText: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    onChange: _react.PropTypes.func
};
exports.default = TextField;