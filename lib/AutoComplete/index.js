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

require('@material/menu/dist/mdc.menu.css');

var _mdc = require('@material/menu/dist/mdc.menu');

require('../index.scss');

var _index = require('../TextField/index');

var _index2 = _interopRequireDefault(_index);

var _generateId = require('../utils/generateId');

var _generateId2 = _interopRequireDefault(_generateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 28/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AutoComplete = function (_React$Component) {
    _inherits(AutoComplete, _React$Component);

    function AutoComplete() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AutoComplete);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            hasVal: "",
            value: "",
            textFieldWidth: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AutoComplete, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.defaultId = (0, _generateId2.default)("autocomplete");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.menu = new _mdc.MDCSimpleMenu(document.querySelector(".mdc-simple-menu"));
            this.menu.foundation_.focusOnOpen_ = function () {
                return null;
            };
            this.tempClose = this.menu.foundation_;
            this.setState({ textFieldWidth: document.getElementById(this.defaultId).clientWidth });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                label = _props.label,
                error = _props.error,
                floatingLabel = _props.floatingLabel,
                helpText = _props.helpText,
                placeholder = _props.placeholder,
                rightIcon = _props.rightIcon,
                disabled = _props.disabled,
                dscField = _props.dscField,
                valueField = _props.valueField,
                onChange = _props.onChange,
                data = _props.data,
                className = _props.className,
                style = _props.style,
                otherProps = _objectWithoutProperties(_props, ['label', 'error', 'floatingLabel', 'helpText', 'placeholder', 'rightIcon', 'disabled', 'dscField', 'valueField', 'onChange', 'data', 'className', 'style']);

            var fieldDsc = "dsc";
            var fieldValue = "value";
            if (dscField) fieldDsc = dscField;
            if (valueField) fieldValue = valueField;

            if (this.state.hasVal !== "" && !this.menu.foundation_.isOpen()) {
                this.menu.show();
            }
            return _react2.default.createElement(
                'div',
                _extends({ className: className, style: style }, otherProps),
                _react2.default.createElement(_index2.default, { value: this.state.hasVal,
                    rightIcon: rightIcon,
                    id: this.defaultId,
                    disabled: disabled,
                    placeholder: placeholder,
                    helpText: helpText,
                    error: error,
                    onChange: function onChange(e) {
                        _this2.setState({ hasVal: e.target.value });
                    },
                    floatingLabel: floatingLabel,
                    label: label }),
                _react2.default.createElement(
                    'div',
                    { className: 'mdc-simple-menu', tabIndex: '-1' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'mdc-simple-menu__items mdc-list deleleteMargin', role: 'menu', 'aria-hidden': 'true',
                            style: { minWidth: this.state.textFieldWidth } },
                        data && data.filter(function (text) {
                            return !_this2.state.hasVal || text[fieldDsc].indexOf(_this2.state.hasVal) > -1;
                        }).map(function (text, index) {
                            return _react2.default.createElement(
                                'li',
                                { key: index, onKeyPress: function onKeyPress(e) {
                                        e.key === "Enter" && _this2.setState({ hasVal: text[fieldDsc] }, function () {
                                            return onChange(text[fieldValue]);
                                        });
                                    },
                                    onClick: function onClick() {
                                        return _this2.setState({ hasVal: text[fieldDsc] }, function () {
                                            return onChange(text[fieldValue]);
                                        });
                                    },
                                    className: 'rmd-menu-item mdc-list-item', role: 'menuitem', tabIndex: '0' },
                                text[fieldDsc]
                            );
                        })
                    )
                )
            );
        }
    }]);

    return AutoComplete;
}(_react2.default.Component);

AutoComplete.propTypes = {
    label: _propTypes2.default.string,
    rightIcon: _propTypes2.default.string,
    data: _propTypes2.default.array,
    error: _propTypes2.default.string,
    floatingLabel: _propTypes2.default.bool,
    helpText: _propTypes2.default.string,
    dscField: _propTypes2.default.string,
    valueField: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    placeholder: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
AutoComplete.defaultProps = {
    onChange: function onChange() {
        return null;
    }
};
exports.default = AutoComplete;