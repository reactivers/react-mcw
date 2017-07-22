'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _generateId = require('../utils/generateId');

var _generateId2 = _interopRequireDefault(_generateId);

require('@material/icon-toggle/dist/mdc.icon-toggle.css');

var _mdc = require('@material/icon-toggle/dist/mdc.iconToggle');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 26/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var IconToggle = function (_React$PureComponent) {
    _inherits(IconToggle, _React$PureComponent);

    function IconToggle() {
        _classCallCheck(this, IconToggle);

        return _possibleConstructorReturn(this, (IconToggle.__proto__ || Object.getPrototypeOf(IconToggle)).apply(this, arguments));
    }

    _createClass(IconToggle, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.iconToggleId = (0, _generateId2.default)();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var iconToggle = document.querySelector('#' + this.iconToggleId);
            iconToggle.addEventListener('MDCIconToggle:change', function (_ref) {
                var detail = _ref.detail;

                _this2.props.onStatusChange(detail.isOn);
            });
            _mdc.MDCIconToggle.attachTo(iconToggle);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                primary = _props.primary,
                accent = _props.accent,
                iconColor = _props.iconColor,
                textColor = _props.textColor,
                toggleOnIcon = _props.toggleOnIcon,
                toggleOffIcon = _props.toggleOffIcon,
                toggleText = _props.toggleText,
                disabled = _props.disabled;

            var rootClasses = (0, _classnames2.default)({
                "mdc-icon-toggle--primary": primary,
                "mdc-icon-toggle--accent": accent
            });
            var iconClasses = (0, _classnames2.default)("mdc-icon-toggle", "material-icons", {
                "mdc-icon-toggle--primary": primary,
                "mdc-icon-toggle--accent": accent
            });
            return _react2.default.createElement(
                'div',
                { className: rootClasses, style: { display: 'inline-block', textAlign: 'center', color: !(primary || accent) && !disabled && (textColor || "rgba(0, 0, 0, 0.54)") } },
                _react2.default.createElement('i', { id: this.iconToggleId, className: iconClasses, style: { color: !(primary || accent) && !disabled && iconColor }, role: 'button', 'aria-disabled': disabled,
                    'data-toggle-on': '{"content": "' + toggleOnIcon + '" }',
                    'data-toggle-off': '{"content": "' + toggleOffIcon + '" }' }),
                toggleText
            );
        }
    }]);

    return IconToggle;
}(_react2.default.PureComponent);

IconToggle.propTypes = {
    iconColor: _propTypes2.default.string,
    textColor: _propTypes2.default.string,
    toggleOnIcon: _propTypes2.default.string.isRequired,
    toggleOffIcon: _propTypes2.default.string.isRequired,
    toggleText: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    onStatusChange: _propTypes2.default.func,
    primary: _propTypes2.default.bool,
    accent: _propTypes2.default.bool
};
exports.default = IconToggle;