'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Grid = exports.GridContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('@material/layout-grid/dist/mdc.layout-grid.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 26/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GridContainer = exports.GridContainer = function (_React$PureComponent) {
    _inherits(GridContainer, _React$PureComponent);

    function GridContainer() {
        _classCallCheck(this, GridContainer);

        return _possibleConstructorReturn(this, (GridContainer.__proto__ || Object.getPrototypeOf(GridContainer)).apply(this, arguments));
    }

    _createClass(GridContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                _extends({ className: 'mdc-layout-grid' }, this.props),
                this.props.children
            );
        }
    }]);

    return GridContainer;
}(_react2.default.PureComponent);

var Grid = exports.Grid = function (_React$PureComponent2) {
    _inherits(Grid, _React$PureComponent2);

    function Grid() {
        _classCallCheck(this, Grid);

        return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
    }

    _createClass(Grid, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                col = _props.col,
                tablet = _props.tablet,
                phone = _props.phone,
                otherProps = _objectWithoutProperties(_props, ['col', 'tablet', 'phone']);

            var gridClasses = (0, _classnames2.default)("mdc-layout-grid__cell", (_classNames = {}, _defineProperty(_classNames, "mdc-layout-grid__cell--span-" + this.props.col, this.props.col), _defineProperty(_classNames, "mdc-layout-grid__cell--span-" + this.props.tablet + "-tablet", this.props.tablet), _defineProperty(_classNames, "mdc-layout-grid__cell--span-" + this.props.phone + "-phone", this.props.phone), _classNames));
            return _react2.default.createElement(
                'div',
                _extends({ className: gridClasses }, otherProps),
                this.props.children
            );
        }
    }]);

    return Grid;
}(_react2.default.PureComponent);

Grid.propTypes = {
    col: _propTypes2.default.number,
    tablet: _propTypes2.default.number,
    phone: _propTypes2.default.number
};