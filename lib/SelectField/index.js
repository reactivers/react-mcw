'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Option = exports.SelectField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('@material/select/dist/mdc.select.css');

require('@material/menu/dist/mdc.menu.css');

require('@material/list/dist/mdc.list.css');

var _mdc = require('@material/select/dist/mdc.select');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 27/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Option = function (_PureComponent) {
    _inherits(Option, _PureComponent);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                value = _props.value,
                dsc = _props.dsc,
                style = _props.style,
                otherProps = _objectWithoutProperties(_props, ['children', 'value', 'dsc', 'style']);

            return _react2.default.createElement(
                'li',
                _extends({ className: 'mdc-list-item', style: style, role: 'option', id: value, tabIndex: '0' }, otherProps),
                children || dsc
            );
        }
    }]);

    return Option;
}(_react.PureComponent);

Option.propTypes = {
    style: _react.PropTypes.object
};

var SelectField = function (_PureComponent2) {
    _inherits(SelectField, _PureComponent2);

    function SelectField() {
        _classCallCheck(this, SelectField);

        return _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).apply(this, arguments));
    }

    _createClass(SelectField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.select = new _mdc.MDCSelect(this.refs.selectField);

            if (this.props.style && this.props.style.width) this.refs.selectField.style.width = this.props.style.width + "px";

            if (this.props.onChange) this.select.listen('MDCSelect:change', this.props.onChange);
        }
    }, {
        key: 'render',
        value: function render() {
            var val = "val";
            var dsc = "dsc";

            var _props2 = this.props,
                children = _props2.children,
                data = _props2.data,
                valueField = _props2.valueField,
                dscField = _props2.dscField,
                style = _props2.style,
                menuStyle = _props2.menuStyle,
                menuItemStyle = _props2.menuItemStyle,
                otherProps = _objectWithoutProperties(_props2, ['children', 'data', 'valueField', 'dscField', 'style', 'menuStyle', 'menuItemStyle']);

            if (valueField) val = valueField;
            if (dscField) dsc = dscField;

            return _react2.default.createElement(
                'div',
                _extends({ className: 'mdc-select', ref: 'selectField', role: 'listbox', tabIndex: '0', style: style }, otherProps),
                _react2.default.createElement(
                    'span',
                    { className: 'mdc-select__selected-text' },
                    this.props.label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mdc-simple-menu mdc-select__menu' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'mdc-list mdc-simple-menu__items', style: menuStyle },
                        children,
                        data && data.map(function (item, index) {
                            return _react2.default.createElement(
                                'li',
                                { key: index, className: 'mdc-list-item', style: menuItemStyle, role: 'option', id: item[val],
                                    tabIndex: '6' },
                                item[dsc]
                            );
                        })
                    )
                )
            );
        }
    }]);

    return SelectField;
}(_react.PureComponent);

SelectField.propTypes = {
    data: _react.PropTypes.array,
    valueField: _react.PropTypes.object,
    dscField: _react.PropTypes.object,
    style: _react.PropTypes.object,
    menuStyle: _react.PropTypes.object,
    menuItemStyle: _react.PropTypes.object,
    onChange: _react.PropTypes.func
};
exports.SelectField = SelectField;
exports.Option = Option;