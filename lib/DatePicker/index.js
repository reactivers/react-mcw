'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Card = require('../Card');

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


_moment2.default.locale("tr");

var DatePick = function (_React$PureComponent) {
    _inherits(DatePick, _React$PureComponent);

    function DatePick(props) {
        _classCallCheck(this, DatePick);

        var _this = _possibleConstructorReturn(this, (DatePick.__proto__ || Object.getPrototypeOf(DatePick)).call(this, props));

        _this.state = {
            monthCounter: props.value ? (0, _moment2.default)(props.value).diff((0, _moment2.default)(), "months") : 0,
            selectedDate: props.value ? (0, _moment2.default)(props.value).format("D") * 1 : (0, _moment2.default)().format("D") * 1,
            initialValue: props.value
        };
        return _this;
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
        key: 'render',
        value: function render() {
            var _this2 = this;

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
                { style: { maxWidth: "310px", maxHeight: "512px" }, shadow: 20 },
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
                                return _this2.setState({ monthCounter: _this2.state.monthCounter - 12 }, function () {
                                    return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year((0, _moment2.default)().add(_this2.state.monthCounter, "months").format("Y")).month((0, _moment2.default)().add(_this2.state.monthCounter, "months").format("MMM")).date(_this2.state.selectedDate)._d);
                                });
                            },
                            iconName: "skip_previous" }),
                        _react2.default.createElement(_IconButton2.default, { iconSize: 24,
                            onClick: function onClick() {
                                return _this2.setState({ monthCounter: _this2.state.monthCounter - 1 }, function () {
                                    return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year((0, _moment2.default)().add(_this2.state.monthCounter, "months").format("Y")).month((0, _moment2.default)().add(_this2.state.monthCounter, "months").format("MMM")).date(_this2.state.selectedDate)._d);
                                });
                            },
                            iconName: "navigate_before" }),
                        monthFull + " " + year_Today,
                        _react2.default.createElement(_IconButton2.default, { iconSize: 24,
                            onClick: function onClick() {
                                return _this2.setState({ monthCounter: _this2.state.monthCounter + 1 }, function () {
                                    return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year((0, _moment2.default)().add(_this2.state.monthCounter, "months").format("Y")).month((0, _moment2.default)().add(_this2.state.monthCounter, "months").format("MMM")).date(_this2.state.selectedDate)._d);
                                });
                            },
                            iconName: "navigate_next" }),
                        _react2.default.createElement(_IconButton2.default, { iconSize: 24,
                            onClick: function onClick() {
                                return _this2.setState({ monthCounter: _this2.state.monthCounter + 12 }, function () {
                                    return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year((0, _moment2.default)().add(_this2.state.monthCounter, "months").format("Y")).month((0, _moment2.default)().add(_this2.state.monthCounter, "months").format("MMM")).date(_this2.state.selectedDate)._d);
                                });
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
                                            if (i2 === -1) {
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
                                            return _react2.default.createElement(
                                                'td',
                                                { key: index,
                                                    className: 'rmd-days',
                                                    onClick: function onClick() {
                                                        return _this2.setState({ selectedDate: i2 }, function () {
                                                            return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year(year_Today).month(month_Today).date(_this2.state.selectedDate)._d);
                                                        });
                                                    },
                                                    style: {
                                                        textAlign: 'center',
                                                        verticalAlign: 'middle',
                                                        width: 42,
                                                        backgroundColor: _this2.state.selectedDate === i2 && "#eee",
                                                        transition: "0.4s",
                                                        height: 34
                                                    } },
                                                i2
                                            );
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (7 <= index && index < 14) {
                                            if (i2 === -1) {
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
                                            return _react2.default.createElement(
                                                'td',
                                                { key: index,
                                                    onClick: function onClick() {
                                                        return _this2.setState({ selectedDate: i2 }, function () {
                                                            return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year(year_Today).month(month_Today).date(_this2.state.selectedDate)._d);
                                                        });
                                                    },
                                                    className: 'rmd-days',
                                                    style: {
                                                        textAlign: 'center',
                                                        verticalAlign: 'middle',
                                                        width: 42,
                                                        backgroundColor: _this2.state.selectedDate === i2 && "#eee",
                                                        transition: "0.4s",
                                                        height: 34
                                                    } },
                                                i2
                                            );
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (14 <= index && index < 21) {
                                            if (i2 === -1) {
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
                                            return _react2.default.createElement(
                                                'td',
                                                { key: index,
                                                    onClick: function onClick() {
                                                        return _this2.setState({ selectedDate: i2 }, function () {
                                                            return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year(year_Today).month(month_Today).date(_this2.state.selectedDate)._d);
                                                        });
                                                    },
                                                    className: 'rmd-days',
                                                    style: {
                                                        textAlign: 'center',
                                                        verticalAlign: 'middle',
                                                        width: 42,
                                                        backgroundColor: _this2.state.selectedDate === i2 && "#eee",
                                                        transition: "0.4s",
                                                        height: 34
                                                    } },
                                                i2
                                            );
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (21 <= index && index < 28) {
                                            if (i2 === -1) {
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
                                            return _react2.default.createElement(
                                                'td',
                                                { key: index,
                                                    onClick: function onClick() {
                                                        return _this2.setState({ selectedDate: i2 }, function () {
                                                            return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year(year_Today).month(month_Today).date(_this2.state.selectedDate)._d);
                                                        });
                                                    },
                                                    className: 'rmd-days',
                                                    style: {
                                                        textAlign: 'center',
                                                        verticalAlign: 'middle',
                                                        width: 42,
                                                        transition: "0.4s",
                                                        backgroundColor: _this2.state.selectedDate === i2 && "#eee",
                                                        height: 34
                                                    } },
                                                i2
                                            );
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (28 <= index && index < 35) {
                                            if (i2 === -1) {
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
                                            return _react2.default.createElement(
                                                'td',
                                                { key: index,
                                                    onClick: function onClick() {
                                                        return _this2.setState({ selectedDate: i2 }, function () {
                                                            return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year(year_Today).month(month_Today).date(_this2.state.selectedDate)._d);
                                                        });
                                                    },
                                                    className: 'rmd-days',
                                                    style: {
                                                        textAlign: 'center',
                                                        verticalAlign: 'middle',
                                                        width: 42,
                                                        backgroundColor: _this2.state.selectedDate === i2 && "#eee",
                                                        transition: "0.4s",
                                                        height: 34
                                                    } },
                                                i2
                                            );
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    dayArr.map(function (i2, index) {
                                        if (35 <= index && index < 42) {
                                            if (i2 === -1) {
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
                                            return _react2.default.createElement(
                                                'td',
                                                { key: index,
                                                    onClick: function onClick() {
                                                        return _this2.setState({ selectedDate: i2 }, function () {
                                                            return _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year(year_Today).month(month_Today).date(_this2.state.selectedDate)._d);
                                                        });
                                                    },
                                                    className: 'rmd-days',
                                                    style: {
                                                        textAlign: 'center',
                                                        verticalAlign: 'middle',
                                                        width: 42,
                                                        backgroundColor: _this2.state.selectedDate === i2 && "#eee",
                                                        transition: "0.4s",
                                                        height: 34
                                                    } },
                                                i2
                                            );
                                        }
                                    })
                                )
                            )
                        )
                    )
                ),
                this.props.open !== undefined && _react2.default.createElement(
                    'div',
                    { style: { width: '310px' } },
                    _react2.default.createElement(
                        _Button2.default,
                        { primary: true, onClick: function onClick() {
                                _this2.props.onChange && _this2.props.onChange(_this2.state.initialValue || (0, _moment2.default)()._d);_this2.state.initialValue ? _this2.setState({ monthCounter: (0, _moment2.default)(_this2.props.value).diff((0, _moment2.default)(), "months"), selectedDate: (0, _moment2.default)(_this2.props.value).format("D") * 1 }) : _this2.setState({ monthCounter: 0, selectedDate: (0, _moment2.default)().format("D") * 1 });_this2.props.onClose();
                            } },
                        'Cancel'
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        { primary: true, onClick: function onClick() {
                                _this2.props.onChange && _this2.props.onChange((0, _moment2.default)().year(year_Today).month(month_Today).date(_this2.state.selectedDate)._d);_this2.props.onClose();
                            } },
                        'Ok'
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
            if (this.props.open !== undefined) return _react2.default.createElement(
                _Dialog.Dialog,
                _extends({ style: { width: "auto", minWidth: 0, padding: 0, margin: 0 } }, this.props),
                _react2.default.createElement(
                    _Dialog.DialogContent,
                    { style: { width: "auto", minWidth: 0, padding: 0, margin: 0 } },
                    _react2.default.createElement(DatePick, this.props)
                )
            );else return _react2.default.createElement(DatePick, this.props);
        }
    }]);

    return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = {
    open: _react.PropTypes.bool,
    value: _react.PropTypes.string,
    onClose: _react.PropTypes.func,
    onChange: _react.PropTypes.func
};
exports.default = DatePicker;