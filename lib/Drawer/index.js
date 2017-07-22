'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('@material/drawer/dist/mdc.drawer.css');

require('@material/list/dist/mdc.list.css');

var _mdc = require('@material/drawer/dist/mdc.drawer');

var _generateId = require('../utils/generateId');

var _generateId2 = _interopRequireDefault(_generateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by muratguney on 26/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Drawer = function (_PureComponent) {
    _inherits(Drawer, _PureComponent);

    function Drawer() {
        _classCallCheck(this, Drawer);

        return _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
    }

    _createClass(Drawer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.id = (0, _generateId2.default)();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.open !== undefined) this.drawer = new _mdc.MDCTemporaryDrawer(document.querySelector('#' + this.id + "drawer"));

            if (this.props.hasButton && this.props.open !== undefined) {
                this.drawer.foundation_.adapter_.deregisterInteractionHandler('click', this.drawer.foundation_.componentClickHandler_);
                this.drawer.foundation_.adapter_.deregisterDrawerInteractionHandler('click', this.drawer.foundation_.drawerClickHandler_);
            }
            if (this.props.open !== undefined) {
                document.querySelector('#' + this.id + "drawer").addEventListener('click', function (e) {
                    return e.target.id === _this2.id + "drawer" && _this2.props.onClose();
                });
            }
            window.drawer = this.drawer;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.open === true || nextProps.open === false) {
                this.drawer.open = nextProps.open;
                if (nextProps.open === true) {
                    document.getElementsByTagName('body')[0].style.overflow = "hidden";
                } else {
                    document.getElementsByTagName('body')[0].style.overflow = "scroll";
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.open !== undefined) return _react2.default.createElement(
                'aside',
                { id: this.id + "drawer", className: 'mdc-temporary-drawer mdc-typography', style: { zIndex: 99 } },
                _react2.default.createElement(
                    'nav',
                    { className: 'mdc-temporary-drawer__drawer' },
                    this.props.header && _react2.default.createElement(
                        'header',
                        { className: 'mdc-temporary-drawer__header', style: this.props.headerStyle },
                        _react2.default.createElement(
                            'div',
                            { className: 'mdc-temporary-drawer__header-content', style: this.props.headerContentStyle },
                            this.props.header
                        )
                    ),
                    _react2.default.createElement(
                        'nav',
                        { id: 'icon-with-text-demo', className: 'mdc-temporary-drawer__content mdc-list' },
                        this.props.children
                    )
                )
            );else return _react2.default.createElement(
                'nav',
                { className: 'mdc-permanent-drawer mdc-typography' },
                _react2.default.createElement(
                    'nav',
                    { id: 'icon-with-text-demo', style: this.props.headerStyle, className: 'mdc-list' },
                    this.props.header
                ),
                _react2.default.createElement(
                    'main',
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return Drawer;
}(_react.PureComponent);

Drawer.displayName = "Drawer";
Drawer.propTypes = {
    header: _propTypes2.default.any,
    onClose: _propTypes2.default.func,
    open: _propTypes2.default.bool,
    hasButton: _propTypes2.default.bool,
    headerStyle: _propTypes2.default.object,
    headerContentStyle: _propTypes2.default.object
};
exports.default = Drawer;