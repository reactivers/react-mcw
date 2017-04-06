'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../FAB/index');

var _index2 = _interopRequireDefault(_index);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

require('../index.scss');

var _index3 = require('../TextField/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 27/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultStyle = {
    menuOff: {
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s"
    },
    fabsOff: {
        position: "fixed",
        right: -210,
        bottom: 20,
        opacity: 0,
        zIndex: 65,
        transition: "0.4s"
    },
    menu: {
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
        transform: "rotate(-450deg)"
    }
};
var style = [{
    position: "fixed",
    right: 20,
    bottom: 20,
    zIndex: 65,
    transition: "0.4s"
}, {
    position: "fixed",
    right: 86,
    bottom: 20,
    zIndex: 65,
    transition: "0.4s"
}, {
    position: "fixed",
    right: 152,
    bottom: 20,
    zIndex: 65,
    transition: "0.4s"
}, {
    position: "fixed",
    right: 218,
    bottom: 20,
    zIndex: 65,
    transition: "0.4s"
}, {
    position: "fixed",
    right: 285,
    bottom: 20,
    zIndex: 65,
    transition: "0.4s"
}, {
    position: "fixed",
    right: 352,
    bottom: 20,
    zIndex: 65,
    transition: "0.4s"
}, {
    position: "fixed",
    right: 417,
    bottom: 20,
    zIndex: 65,
    transition: "0.4s"
}];

var FabMenu = function (_React$Component) {
    _inherits(FabMenu, _React$Component);

    function FabMenu(props) {
        _classCallCheck(this, FabMenu);

        var _this = _possibleConstructorReturn(this, (FabMenu.__proto__ || Object.getPrototypeOf(FabMenu)).call(this, props));

        _this.state = {
            open: false,
            new: false,
            title: null,
            values: [],
            val: '',
            ara: '',
            delete: false,
            search: '',
            edit: false,
            menuSwitcher: false,
            type: ''
        };
        _this.rerender = _this.rerender.bind(_this);
        return _this;
    }

    _createClass(FabMenu, [{
        key: 'searchBttn',
        value: function searchBttn() {

            this.setState({ ara: !this.state.ara });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.lastFabIndex();
        }
    }, {
        key: 'lastFabIndex',
        value: function lastFabIndex() {
            var _this2 = this;

            var maxIndex = 0;
            Object.keys(this.props).map(function (key) {
                return typeof _this2.props[key] === "number" && _this2.props[key] > maxIndex ? maxIndex = _this2.props[key] : maxIndex;
            });
            return maxIndex;
        }
    }, {
        key: 'searchField',
        value: function searchField(e) {
            var _this3 = this;

            var val = e.target.value;
            this.setState({ search: val }, function () {
                return _this3.props.onSearch && _this3.props.onSearch(val);
            });
        }
    }, {
        key: 'rerender',
        value: function rerender() {
            this.setState({ _ix: Math.random() });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_index2.default, { icon: 'menu', style: this.state.menuSwitcher ? defaultStyle.menu : defaultStyle.menuOff,
                    buttonColor: this.props.switcherColor,
                    onClick: function onClick() {
                        return _this4.setState({ menuSwitcher: !_this4.state.menuSwitcher, ara: false });
                    },
                    className: 'rmd-menu-button' }),
                this.props.showAdd > -1 && _react2.default.createElement(_index2.default, { icon: 'add', className: 'rmd-add-button',
                    style: this.state.menuSwitcher ? !this.state.ara ? style[this.props.showAdd] : this.props.showAdd > this.props.showSearch ? _extends({}, style[this.props.showAdd], {
                        right: style[this.props.showAdd].right - 65
                    }) : style[this.props.showAdd] : defaultStyle.fabsOff, onClick: this.props.onAdd }),
                this.props.showEdit > -1 && _react2.default.createElement(_index2.default, { icon: 'mode_edit', className: 'rmd-edit-button',
                    style: this.state.menuSwitcher ? !this.state.ara ? style[this.props.showEdit] : this.props.showEdit > this.props.showSearch ? _extends({}, style[this.props.showEdit], {
                        right: style[this.props.showEdit].right - 65
                    }) : style[this.props.showEdit] : defaultStyle.fabsOff, onClick: this.props.onEdit }),
                this.props.showDelete > -1 && _react2.default.createElement(_index2.default, { icon: this.props.delete ? "close" : "delete_forever", className: 'rmd-delete-button',
                    style: this.state.menuSwitcher ? !this.state.ara ? style[this.props.showDelete] : this.props.showDelete > this.props.showSearch ? _extends({}, style[this.props.showDelete], {
                        right: style[this.props.showDelete].right - 65
                    }) : style[this.props.showDelete] : defaultStyle.fabsOff, onClick: this.props.onDelete }),
                this.props.showPeopleAdd > -1 && _react2.default.createElement(_index2.default, { icon: 'person_add', className: 'rmd-person-add',
                    style: this.state.menuSwitcher ? !this.state.ara ? style[this.props.showPeopleAdd] : this.props.showPeopleAdd > this.props.showSearch ? _extends({}, style[this.props.showPeopleAdd], {
                        right: style[this.props.showPeopleAdd].right - 65
                    }) : style[this.props.showPeopleAdd] : defaultStyle.fabsOff, onClick: this.props.onPeopleAdd }),
                this.props.showCopy > -1 && _react2.default.createElement(_index2.default, { icon: 'content_copy', className: 'rmd-copy-button',
                    style: this.state.menuSwitcher ? !this.state.ara ? style[this.props.showCopy] : this.props.showCopy > this.props.showSearch ? _extends({}, style[this.props.showCopy], {
                        right: style[this.props.showCopy].right - 65
                    }) : style[this.props.showCopy] : defaultStyle.fabsOff, onClick: this.props.onCopy }),
                this.props.showSearch > -1 && _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('div', { style: this.state.ara ? _extends({}, style[this.props.showSearch], {
                            backgroundColor: 'gray',
                            width: 280,
                            opacity: 0.5,
                            right: 10,
                            bottom: 80,
                            position: "fixed",
                            height: 70,
                            transition: "0.4s"
                        }) : _extends({}, style[this.props.showSearch], { opacity: 0, width: 1, right: -320 }) }),
                    _react2.default.createElement(_index2.default, { onClick: this.searchBttn.bind(this),
                        style: this.state.menuSwitcher ? this.state.ara ? _extends({}, style[this.props.showSearch], {
                            right: 295,
                            bottom: 80
                        }) : style[this.props.showSearch] : defaultStyle.fabsOff,
                        className: 'rmd-search-button',
                        icon: 'search'
                    }),
                    _react2.default.createElement(_index4.default, { label: "Aramak İstediğiniz Kelimeyi Yazın",
                        floatingLabel: true,
                        placeholder: "Ara",
                        value: this.state.search,
                        onChange: this.searchField.bind(this),
                        textfieldStyle: { width: "100%" },
                        style: this.state.ara ? _extends({}, style[this.props.showSearch], {
                            opacity: 1,
                            width: 230,
                            right: 50,
                            color: "white",
                            zIndex: 67,
                            bottom: 80
                        }) : _extends({}, style[this.props.showSearch], { opacity: 0, width: 1, right: -320 })
                    }),
                    _react2.default.createElement(_IconButton2.default, {
                        onClick: this.state.search ? function () {
                            return _this4.setState({ search: '' }, function () {
                                return _this4.props.onSearch && _this4.props.onSearch('');
                            });
                        } : null,
                        style: this.state.search && this.state.ara ? _extends({}, style[this.props.showSearch], {
                            right: 10,
                            color: 'whitesmoke',
                            cursor: "pointer",
                            bottom: style[this.props.showSearch].bottom + 80,
                            zIndex: 68
                        }) : _extends({}, style[this.props.showSearch], {
                            right: -60,
                            bottom: style[this.props.showSearch].bottom + 80
                        }), iconName: 'clear' })
                ),
                this.props.children && _react2.default.createElement(
                    'div',
                    { style: !this.state.menuSwitcher ? defaultStyle.fabsOff : _extends({}, style[this.props.customStyle]) },
                    _react2.default.Children.map(this.props.children, function (child, index) {
                        return _react2.default.cloneElement(child, {
                            style: _this4.state.menuSwitcher ? !_this4.state.ara ? _extends({}, style[_this4.lastFabIndex()], {
                                right: style[_this4.lastFabIndex()].right + 67 * (index + 1)
                            }) : _this4.lastFabIndex() + index + 1 > _this4.props.showSearch ? _extends({}, style[_this4.lastFabIndex()], {
                                right: style[_this4.lastFabIndex()].right + 67 * index
                            }) : style[index] : defaultStyle.fabsOff
                        });
                    })
                )
            );
        }
    }]);

    return FabMenu;
}(_react2.default.Component);

FabMenu.displayName = "FabMenu";
FabMenu.propTypes = {
    showSearch: _react.PropTypes.number,
    showAdd: _react.PropTypes.number,
    showEdit: _react.PropTypes.number,
    showCopy: _react.PropTypes.number,
    showDelete: _react.PropTypes.number,
    showPeopleAdd: _react.PropTypes.number,
    onAdd: _react.PropTypes.func,
    onEdit: _react.PropTypes.func,
    onCopy: _react.PropTypes.func,
    onDelete: _react.PropTypes.func,
    onPeopleAdd: _react.PropTypes.func,
    onSearch: _react.PropTypes.func,
    switcherColor: _react.PropTypes.string
};
exports.default = FabMenu;