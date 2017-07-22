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

var _List = require('../List');

var _WaveEffect = require('../WaveEffect');

var _WaveEffect2 = _interopRequireDefault(_WaveEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 16/06/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Acordion = function (_React$Component) {
    _inherits(Acordion, _React$Component);

    function Acordion(props) {
        _classCallCheck(this, Acordion);

        var _this = _possibleConstructorReturn(this, (Acordion.__proto__ || Object.getPrototypeOf(Acordion)).call(this, props));

        _this.state = { index: -1 };
        return _this;
    }

    _createClass(Acordion, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.isOpened = true;
            this.openInitial();
        }
    }, {
        key: 'openInitial',
        value: function openInitial() {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                open = _props.open,
                parent = _props.parent,
                childField = _props.childField,
                otherProps = _props.otherProps,
                depth = _props.depth;

            data && data.forEach(function (item, index) {
                if (open && _this2.isOpened) {
                    if (typeof open == "function") {
                        if (open(item, depth, index, otherProps, [].concat(_toConsumableArray(parent), [item]))) {
                            _this2.isOpened = false;
                            return _this2.setState({ index: index });
                        }
                    } else {
                        if (!!open) {
                            _this2.isOpened = false;
                            return _this2.setState({ index: index });
                        }
                    }
                }
            });
            this.isOpened = false;
        }
    }, {
        key: 'selectItem',
        value: function selectItem(index, item) {
            var _props2 = this.props,
                depth = _props2.depth,
                otherProps = _props2.otherProps,
                parent = _props2.parent;

            if (this.state.index == index) {
                this.setState({ index: -1 });
            } else {
                this.setState({ index: index });
            }
            this.props.onClick && this.props.onClick(item, depth, index, otherProps, [].concat(_toConsumableArray(parent), [item]));
        }
    }, {
        key: 'rightAvatar',
        value: function rightAvatar(_rightAvatar, item, index, otherProps) {
            if (typeof _rightAvatar == "function") {
                return _rightAvatar(item, index, otherProps);
            } else {
                return _rightAvatar;
            }
        }
    }, {
        key: 'leftAvatar',
        value: function leftAvatar(_leftAvatar, item, index, otherProps) {
            if (typeof _leftAvatar == "function") {
                return _leftAvatar(item, index, otherProps);
            } else {
                return _leftAvatar;
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.openInitial();
            this.isOpened = false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props3 = this.props,
                label = _props3.label,
                data = _props3.data,
                open = _props3.open,
                dscLabel = _props3.dscLabel,
                dscField = _props3.dscField,
                bodyStyle = _props3.bodyStyle,
                style = _props3.style,
                index = _props3.index,
                child = _props3.child,
                children = _props3.children,
                parent = _props3.parent,
                dispatch = _props3.dispatch,
                depth = _props3.depth,
                otherProps = _props3.otherProps,
                waveEffect = _props3.waveEffect,
                rightAvatar = _props3.rightAvatar,
                childField = _props3.childField,
                light = _props3.light,
                leftAvatar = _props3.leftAvatar,
                listItemStyle = _props3.listItemStyle,
                selectedBackgroundColor = _props3.selectedBackgroundColor,
                rest = _objectWithoutProperties(_props3, ['label', 'data', 'open', 'dscLabel', 'dscField', 'bodyStyle', 'style', 'index', 'child', 'children', 'parent', 'dispatch', 'depth', 'otherProps', 'waveEffect', 'rightAvatar', 'childField', 'light', 'leftAvatar', 'listItemStyle', 'selectedBackgroundColor']);

            if (!data) {
                if (label) data = [{ dsc: label }];else data = [];
                dscField = "dsc";
            } else {
                if (!dscField) {
                    dscField = "dsc";
                }
            }
            return _react2.default.createElement(
                _List.List,
                _extends({}, rest, { style: _extends({ padding: 0 }, style) }),
                data && data.map(function (item, index) {
                    return _react2.default.createElement(
                        'div',
                        { style: _extends({ marginLeft: depth * 4 }, bodyStyle), key: index },
                        waveEffect ? _react2.default.createElement(
                            _WaveEffect2.default,
                            { light: light },
                            _react2.default.createElement(
                                _List.ListItem,
                                {
                                    avatar: !!leftAvatar && _this3.leftAvatar(leftAvatar, item, index, otherProps) || "",
                                    style: _extends({
                                        backgroundColor: _this3.state.index === index && "#eee" || selectedBackgroundColor }, listItemStyle, {
                                        borderBottom: "1px solid #bbb",
                                        padding: 6
                                    }),
                                    action: rightAvatar ? _this3.rightAvatar(rightAvatar, item, index, otherProps) : _react2.default.createElement('span', null),
                                    className: _this3.props.child || _this3.props.onClick ? "iota-expandable-list" : null,
                                    onClick: function onClick(e) {
                                        return _this3.selectItem(index, item);
                                    } },
                                dscLabel ? item[dscField] + dscLabel : item[dscField]
                            )
                        ) : _react2.default.createElement(
                            _List.ListItem,
                            {
                                action: _this3.rightAvatar ? _this3.rightAvatar(rightAvatar, item, index, otherProps) : _react2.default.createElement('span', null),
                                avatar: leftAvatar && _this3.leftAvatar(leftAvatar, item, index, otherProps) || "",
                                style: _extends({
                                    backgroundColor: _this3.state.index === index && "#eee" || selectedBackgroundColor }, listItemStyle, {
                                    borderBottom: "1px solid #bbb",
                                    padding: 6
                                }),
                                className: _this3.props.child || _this3.props.onClick ? "iota-expandable-list" : null,
                                onClick: function onClick() {
                                    return item[childField] || _this3.props.child || _this3.props.children ? _this3.selectItem(index, item) : _this3.sendToOnClick(item, depth, index, otherProps, parent);
                                } },
                            item[dscField]
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'armut', style: {
                                    maxHeight: _this3.state.index === index && (item[childField] || _this3.props.child || _this3.props.children) ? "10000px" : 0,
                                    height: "100%",
                                    marginLeft: _this3.state.index === index && (item[childField] || _this3.props.child || _this3.props.children) ? 0 : -400,
                                    opacity: _this3.state.index === index && (item[childField] || _this3.props.child || _this3.props.children) ? 1 : 0,
                                    pointerEvents: _this3.state.index === index && (item[childField] || _this3.props.child || _this3.props.children) ? "auto" : "none",
                                    overflowY: "hidden",
                                    transition: "1s"
                                } },
                            _this3.props.child ? _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_this3.props.child, { item: item,
                                    key: index,
                                    otherProps: otherProps,
                                    index: index })
                            ) : _this3.props.children ? _this3.props.children : item[childField] ? _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(Acordion, _extends({}, _this3.props, {
                                    data: item[childField],
                                    parent: [].concat(_toConsumableArray(parent), [item]),
                                    key: index,
                                    depth: depth + 1,
                                    index: index
                                }))
                            ) : null
                        )
                    );
                })
            );
        }
    }]);

    return Acordion;
}(_react2.default.Component);

Acordion.propTypes = {
    data: _propTypes2.default.array,
    label: _propTypes2.default.any,
    dscLabel: _propTypes2.default.any,
    dscField: _propTypes2.default.string,
    open: _propTypes2.default.any,
    child: _propTypes2.default.any,
    waveEffect: _propTypes2.default.any,
    borderBottom: _propTypes2.default.bool,
    childField: _propTypes2.default.string,
    light: _propTypes2.default.any,
    onClick: _propTypes2.default.func,
    leftAvatar: _propTypes2.default.any,
    rightAvatar: _propTypes2.default.any,
    listItemStyle: _propTypes2.default.object,
    bodyStyle: _propTypes2.default.object
};
exports.default = Acordion;


Acordion.defaultProps = {
    parent: [],
    depth: 0
};