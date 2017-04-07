'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogFooter = exports.DialogContent = exports.DialogTitle = exports.DialogHeader = exports.Dialog = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('@material/dialog/dist/mdc.dialog.css');

var _generateId = require('../utils/generateId');

var _generateId2 = _interopRequireDefault(_generateId);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 26/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Dialog = function (_PureComponent) {
    _inherits(Dialog, _PureComponent);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
    }

    _createClass(Dialog, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.open) {
                document.getElementsByTagName('body')[0].style.overflow = "hidden";
            } else {
                document.getElementsByTagName('body')[0].style.overflow = "scroll";
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var id = (0, _generateId2.default)();

            var _props = this.props,
                open = _props.open,
                onClose = _props.onClose,
                children = _props.children,
                className = _props.className,
                otherProps = _objectWithoutProperties(_props, ['open', 'onClose', 'children', 'className']);

            return _react2.default.createElement(
                'aside',
                { id: id,
                    className: (0, _classnames2.default)("mdc-dialog", {
                        "mdc-dialog--open": open
                    })
                },
                _react2.default.createElement(
                    'div',
                    _extends({ className: (0, _classnames2.default)("mdc-dialog__surface", className) }, otherProps),
                    children
                ),
                _react2.default.createElement('div', { onClick: onClose, className: 'mdc-dialog__backdrop' })
            );
        }
    }]);

    return Dialog;
}(_react.PureComponent);

Dialog.propTypes = {
    className: _react.PropTypes.string,
    open: _react.PropTypes.bool,
    onClose: _react.PropTypes.func,
    style: _react.PropTypes.object
};

var DialogHeader = function (_PureComponent2) {
    _inherits(DialogHeader, _PureComponent2);

    function DialogHeader() {
        _classCallCheck(this, DialogHeader);

        return _possibleConstructorReturn(this, (DialogHeader.__proto__ || Object.getPrototypeOf(DialogHeader)).apply(this, arguments));
    }

    _createClass(DialogHeader, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                children = _props2.children,
                otherProps = _objectWithoutProperties(_props2, ['className', 'children']);

            return _react2.default.createElement(
                'header',
                _extends({ className: (0, _classnames2.default)("mdc-dialog__header", className) }, otherProps),
                children
            );
        }
    }]);

    return DialogHeader;
}(_react.PureComponent);

DialogHeader.propTypes = {
    classnames: _react.PropTypes.string,
    children: _react.PropTypes.node,
    style: _react.PropTypes.object
};

var DialogTitle = function (_PureComponent3) {
    _inherits(DialogTitle, _PureComponent3);

    function DialogTitle() {
        _classCallCheck(this, DialogTitle);

        return _possibleConstructorReturn(this, (DialogTitle.__proto__ || Object.getPrototypeOf(DialogTitle)).apply(this, arguments));
    }

    _createClass(DialogTitle, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                className = _props3.className,
                children = _props3.children,
                otherProps = _objectWithoutProperties(_props3, ['className', 'children']);

            return _react2.default.createElement(
                'h2',
                _extends({ className: (0, _classnames2.default)("mdc-dialog__header__title", className) }, otherProps),
                children
            );
        }
    }]);

    return DialogTitle;
}(_react.PureComponent);

DialogTitle.propTypes = {
    classnames: _react.PropTypes.string,
    children: _react.PropTypes.node,
    style: _react.PropTypes.object
};

var DialogContent = function (_PureComponent4) {
    _inherits(DialogContent, _PureComponent4);

    function DialogContent() {
        _classCallCheck(this, DialogContent);

        return _possibleConstructorReturn(this, (DialogContent.__proto__ || Object.getPrototypeOf(DialogContent)).apply(this, arguments));
    }

    _createClass(DialogContent, [{
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                className = _props4.className,
                children = _props4.children,
                scrollable = _props4.scrollable,
                otherProps = _objectWithoutProperties(_props4, ['className', 'children', 'scrollable']);

            return _react2.default.createElement(
                'section',
                _extends({ className: (0, _classnames2.default)("mdc-dialog__body", { "mdc-dialog__body--scrollable": scrollable }, className) }, otherProps),
                children
            );
        }
    }]);

    return DialogContent;
}(_react.PureComponent);

DialogContent.propTypes = {
    classnames: _react.PropTypes.string,
    children: _react.PropTypes.node,
    style: _react.PropTypes.object,
    scrollable: _react.PropTypes.bool
};

var DialogFooter = function (_PureComponent5) {
    _inherits(DialogFooter, _PureComponent5);

    function DialogFooter() {
        _classCallCheck(this, DialogFooter);

        return _possibleConstructorReturn(this, (DialogFooter.__proto__ || Object.getPrototypeOf(DialogFooter)).apply(this, arguments));
    }

    _createClass(DialogFooter, [{
        key: 'render',
        value: function render() {
            var _props5 = this.props,
                className = _props5.className,
                children = _props5.children,
                otherProps = _objectWithoutProperties(_props5, ['className', 'children']);

            return _react2.default.createElement(
                'footer',
                _extends({ className: (0, _classnames2.default)("mdc-dialog__footer", className) }, otherProps),
                children
            );
        }
    }]);

    return DialogFooter;
}(_react.PureComponent);

DialogFooter.propTypes = {
    classnames: _react.PropTypes.string,
    children: _react.PropTypes.node,
    style: _react.PropTypes.object
};
exports.Dialog = Dialog;
exports.DialogHeader = DialogHeader;
exports.DialogTitle = DialogTitle;
exports.DialogContent = DialogContent;
exports.DialogFooter = DialogFooter;