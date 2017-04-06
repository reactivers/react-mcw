'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableRowColumn = exports.TableRow = exports.TableHeaderColumn = exports.TableHeader = exports.TableBody = exports.Table = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../../docs/index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 03/04/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'table',
                { className: 'rmd-table', style: { width: "100%" } },
                this.props.children
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

var TableRow = function (_React$Component2) {
    _inherits(TableRow, _React$Component2);

    function TableRow() {
        _classCallCheck(this, TableRow);

        return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).apply(this, arguments));
    }

    _createClass(TableRow, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'tr',
                { className: 'rmd-table-row' },
                this.props.children
            );
        }
    }]);

    return TableRow;
}(_react2.default.Component);

var TableHeader = function (_React$Component3) {
    _inherits(TableHeader, _React$Component3);

    function TableHeader() {
        _classCallCheck(this, TableHeader);

        return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
    }

    _createClass(TableHeader, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'thead',
                { className: 'rmd-table-header' },
                this.props.children
            );
        }
    }]);

    return TableHeader;
}(_react2.default.Component);

var TableHeaderColumn = function (_React$Component4) {
    _inherits(TableHeaderColumn, _React$Component4);

    function TableHeaderColumn() {
        _classCallCheck(this, TableHeaderColumn);

        return _possibleConstructorReturn(this, (TableHeaderColumn.__proto__ || Object.getPrototypeOf(TableHeaderColumn)).apply(this, arguments));
    }

    _createClass(TableHeaderColumn, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'th',
                { className: 'rmd-table-header-column' },
                this.props.children
            );
        }
    }]);

    return TableHeaderColumn;
}(_react2.default.Component);

var TableBody = function (_React$Component5) {
    _inherits(TableBody, _React$Component5);

    function TableBody() {
        _classCallCheck(this, TableBody);

        return _possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).apply(this, arguments));
    }

    _createClass(TableBody, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'tbody',
                { className: 'rmd-table-body' },
                this.props.children
            );
        }
    }]);

    return TableBody;
}(_react2.default.Component);

var TableRowColumn = function (_React$Component6) {
    _inherits(TableRowColumn, _React$Component6);

    function TableRowColumn() {
        _classCallCheck(this, TableRowColumn);

        return _possibleConstructorReturn(this, (TableRowColumn.__proto__ || Object.getPrototypeOf(TableRowColumn)).apply(this, arguments));
    }

    _createClass(TableRowColumn, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'td',
                { className: (0, _classnames2.default)({ "rmd-table-row-column-nowrap": this.props.nowrap, "rmd-table-row-column-long-dsc": !this.props.nowrap }) },
                this.props.children
            );
        }
    }]);

    return TableRowColumn;
}(_react2.default.Component);

exports.Table = Table;
exports.TableBody = TableBody;
exports.TableHeader = TableHeader;
exports.TableHeaderColumn = TableHeaderColumn;
exports.TableRow = TableRow;
exports.TableRowColumn = TableRowColumn;