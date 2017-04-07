'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _mdc = require('@material/animation/dist/mdc.animation');

var _mdc2 = require('@material/ripple/dist/mdc.ripple');

var _mdc3 = require('@material/checkbox/dist/mdc.checkbox');

require('@material/checkbox/dist/mdc.checkbox.css');

require('@material/form-field/dist/mdc.form-field.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 24/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/* eslint-disable */


function getMatchesProperty(HTMLElementPrototype) {
    return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
        return p in HTMLElementPrototype;
    }).pop();
}

var MATCHES = getMatchesProperty(HTMLElement.prototype);

var Checkbox = function (_PureComponent) {
    _inherits(Checkbox, _PureComponent);

    function Checkbox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Checkbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            classes: new _immutable.Set(),
            rippleCss: new _immutable.Map(),
            checkedInternal: _this.props.checked,
            disabledInternal: _this.props.disabled,
            indeterminateInternal: _this.props.indeterminate
        }, _this.foundation = new _mdc3.MDCCheckboxFoundation({
            addClass: function addClass(className) {
                return _this.setState(function (prevState) {
                    return {
                        classes: prevState.classes.add(className)
                    };
                });
            },
            removeClass: function removeClass(className) {
                return _this.setState(function (prevState) {
                    return {
                        classes: prevState.classes.remove(className)
                    };
                });
            },
            registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
                if (_this.refs.root) {
                    _this.refs.root.addEventListener((0, _mdc.getCorrectEventName)(window, 'animationend'), handler);
                }
            },
            deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
                if (_this.refs.root) {
                    _this.refs.root.removeEventListener((0, _mdc.getCorrectEventName)(window, 'animationend'), handler);
                }
            },
            registerChangeHandler: function registerChangeHandler(handler) {
                if (_this.refs.nativeCb) {
                    _this.refs.nativeCb.addEventListener('change', handler);
                }
            },
            deregisterChangeHandler: function deregisterChangeHandler(handler) {
                if (_this.refs.nativeCb) {
                    _this.refs.nativeCb.removeEventListener('change', handler);
                }
            },
            getNativeControl: function getNativeControl() {
                if (!_this.refs.nativeCb) {
                    throw new Error('Invalid state for operation');
                }
                return _this.refs.nativeCb;
            },
            forceLayout: function forceLayout() {
                if (_this.refs.nativeCb) {
                    _this.refs.nativeCb.offsetWidth;
                }
            },
            isAttachedToDOM: function isAttachedToDOM() {
                return Boolean(_this.refs.nativeCb);
            }
        }), _this.rippleFoundation = new _mdc2.MDCRippleFoundation(Object.assign(_mdc2.MDCRipple.createAdapter(_this), {
            isUnbounded: function isUnbounded() {
                return true;
            },
            isSurfaceActive: function isSurfaceActive() {
                return _this.refs.nativeCb[MATCHES](':active');
            },
            addClass: function addClass(className) {
                _this.setState(function (prevState) {
                    return {
                        classes: prevState.classes.add(className)
                    };
                });
            },
            removeClass: function removeClass(className) {
                _this.setState(function (prevState) {
                    return {
                        classes: prevState.classes.remove(className)
                    };
                });
            },
            registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                _this.refs.nativeCb.addEventListener(evtType, handler);
            },
            deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                _this.refs.nativeCb.removeEventListener(evtType, handler);
            },
            updateCssVariable: function updateCssVariable(varName, value) {
                _this.setState(function (prevState) {
                    return {
                        rippleCss: prevState.rippleCss.set(varName, value)
                    };
                });
            },
            computeBoundingRect: function computeBoundingRect() {
                var _this$refs$root$getBo = _this.refs.root.getBoundingClientRect(),
                    left = _this$refs$root$getBo.left,
                    top = _this$refs$root$getBo.top;

                var DIM = 40;
                return {
                    top: top,
                    left: left,
                    right: left + DIM,
                    bottom: top + DIM,
                    width: DIM,
                    height: DIM
                };
            }
        })), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Checkbox, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                id = _props.id,
                labelId = _props.labelId,
                label = _props.label,
                checked = _props.checked,
                disabled = _props.disabled,
                indeterminate = _props.indeterminate,
                onChange = _props.onChange,
                otherProps = _objectWithoutProperties(_props, ['id', 'labelId', 'label', 'checked', 'disabled', 'indeterminate', 'onChange']);

            return _react2.default.createElement(
                'div',
                _extends({ className: 'mdc-form-field' }, otherProps),
                _react2.default.createElement(
                    'div',
                    { ref: 'root', className: 'mdc-checkbox ' + this.state.classes.toJS().join(' ') },
                    _react2.default.createElement('input', { ref: 'nativeCb',
                        id: this.props.id,
                        type: 'checkbox',
                        className: 'mdc-checkbox__native-control',
                        'aria-labelledby': this.props.labelId,
                        checked: this.state.checkedInternal,
                        disabled: this.state.disabledInternal,
                        onChange: function onChange(evt) {
                            _this2.setState({
                                checkedInternal: _this2.refs.nativeCb.checked,
                                indeterminateInternal: false
                            });
                            _this2.props.onChange(evt);
                        } }),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdc-checkbox__background' },
                        _react2.default.createElement(
                            'svg',
                            { version: '1.1',
                                className: 'mdc-checkbox__checkmark',
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 24 24' },
                            _react2.default.createElement('path', { className: 'mdc-checkbox__checkmark__path',
                                fill: 'none',
                                stroke: 'white',
                                d: 'M1.73,12.91 8.1,19.28 22.79,4.59' })
                        ),
                        _react2.default.createElement('div', { className: 'mdc-checkbox__mixedmark' })
                    )
                ),
                _react2.default.createElement(
                    'label',
                    { htmlFor: this.props.id },
                    this.props.label
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.foundation.init();
            this.rippleFoundation.init();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.checked !== this.props.checked) {
                this.setState({ checkedInternal: props.checked, indeterminateInternal: false });
            }
            if (props.indeterminate !== this.props.indeterminate) {
                this.setState({ indeterminateInternal: props.indeterminate });
            }
            if (props.disabled !== this.props.disabled) {
                this.setState({ disabledInternal: props.disabled });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this3 = this;

            if (this.refs.nativeCb) {
                this.refs.nativeCb.indeterminate = this.state.indeterminateInternal;
            }
            if (this.refs.root) {
                this.state.rippleCss.forEach(function (v, k) {
                    _this3.refs.root.style.setProperty(k, v);
                });
            }
        }
    }]);

    return Checkbox;
}(_react.PureComponent);

Checkbox.propTypes = {
    id: _react.PropTypes.string,
    labelId: _react.PropTypes.string,
    label: _react.PropTypes.string,
    checked: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    indeterminate: _react.PropTypes.bool,
    onChange: _react.PropTypes.func
};
Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
    onChange: function onChange() {}
};
exports.default = Checkbox;