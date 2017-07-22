'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FAB = require('../FAB');

var _FAB2 = _interopRequireDefault(_FAB);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

require('./FabMenu.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* FABNav için FabNav.css import et*/

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
            hide: 1,
            edit: false,
            menuSwitcher: props.initialOpen || false,
            type: ''
        };
        return _this;
    }

    _createClass(FabMenu, [{
        key: 'searchBttn',
        value: function searchBttn() {
            this.setState({ ara: !this.state.ara });
        }
    }, {
        key: 'searchField',
        value: function searchField(e) {
            var _this2 = this;

            var val = e.target.value;
            this.setState({ search: val }, function () {
                return _this2.props.onSearch && _this2.props.onSearch(val);
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this3 = this;

            this.maxIndexes = [0, 0, 0, 0, 0, 0];
            this.buttonIndexes = Object.keys(this.props).map(function (key) {
                return typeof _this3.props[key] === "number" && _this3.props[key];
            }).filter(function (i) {
                return i;
            }).sort();
            this.buttonIndexes.forEach(function (i, ind) {
                return _this3.maxIndexes[i - 1] += 1;
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextState) {
            var _this4 = this;

            if (nextProps != this.props) {
                this.maxIndexes = [0, 0, 0, 0, 0, 0];
                this.buttonIndexes = Object.keys(this.props).map(function (key) {
                    return typeof _this4.props[key] === "number" && _this4.props[key];
                }).filter(function (i) {
                    return i;
                }).sort();
                this.buttonIndexes.forEach(function (i, ind) {
                    return _this4.maxIndexes[i - 1] += 1;
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            this.maxIndexes = [0, 0, 0, 0, 0, 0];
            this.buttonIndexes = Object.keys(this.props).map(function (key) {
                return typeof _this5.props[key] === "number" && _this5.props[key];
            }).filter(function (i) {
                return i;
            }).sort();
            this.buttonIndexes.forEach(function (i, ind) {
                return _this5.maxIndexes[i - 1] += 1;
            });

            this.index = 0;
            var _props = this.props,
                showSearch = _props.showSearch,
                showAdd = _props.showAdd,
                showPeopleAdd = _props.showPeopleAdd,
                showCopy = _props.showCopy,
                showDelete = _props.showDelete,
                showEdit = _props.showEdit,
                switcherColor = _props.switcherColor,
                onSearch = _props.onSearch,
                children = _props.children,
                onDelete = _props.onDelete,
                onPeopleAdd = _props.onPeopleAdd,
                onEdit = _props.onEdit,
                onCopy = _props.onCopy,
                onAdd = _props.onAdd;


            var add = this.state.ara && showSearch <= showAdd ? showAdd - 1 : showAdd;
            var edit = this.state.ara && showSearch <= showEdit ? showEdit - 1 : showEdit;
            var remove = this.state.ara && showSearch <= showDelete ? showDelete - 1 : showDelete;
            var copy = this.state.ara && showSearch <= showCopy ? showCopy - 1 : showCopy;
            var peopleAdd = this.state.ara && showSearch <= showPeopleAdd ? showPeopleAdd - 1 : showPeopleAdd;
            var search = this.state.ara ? showSearch - 1 : showSearch;

            return _react2.default.createElement(
                'div',
                { className: 'fab-menu', id: 'fab-menu' },
                _react2.default.createElement(_FAB2.default, { className: this.state.menuSwitcher ? "menu-fab-button" : "menu-fab-button-off",
                    icon: 'menu',
                    style: { display: "flex", justifyContent: "center", alignItems: "center" },
                    onClick: function onClick() {
                        return _this5.setState({ menuSwitcher: !_this5.state.menuSwitcher, ara: false });
                    } }),
                showAdd > -1 && _react2.default.createElement(_FAB2.default, {
                    className: "add-fab-button " + (this.state.menuSwitcher ? "fab-button-" + add : "fab-button-off"),
                    onClick: onAdd, icon: 'add' }),
                showEdit > -1 && _react2.default.createElement(_FAB2.default, {
                    className: "edit-fab-button " + (this.state.menuSwitcher ? "fab-button-" + edit : "fab-button-off"),
                    onClick: onEdit, icon: 'mode_edit' }),
                showDelete > -1 && _react2.default.createElement(_FAB2.default, {
                    className: "delete-fab-button " + (this.state.menuSwitcher ? "fab-button-" + remove : "fab-button-off"),
                    onClick: onDelete, icon: this.props.delete ? "close" : "delete_forever" }),
                showPeopleAdd > -1 && _react2.default.createElement(_FAB2.default, {
                    className: "person-add-fab-button " + (this.state.menuSwitcher ? "fab-button-" + peopleAdd : "fab-button-off"),
                    onClick: onPeopleAdd, icon: 'person_add' }),
                showCopy > -1 && _react2.default.createElement(_FAB2.default, {
                    className: "copy-fab-button " + (this.state.menuSwitcher ? "fab-button-" + copy : "fab-button-off"),
                    onClick: onCopy, icon: 'content_copy' }),
                showSearch > -1 && _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('div', {
                        className: this.state.menuSwitcher ? this.state.ara ? "search-textfield-background-fab-button search-textfield-background-fab-button-" + search : "search-textfield-background-fab-off-button search-textfield-background-fab-off-button-" + showSearch : "search-textfield-background-fab-off-button-" + showSearch }),
                    _react2.default.createElement(_FAB2.default, { onClick: this.searchBttn.bind(this),
                        className: "search-fab-button " + (this.state.menuSwitcher ? this.state.ara ? "search-on-fab-button search-on-fab-button-" + search : "fab-button-" + search : "fab-button-off"),
                        style: { borderRadius: this.state.ara && "50%" },
                        icon: 'search'
                    }),
                    _react2.default.createElement(_TextField2.default, { label: 'Aramak \u0130stedi\u011Finiz Kelimeyi Yaz\u0131n',
                        onChange: this.searchField.bind(this),
                        value: this.state.search,
                        textfieldStyle: { width: 290 },
                        className: this.state.menuSwitcher ? this.state.ara ? "search-fab-button-textfield search-fab-button-textfield-" + search : "search-fab-off-button-textfield search-fab-off-button-textfield-" + search : "search-fab-off-button-textfield search-fab-off-button-textfield-" + search,
                        onKeyPress: function onKeyPress(e) {
                            return e.key == 'Enter' && _this5.setState({ ara: false });
                        }
                    }),
                    _react2.default.createElement(_IconButton2.default, { iconName: 'clear',
                        onClick: this.state.search ? function () {
                            return _this5.setState({ search: '' }, function () {
                                return onSearch && onSearch('');
                            });
                        } : null,
                        className: this.state.menuSwitcher ? this.state.ara ? "search-fab-clear-button search-fab-clear-button-" + search : "search-fab-off-clear-button search-fab-off-clear-button-" + search : "search-fab-off-clear-button search-fab-off-clear-button-" + search })
                ),
                children && this.maxIndexes.map(function (i1, index) {
                    if (i1 == 0 && _this5.index >= 0) {
                        if (children.length) {
                            _this5.index++;
                        } else {
                            _this5.index = -1;
                        }
                        return _react2.default.createElement(
                            'div',
                            { key: index,
                                className: _this5.state.menuSwitcher ? "fab-button-" + (_this5.state.ara && showSearch < index + 1 ? index + 1 - 1 : index + 1) : "fab-button-off" },
                            children.length ? children[_this5.index - 1] : children
                        );
                    }
                })
            );
        }
    }]);

    return FabMenu;
}(_react2.default.Component);

FabMenu.displayName = "FabMenu";
FabMenu.propTypes = {
    showSearch: _propTypes2.default.number,
    showAdd: _propTypes2.default.number,
    showEdit: _propTypes2.default.number,
    showCopy: _propTypes2.default.number,
    showDelete: _propTypes2.default.number,
    showPeopleAdd: _propTypes2.default.number,
    onAdd: _propTypes2.default.func,
    onEdit: _propTypes2.default.func,
    onCopy: _propTypes2.default.func,
    onDelete: _propTypes2.default.func,
    onPeopleAdd: _propTypes2.default.func,
    onSearch: _propTypes2.default.func,
    initialOpen: _propTypes2.default.bool
};
exports.default = FabMenu;