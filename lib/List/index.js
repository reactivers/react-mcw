'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItem = exports.List = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('@material/list/dist/mdc.list.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 27/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var List = function (_PureComponent) {
    _inherits(List, _PureComponent);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                twoLine = _props.twoLine,
                dense = _props.dense,
                avatar = _props.avatar,
                otherProps = _objectWithoutProperties(_props, ['className', 'children', 'twoLine', 'dense', 'avatar']);

            return _react2.default.createElement(
                'ul',
                _extends({ className: (0, _classnames2.default)("mdc-list", {
                        "mdc-list--two-line": twoLine,
                        "mdc-list--dense": dense,
                        "mdc-list--avatar-list": avatar

                    }, className) }, otherProps),
                children
            );
        }
    }]);

    return List;
}(_react.PureComponent);

List.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    twoLine: _propTypes2.default.bool,
    dense: _propTypes2.default.bool,
    avatar: _propTypes2.default.bool
};

var ListItem = function (_PureComponent2) {
    _inherits(ListItem, _PureComponent2);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                onClick = _props2.onClick,
                children = _props2.children,
                subText = _props2.subText,
                iconName = _props2.iconName,
                avatar = _props2.avatar,
                action = _props2.action,
                dividerInset = _props2.dividerInset,
                dividerOutset = _props2.dividerOutset,
                otherProps = _objectWithoutProperties(_props2, ['className', 'onClick', 'children', 'subText', 'iconName', 'avatar', 'action', 'dividerInset', 'dividerOutset']);

            return _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'li',
                    _extends({ className: (0, _classnames2.default)("mdc-list-item", "asd", { "rmd-hover-list-item": onClick }, className) }, otherProps, { onClick: onClick }),
                    iconName ? _react2.default.createElement(
                        'i',
                        { className: 'mdc-list-item__start-detail material-icons', 'aria-hidden': 'true' },
                        iconName
                    ) : avatar ? _react2.default.createElement(
                        'span',
                        { className: 'mdc-list-item__start-detail' },
                        avatar
                    ) : null,
                    subText ? _react2.default.createElement(
                        'span',
                        { className: 'mdc-list-item__text' },
                        _react2.default.createElement(
                            'span',
                            { className: 'mdc-list-item__text__primary' },
                            children
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'mdc-list-item__text__secondary' },
                            subText
                        ),
                        action ? _react2.default.createElement(
                            'span',
                            { className: 'mdc-list-item__end-detail' },
                            action
                        ) : null
                    ) : _react2.default.createElement(
                        'span',
                        { className: 'mdc-list-item__text' },
                        children
                    ),
                    action ? _react2.default.createElement(
                        'span',
                        { className: 'mdc-list-item__end-detail' },
                        action
                    ) : null
                ),
                dividerOutset ? _react2.default.createElement('li', { role: 'separator', className: 'mdc-list-divider' }) : dividerInset ? _react2.default.createElement('li', { role: 'separator', className: 'mdc-list-divider mdc-list-divider--inset' }) : null
            );
        }
    }]);

    return ListItem;
}(_react.PureComponent);

ListItem.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    subText: _propTypes2.default.any,
    iconName: _propTypes2.default.string,
    avatar: _propTypes2.default.object,
    action: _propTypes2.default.object,
    dividerInset: _propTypes2.default.bool,
    dividerOutset: _propTypes2.default.bool,
    onClick: _propTypes2.default.func

};
exports.List = List;
exports.ListItem = ListItem;