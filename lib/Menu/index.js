'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = exports.MenuItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('@material/menu/dist/mdc.menu.css');

var _mdc = require('@material/menu/dist/mdc.menu');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 27/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MenuItem = exports.MenuItem = function (_React$PureComponent) {
    _inherits(MenuItem, _React$PureComponent);

    function MenuItem() {
        _classCallCheck(this, MenuItem);

        return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                hoverAtMenuItem = _props.hoverAtMenuItem,
                rest = _objectWithoutProperties(_props, ['className', 'hoverAtMenuItem']);

            var menuItemClasses = (0, _classnames2.default)("mdc-list-item", {
                "rmd-menu-item": hoverAtMenuItem
            }, className);
            return _react2.default.createElement(
                'li',
                _extends({ className: menuItemClasses }, rest, { role: 'menuitem', tabIndex: '0' }),
                this.props.children
            );
        }
    }]);

    return MenuItem;
}(_react2.default.PureComponent);

MenuItem.propTypes = {
    hoverAtMenuItem: _react.PropTypes.bool
};

var Menu = exports.Menu = function (_React$PureComponent2) {
    _inherits(Menu, _React$PureComponent2);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.menu = new _mdc.MDCSimpleMenu(document.querySelector(".mdc-simple-menu"));
            if (this.props.onMenuClose) {
                this.menu.foundation_.adapter_.notifyCancel = function () {
                    return _this3.props.onMenuClose();
                };
            }
            if (this.props.getSelectedIndex) {
                this.menu.foundation_.adapter_.notifySelected = function (e) {
                    return _this3.props.getSelectedIndex(e);
                };
            }
            window.menu = this.menu;
        }
    }, {
        key: 'openMenu',
        value: function openMenu() {
            if (this.menu.open === true) {
                this.props.onMenuClose();
                this.menu.foundation_.close();
            } else {
                this.menu.show();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props2 = this.props,
                className = _props2.className,
                getSelectedIndex = _props2.getSelectedIndex,
                onMenuClose = _props2.onMenuClose,
                style = _props2.style,
                rest = _objectWithoutProperties(_props2, ['className', 'getSelectedIndex', 'onMenuClose', 'style']);

            return _react2.default.createElement(
                'div',
                { className: className, style: style },
                _react2.default.cloneElement(this.props.target, {
                    onClick: function onClick() {
                        if (_this4.props.target.props && _this4.props.target.props.onClick) {
                            _this4.props.target.props.onClick();
                            _this4.openMenu();
                        } else {
                            _this4.openMenu();
                        }
                    }
                }),
                _react2.default.createElement(
                    'div',
                    _extends({ className: 'mdc-simple-menu', tabIndex: '-1' }, rest),
                    _react2.default.createElement(
                        'ul',
                        { className: 'mdc-simple-menu__items mdc-list deleleteMargin', role: 'menu', 'aria-hidden': 'true' },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.PureComponent);

Menu.propTypes = {
    target: _react.PropTypes.node,
    onMenuClose: _react.PropTypes.func,
    getSelectedIndex: _react.PropTypes.func

};