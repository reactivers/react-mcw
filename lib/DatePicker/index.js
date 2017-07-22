'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Card = require('../Card');

var _mdc = require('@material/menu/dist/mdc.menu');

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('../Dialog');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 27/03/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/* eslint-disable */


var DateDialog = function (_React$PureComponent) {
    _inherits(DateDialog, _React$PureComponent);

    function DateDialog(props) {
        _classCallCheck(this, DateDialog);

        var _this = _possibleConstructorReturn(this, (DateDialog.__proto__ || Object.getPrototypeOf(DateDialog)).call(this, props));

        _moment2.default.locale(_this.props.locale);
        _this.state = {
            isOpen: _this.props.open,
            format: _moment2.default.localeData()._longDateFormat.L,
            displayVal: ""
        };
        return _this;
    }

    _createClass(DateDialog, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (this.props.format) {
                this.setState({ format: this.props.format });
            }
            if (this.props.value) {
                this.setState({ displayVal: this.props.value }, function () {
                    return _this2.props.onChange(_this2.state.displayVal);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_TextField2.default, {
                    disabled: this.props.disabled || this.props.disableTextInput,
                    rightIcon: "date_range",
                    onChange: function onChange(e) {
                        return _this3.setState({ displayVal: e.target.value });
                    },
                    value: this.state.displayVal,
                    onBlur: function onBlur() {
                        if (!(0, _moment2.default)(_this3.state.displayVal, _this3.state.format).isValid()) {
                            _this3.setState({ displayVal: "" });
                        } else {
                            if (_this3.props.onChange) {
                                _this3.props.onChange(_this3.state.displayVal);
                            }
                        }
                    },
                    rightIconClick: !this.props.disabled ? function () {
                        _this3.setState({ isOpen: true });
                    } : null }),
                _react2.default.createElement(
                    _Dialog.Dialog,
                    { style: { width: "auto", minWidth: 0, padding: 0, margin: 0 }, open: this.state.isOpen,
                        onClose: function onClose() {
                            return _this3.setState({ isOpen: false }, function () {
                                return _this3.props.onClose();
                            });
                        } },
                    _react2.default.createElement(
                        _Dialog.DialogContent,
                        { style: { width: "auto", minWidth: 0, padding: 0, margin: 0 } },
                        _react2.default.createElement(DatePick, {
                            format: this.state.format,
                            minDate: this.props.minDate,
                            maxDate: this.props.maxDate,
                            onChange: function onChange(xdate) {
                                return _this3.setState({ displayVal: (0, _moment2.default)(xdate).format(_this3.state.format) }, function () {
                                    return _this3.props.onChange((0, _moment2.default)(xdate).format(_this3.state.format));
                                });
                            },
                            shadow: '20' })
                    )
                )
            );
        }
    }]);

    return DateDialog;
}(_react2.default.PureComponent);

DateDialog.defaultProps = {
    locale: 'en',
    disabled: false,
    disableTextInput: false,
    onChange: function onChange() {
        return null;
    },
    onClose: function onClose() {
        return null;
    },
    open: false
};

var DateMenu = function (_React$PureComponent2) {
    _inherits(DateMenu, _React$PureComponent2);

    function DateMenu(props) {
        _classCallCheck(this, DateMenu);

        var _this4 = _possibleConstructorReturn(this, (DateMenu.__proto__ || Object.getPrototypeOf(DateMenu)).call(this, props));

        _moment2.default.locale(_this4.props.locale);
        _this4.state = {
            displayVal: "",
            format: _moment2.default.localeData()._longDateFormat.L
        };
        _this4.recoverCloseFunction = _this4.closeFunction.bind(_this4);
        return _this4;
    }

    _createClass(DateMenu, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this5 = this;

            if (this.props.format) {
                this.setState({ format: this.props.format });
            }
            if (this.props.value) {
                this.setState({ displayVal: this.props.value }, function () {
                    return _this5.props.onChange(_this5.state.displayVal);
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this6 = this;

            this.dateMenu = new _mdc.MDCSimpleMenu(document.querySelector(".mdc-simple-menu"));
            if (this.props.onMenuClose) {
                this.dateMenu.foundation_.adapter_.notifyCancel = function () {
                    return _this6.props.onMenuClose();
                };
            }
            if (this.props.getSelectedIndex) {
                this.dateMenu.foundation_.adapter_.notifySelected = function (e) {
                    return _this6.props.getSelectedIndex(e);
                };
            }
            this.tempClose = this.dateMenu.foundation_.close;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this7 = this;

            this.setState({ displayVal: (0, _moment2.default)(nextProps.date).format(this.state.format) }, function () {
                return _this7.props.onChange(_this7.state.displayVal);
            });
        }
    }, {
        key: 'closeFunction',
        value: function closeFunction(event) {
            if (event.target !== this.refs.dateMenuDiv && !this.refs.dateMenuDiv.contains(event.target)) {
                this.dateMenu.foundation_.close = this.tempClose;
                this.dateMenu.foundation_.close();
                document.body.removeEventListener('click', this.recoverCloseFunction, true);
            } else {
                this.dateMenu.foundation_.close = function () {
                    return null;
                };
            }
        }
    }, {
        key: 'openMenu',
        value: function openMenu(event, exitCode) {
            if (this.dateMenu.open === true) {
                if ((typeof event === 'undefined' ? 'undefined' : _typeof(event)) == "object" && event.target.parentElement.id == this.refs.dateTextRef.textFieldId || event == "menu_buttons") {
                    document.body.removeEventListener('click', this.recoverCloseFunction, true);
                    this.dateMenu.foundation_.close = this.tempClose;
                    this.dateMenu.foundation_.close();
                }
            } else {
                document.body.addEventListener('click', this.recoverCloseFunction, true);
                this.dateMenu.show();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            console.log("format", this.props.format, "st", this.state.format);
            return _react2.default.createElement(
                'div',
                { ref: 'dateMenuDiv' },
                _react2.default.createElement(_TextField2.default, {
                    disabled: this.props.disabled || this.props.disableTextInput,
                    rightIcon: "date_range",
                    onChange: function onChange(e) {
                        return _this8.setState({ displayVal: e.target.value });
                    },
                    value: this.state.displayVal,
                    onBlur: function onBlur() {
                        if (!(0, _moment2.default)(_this8.state.displayVal, _this8.state.format).isValid()) {
                            _this8.setState({ displayVal: "" });
                        } else {
                            _this8.props.onChange(_this8.state.displayVal);
                        }
                    },
                    ref: 'dateTextRef',
                    rightIconClick: !this.props.disabled ? function (e) {
                        _this8.openMenu(e);
                    } : null }),
                _react2.default.createElement(
                    'div',
                    { className: 'mdc-simple-menu', tabIndex: '-1' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mdc-simple-menu__items deleleteMargin' },
                        _react2.default.createElement(DatePick, {
                            acceptLabel: 'Tamam',
                            cancelLabel: '\u0130ptal',
                            onClose: function onClose() {
                                return _this8.openMenu("menu_buttons");
                            },
                            format: this.state.format,
                            minDate: this.props.minDate,
                            maxDate: this.props.maxDate,
                            onChange: function onChange(xdate) {
                                return _this8.setState({ displayVal: (0, _moment2.default)(xdate).format(_this8.state.format) }, function () {
                                    return _this8.props.onChange((0, _moment2.default)(xdate).format(_this8.state.format));
                                });
                            },
                            shadow: '1' })
                    )
                )
            );
        }
    }]);

    return DateMenu;
}(_react2.default.PureComponent);

DateMenu.defaultProps = {
    locale: 'en',
    disabled: false,
    disableTextInput: false,
    onChange: function onChange() {
        return null;
    }
};

var DatePick = function (_React$PureComponent3) {
    _inherits(DatePick, _React$PureComponent3);

    function DatePick(props) {
        _classCallCheck(this, DatePick);

        var _this9 = _possibleConstructorReturn(this, (DatePick.__proto__ || Object.getPrototypeOf(DatePick)).call(this, props));

        _this9.state = {
            monthCounter: props.value ? (0, _moment2.default)(props.value).diff((0, _moment2.default)(), "months") : 0,
            selectedDate: props.value ? (0, _moment2.default)(props.value).format("D") * 1 : (0, _moment2.default)().format("D") * 1,
            initialValue: props.value
        };
        return _this9;
    }

    _createClass(DatePick, [{
        key: 'getNextMonth',
        value: function getNextMonth(count) {
            var vars = void 0;
            vars = {
                day_Today: (0, _moment2.default)().add(count, "months").format("D"),
                month_Today: (0, _moment2.default)().add(count, "months").format("MMM"),
                monthFull: (0, _moment2.default)().add(count, "months").format("MMMM"),
                year_Today: (0, _moment2.default)().add(count, "months").format("Y"),
                dayName_Today: (0, _moment2.default)().add(count, "months").format("ddd"),
                fullDate: (0, _moment2.default)().add(count, "months")
            };
            return vars;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.localeWeekDays = (0, _moment2.default)()._locale._weekdaysMin;
        }
    }, {
        key: 'getFirstAndLastDay',
        value: function getFirstAndLastDay(datex) {
            var date = datex ? new Date(datex) : new Date();
            var y = date.getFullYear();
            var m = date.getMonth();
            var firstDay = new Date(y, m, 1);
            var lastDay = new Date(y, m + 1, 0);
            return {
                frstD: (0, _moment2.default)(firstDay).format("dd"),
                firstDayTh: parseInt((0, _moment2.default)(firstDay).format("d")),
                lastDay: (0, _moment2.default)(lastDay).format("dd"),
                lastDayTh: parseInt((0, _moment2.default)(lastDay).format("d"))
            };
        }
    }, {
        key: 'canChangeDate',
        value: function canChangeDate(currentDate, months) {
            var fullDate = Object.assign({}, currentDate);
            fullDate = (0, _moment2.default)(fullDate);
            console.log(fullDate);
            fullDate.add(months, "months");
            if (this.props.minDate) {
                var minDate = (0, _moment2.default)(this.props.minDate, this.props.format).startOf('day');
                if (fullDate.year() == minDate.year() && fullDate.month() == minDate.month() && this.state.selectedDate < minDate.date()) {
                    this.setState({ selectedDate: minDate.date() });
                }
                if (minDate.isAfter((0, _moment2.default)().startOf('day').year(fullDate.year()).month(fullDate.month()).date(minDate.date()))) {
                    return false;
                }
            }
            if (this.props.maxDate) {
                var maxDate = (0, _moment2.default)(this.props.maxDate, this.props.format);
                if (fullDate.year() == maxDate.year() && fullDate.month() == maxDate.month() && this.state.selectedDate > maxDate.date()) {
                    this.setState({ selectedDate: maxDate.date() });
                }

                if (maxDate.isBefore((0, _moment2.default)().startOf('day').year(fullDate.year()).month(fullDate.month()).date(1))) {
                    return false;
                }
            }

            console.log("returned", true);
            return true;
        }
    }, {
        key: 'generateDay',
        value: function generateDay(year_Today, month_Today, day, index) {
            var _this10 = this;

            var isDisabled = false;

            if ((this.props.minDate || this.props.maxDate) && (0, _moment2.default)(this.props.maxDate, this.props.format).startOf('day').isBefore((0, _moment2.default)().startOf('day').year(year_Today).month(month_Today).date(day)) || (0, _moment2.default)(this.props.minDate, this.props.format).startOf('day').isAfter((0, _moment2.default)().startOf('day').year(year_Today).month(month_Today).date(day))) {
                isDisabled = true;
            }
            return _react2.default.createElement(
                'td',
                { key: index,
                    className: isDisabled ? "rmd-days-disabled" : "rmd-days",
                    onClick: isDisabled ? null : function () {
                        return _this10.setState({ selectedDate: day });
                    },
                    style: {
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        width: 42,
                        backgroundColor: this.state.selectedDate === day && "#eee",
                        transition: "0.4s",
                        height: 34
                    } },
                day
            );
        }
    }, {
        key: 'emptyDay',
        value: function emptyDay(index) {
            return _react2.default.createElement('td', { key: index, style: {
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    width: 42,
                    cursor: "auto",
                    backgroundColor: "white",
                    transition: "0.4s",
                    height: 34
                } });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this11 = this;

            var _getNextMonth = this.getNextMonth(this.state.monthCounter),
                month_Today = _getNextMonth.month_Today,
                monthFull = _getNextMonth.monthFull,
                year_Today = _getNextMonth.year_Today,
                fullDate = _getNextMonth.fullDate;

            var firstAndLast = this.getFirstAndLastDay(fullDate);
            var dayArr = Array.apply(null, Array(42));
            var i = void 0,
                j = 1;
            for (i = 0; i < 42; i++) {
                if (i < firstAndLast.firstDayTh || i > (0, _moment2.default)(fullDate).daysInMonth() + firstAndLast.firstDayTh - 1) dayArr[i] = -1;else {
                    dayArr[i] = j;
                    j++;
                }
            }
            window.mom = _moment2.default;
            return _react2.default.createElement(
                _Card.Card,
                { style: { maxWidth: "310px", maxHeight: "512px" }, shadow: this.props.shadow },
                _react2.default.createElement(
                    'div',
                    { className: 'rmd-date-picker', style: { width: "310px", height: "104px" } },
                    _react2.default.createElement(
                        'div',
                        { style: { padding: "20px" } },
                        _react2.default.createElement(
                            'div',
                            { style: {
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    color: "rgba(255,255,255,0.5)"
                                } },
                            year_Today
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: {
                                    fontSize: "36px",
                                    height: "38px",
                                    fontWeight: "500"
                                } },
                            (0, _moment2.default)().year(year_Today).month(month_Today).date(this.state.selectedDate).format("ddd") + ', ' + month_Today + ' ' + this.state.selectedDate
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { width: "310px", height: "312px" } },
                    _react2.default.createElement(
                        'div',
                        { style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px 10px 0px 10px"
                            } },
                        _react2.default.createElement(_IconButton2.default, { iconSize: 24,
                            onClick: function onClick() {
                                return _this11.canChangeDate(fullDate, -12) ? _this11.setState({ monthCounter: _this11.state.monthCounter - 12 }) : null;
                            },
                            iconName: "skip_previous" }),
                        _react2.default.createElement(_IconButton2.default, { iconSize: 24,
                            onClick: function onClick() {
                                return _this11.canChangeDate(fullDate, -1) ? _this11.setState({ monthCounter: _this11.state.monthCounter - 1 }) : null;
                            },
                            iconName: "navigate_before" }),
                        monthFull + " " + year_Today,
                        _react2.default.createElement(_IconButton2.default, { iconSize: 24,
                            onClick: function onClick() {
                                return _this11.canChangeDate(fullDate, +1) ? _this11.setState({ monthCounter: _this11.state.monthCounter + 1 }) : null;
                            },
                            iconName: "navigate_next" }),
                        _react2.default.createElement(_IconButton2.default, { iconSize: 24,
                            onClick: function onClick() {
                                return _this11.canChangeDate(fullDate, +12) ? _this11.setState({ monthCounter: _this11.state.monthCounter + 12 }) : null;
                            },
                            iconName: "skip_next" })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'table',
                            { style: { fontSize: "12px", fontWeight: "400" } },
                            _react2.default.createElement(
                                'thead',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    this.localeWeekDays.map(function (i1, index) {
                                        return _react2.default.createElement(
                                            'td',
                                            { key: index,
                                                style: {
                                                    textAlign: 'center',
                                                    verticalAlign: 'middle',
                                                    width: 42,
                                                    cursor: "auto",
                                                    backgroundColor: "white",
                                                    transition: "0.4s",
                                                    height: 34,
                                                    color: 'rgba(0,0,0,0.5)'
                                                } },
                                            i1
                                        );
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                'tbody',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {

                                        if (index < 7) {
                                            if (i2 === -1) return _this11.emptyDay(index);else return _this11.generateDay(year_Today, month_Today, i2, index);
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (7 <= index && index < 14) {
                                            if (i2 === -1) return _this11.emptyDay(index);else return _this11.generateDay(year_Today, month_Today, i2, index);
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (14 <= index && index < 21) {
                                            if (i2 === -1) return _this11.emptyDay(index);else return _this11.generateDay(year_Today, month_Today, i2, index);
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (21 <= index && index < 28) {
                                            if (i2 === -1) return _this11.emptyDay(index);else return _this11.generateDay(year_Today, month_Today, i2, index);
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (28 <= index && index < 35) {
                                            if (i2 === -1) return _this11.emptyDay(index);else return _this11.generateDay(year_Today, month_Today, i2, index);
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (35 <= index && index < 42) {
                                            if (i2 === -1) return _this11.emptyDay(index);else return _this11.generateDay(year_Today, month_Today, i2, index);
                                        }
                                    })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { width: '310px' } },
                    _react2.default.createElement(
                        _Button2.default,
                        { primary: true, onClick: function onClick() {
                                _this11.props.onClose();
                            } },
                        this.props.cancelLabel
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        { primary: true, onClick: function onClick() {
                                _this11.props.onChange && _this11.props.onChange((0, _moment2.default)().year(year_Today).month(month_Today).date(_this11.state.selectedDate)._d);
                                _this11.props.onClose();
                            } },
                        this.props.acceptLabel
                    )
                )
            );
        }
    }]);

    return DatePick;
}(_react2.default.PureComponent);

var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker() {
        _classCallCheck(this, DatePicker);

        return _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
    }

    _createClass(DatePicker, [{
        key: 'render',
        value: function render() {
            if (this.props.type == "dialog") {
                return _react2.default.createElement(
                    _Dialog.Dialog,
                    _extends({ style: { width: "auto", minWidth: 0, padding: 0, margin: 0 } }, this.props),
                    _react2.default.createElement(
                        _Dialog.DialogContent,
                        { style: { width: "auto", minWidth: 0, padding: 0, margin: 0 } },
                        _react2.default.createElement(DatePick, _extends({}, this.props, { shadow: '20' }))
                    )
                );
            } else {
                return _react2.default.createElement(DateMenu, { minDate: '30/08/2009', locale: 'tr', maxDate: '23/08/2018' });
            }
        }
    }]);

    return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = {
    type: _propTypes2.default.string,
    open: _propTypes2.default.bool,
    value: _propTypes2.default.string,
    onClose: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    format: _propTypes2.default.string,
    locale: _propTypes2.default.string,
    // disableYearSelection: PropTypes.bool,
    disableTextInput: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    minDate: _propTypes2.default.string,
    maxDate: _propTypes2.default.string
};
exports.default = DatePicker;