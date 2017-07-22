'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tab = exports.Tabs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _WaveEffect = require('../WaveEffect');

var _WaveEffect2 = _interopRequireDefault(_WaveEffect);

var _generateId = require('../utils/generateId');

var _generateId2 = _interopRequireDefault(_generateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 28/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this.changed = true;

        _this.state = { selected: props.defaultSelectedIndex || 0, id: '' };
        return _this;
    }

    _createClass(Tabs, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.content = this.props.children[this.state.selected] ? this.props.children[this.state.selected].props.children : this.props.children.props.children;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.defaultSelectedIndex != this.props.defaultSelectedIndex && this.changed) {
                this.setState({ selected: nextProps.defaultSelectedIndex });
                this.changed = false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                defaultSelectedIndex = _props.defaultSelectedIndex,
                tabContentStyle = _props.tabContentStyle,
                tabStyle = _props.tabStyle,
                style = _props.style,
                light = _props.light,
                indicatorStyle = _props.indicatorStyle,
                indicatorColor = _props.indicatorColor,
                selectedBackgroundColor = _props.selectedBackgroundColor,
                selectedLabelColor = _props.selectedLabelColor,
                content = _props.content,
                changeTab = _props.changeTab,
                index = _props.index,
                selectedTab = _props.selectedTab,
                unSelectedBackgroundColor = _props.unSelectedBackgroundColor,
                unSelectedLabelColor = _props.unSelectedLabelColor,
                label = _props.label,
                children = _props.children,
                otherProps = _objectWithoutProperties(_props, ['defaultSelectedIndex', 'tabContentStyle', 'tabStyle', 'style', 'light', 'indicatorStyle', 'indicatorColor', 'selectedBackgroundColor', 'selectedLabelColor', 'content', 'changeTab', 'index', 'selectedTab', 'unSelectedBackgroundColor', 'unSelectedLabelColor', 'label', 'children']);

            return _react2.default.createElement(
                'div',
                _extends({}, otherProps, { style: _extends({ width: "100%" }, style) }),
                _react2.default.createElement(
                    'div',
                    { className: 'rmd-centered-item',
                        style: _extends({ display: "flex", padding: "8px 0 8px 0", margin: "8px 0 8px 0" }, tabStyle) },
                    _react2.default.Children.map(this.props.children, function (child, index) {
                        return _react2.default.cloneElement(child, {
                            selectedTab: _this2.state.selected,
                            getId: function getId(e) {
                                return _this2.id = e;
                            },
                            key: index,
                            changeTab: function changeTab(e, content, id) {
                                _this2.setState({ selected: e, id: id }, function () {
                                    return _this2.props.onChange && _this2.props.onChange(e);
                                });
                                _this2.content = content;
                            },
                            index: index,
                            light: light,
                            defaultSelectedIndex: defaultSelectedIndex,
                            tabContentStyle: tabContentStyle,
                            selectedBackgroundColor: selectedBackgroundColor,
                            selectedLabelColor: selectedLabelColor,
                            unSelectedBackgroundColor: unSelectedBackgroundColor,
                            unSelectedLabelColor: unSelectedLabelColor
                        });
                    })
                ),
                _react2.default.createElement(Indicator, _extends({ selected: this.state.selected }, this.props)),
                _react2.default.createElement(
                    'div',
                    { style: _extends({ margin: 8, padding: 8 }, tabContentStyle) },
                    this.content
                )
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
    selectedLabelColor: _propTypes2.default.string,
    unSelectedLabelColor: _propTypes2.default.string,
    selectedBackgroundColor: _propTypes2.default.string,
    unSelectedBackgroundColor: _propTypes2.default.string,
    indicatorColor: _propTypes2.default.string,
    defaultSelectedIndex: _propTypes2.default.number,
    style: _propTypes2.default.object,
    tabContentStyle: _propTypes2.default.object,
    indicatorStyle: _propTypes2.default.object,
    tabStyle: _propTypes2.default.object,
    fullWidth: _propTypes2.default.bool
};

var Tab = function (_React$Component2) {
    _inherits(Tab, _React$Component2);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
    }

    _createClass(Tab, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.id = (0, _generateId2.default)();
            window.id = this.id;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.children !== nextProps.children && nextProps.selectedTab === this.props.index) {
                nextProps.changeTab && nextProps.changeTab(this.props.index, nextProps.children, this.id);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.selectedTab === this.props.index && this.props.getId && this.props.getId(this.id);
            this.props.selectedTab == this.props.index && this.props.changeTab && this.props.changeTab(this.props.index, this.props.children, this.id);
        }
    }, {
        key: 'isSelected',
        value: function isSelected() {
            return this.props.selectedTab == this.props.index;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            this.props.selectedTab === this.props.index && this.props.getId && this.props.getId(this.id);
            var _props2 = this.props,
                style = _props2.style,
                selectedBackgroundColor = _props2.selectedBackgroundColor,
                _onClick = _props2.onClick,
                selectedLabelColor = _props2.selectedLabelColor,
                changeTab = _props2.changeTab,
                index = _props2.index,
                unSelectedBackgroundColor = _props2.unSelectedBackgroundColor,
                unSelectedLabelColor = _props2.unSelectedLabelColor,
                label = _props2.label,
                light = _props2.light,
                children = _props2.children;

            return _react2.default.createElement(
                _WaveEffect2.default,
                { light: light },
                _react2.default.createElement(
                    _Button2.default,
                    {
                        id: this.id,
                        style: _extends({
                            width: "100%",
                            color: this.isSelected() ? selectedLabelColor || "white" : unSelectedLabelColor || "white",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            backgroundColor: this.isSelected() ? selectedBackgroundColor || "" : unSelectedBackgroundColor || "",
                            minHeight: 48,
                            margin: 0
                        }, style),
                        onClick: function onClick(e) {
                            _onClick && _onClick(e);changeTab && changeTab(index, children, _this4.id);
                        },
                        accent: this.isSelected(),
                        primary: !selectedBackgroundColor,
                        raised: true },
                    label
                )
            );
        }
    }]);

    return Tab;
}(_react2.default.Component);

Tab.propTypes = {
    label: _propTypes2.default.any,
    style: _propTypes2.default.object,
    onClick: _propTypes2.default.func
};

var Indicator = function (_React$Component3) {
    _inherits(Indicator, _React$Component3);

    function Indicator() {
        _classCallCheck(this, Indicator);

        return _possibleConstructorReturn(this, (Indicator.__proto__ || Object.getPrototypeOf(Indicator)).apply(this, arguments));
    }

    _createClass(Indicator, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: _extends({
                    position: "relative",
                    margin: 0,
                    padding: 0,
                    backgroundColor: this.props.indicatorColor || "white",
                    transition: "0.4s",
                    height: 3,
                    top: -18,
                    zIndex: 10,
                    left: this.props.selected * (100 / this.props.children.length) + "%",
                    width: 100 / this.props.children.length + "%"
                }, this.props.indicatorStyle) });
        }
    }]);

    return Indicator;
}(_react2.default.Component);

exports.Tabs = Tabs;
exports.Tab = Tab;