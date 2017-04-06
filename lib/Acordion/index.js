'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('../List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Acordion = function (_React$Component) {
    _inherits(Acordion, _React$Component);

    function Acordion() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Acordion);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Acordion.__proto__ || Object.getPrototypeOf(Acordion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Acordion, [{
        key: 'selectItem',
        value: function selectItem(index, element) {
            var _this2 = this;

            if (this.state.index !== index) this.setState({ index: index }, function () {
                return _this2.props.onClick && _this2.props.onClick();
            });else this.setState({ index: -1 }, function () {
                return _this2.props.onClick && _this2.props.onClick();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                label = _props.label,
                data = _props.data,
                open = _props.open,
                dscField = _props.dscField;


            if (!data) {
                data = [{ dsc: label }];
                dscField = "dsc";
            } else {
                if (!dscField) {
                    dscField = "dsc";
                }
            }
            return _react2.default.createElement(
                _List.List,
                null,
                data && data.map(function (item, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: index },
                        _react2.default.createElement(
                            _List.ListItem,
                            { onClick: _this3.selectItem.bind(_this3, index) },
                            item[dscField]
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: {
                                    maxHeight: open || _this3.state.index === index ? 5000 : 0,
                                    marginLeft: open || _this3.state.index === index ? 0 : -40,
                                    opacity: open || _this3.state.index === index ? 1 : 0,
                                    pointerEvents: open || _this3.state.index === index ? "auto" : "none",
                                    transition: "1s"
                                } },
                            _this3.props.child ? _react2.default.createElement(_this3.props.child, { item: item, index: index }) : _this3.props.children
                        )
                    );
                })
            );
        }
    }]);

    return Acordion;
}(_react2.default.Component);

Acordion.propTypes = {
    data: _react.PropTypes.array,
    label: _react.PropTypes.string,
    open: _react.PropTypes.bool,
    child: _react.PropTypes.any,
    onClick: _react.PropTypes.func
};
exports.default = Acordion;