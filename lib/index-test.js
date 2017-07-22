'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Utku on 23/06/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ComponentTestPage = function (_React$Component) {
    _inherits(ComponentTestPage, _React$Component);

    function ComponentTestPage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ComponentTestPage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentTestPage.__proto__ || Object.getPrototypeOf(ComponentTestPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = { custom: false }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ComponentTestPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _index.Card,
                { style: { padding: 8 } },
                _react2.default.createElement(_index.CardHeader, { title: 'Tab' }),
                _react2.default.createElement(
                    _index.Card,
                    { shadow: 3, style: { padding: 29 } },
                    _react2.default.createElement(
                        _index.Tabs,
                        null,
                        _react2.default.createElement(
                            _index.Tab,
                            { label: 'First' },
                            'First Tab'
                        ),
                        _react2.default.createElement(
                            _index.Tab,
                            { label: 'Second' },
                            'Second Tab'
                        )
                    )
                ),
                _react2.default.createElement(_index.CardHeader, { title: 'Tabs properties' }),
                _react2.default.createElement(
                    _index.Table,
                    null,
                    _react2.default.createElement(
                        _index.TableHeader,
                        null,
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableHeaderColumn,
                                null,
                                'Props'
                            ),
                            _react2.default.createElement(
                                _index.TableHeaderColumn,
                                null,
                                'Type'
                            ),
                            _react2.default.createElement(
                                _index.TableHeaderColumn,
                                null,
                                'Description'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _index.TableBody,
                        null,
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'selectedLabelColor'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'String'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'Color of selected tab label.'
                            )
                        ),
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'unSelectedLabelColor'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'String'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'Color of unselected tabs label.'
                            )
                        ),
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'selectedBackgroundColor'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'String'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                { longText: true },
                                'Color of selected tab background.'
                            )
                        ),
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'unSelectedBackgroundColor'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'Function'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                { longText: true },
                                'Color of unselected tabs background.'
                            )
                        ),
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'indicatorColor'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'String'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                { longText: true },
                                'Color of indicator.'
                            )
                        ),
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'onChange'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'Function'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                { longText: true },
                                'Get the info of selected tab.'
                            )
                        ),
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'defaultSelectedIndex'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'Function'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                { longText: true },
                                'Default selected index whend view did load.'
                            )
                        ),
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'style'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'Object'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                { longText: true },
                                'Style of tabs.'
                            )
                        ),
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'fullWidth'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'Boolean'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                { longText: true },
                                'If true, width of component set 100%.'
                            )
                        )
                    )
                ),
                _react2.default.createElement(_index.CardHeader, { title: 'Tab properties' }),
                _react2.default.createElement(
                    _index.Table,
                    null,
                    _react2.default.createElement(
                        _index.TableHeader,
                        null,
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableHeaderColumn,
                                null,
                                'Props'
                            ),
                            _react2.default.createElement(
                                _index.TableHeaderColumn,
                                null,
                                'Type'
                            ),
                            _react2.default.createElement(
                                _index.TableHeaderColumn,
                                null,
                                'Description'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _index.TableBody,
                        null,
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'label'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'String'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'Label of tabs.'
                            )
                        ),
                        _react2.default.createElement(
                            _index.TableRow,
                            null,
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'style'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'Object'
                            ),
                            _react2.default.createElement(
                                _index.TableRowColumn,
                                null,
                                'You can add your own css inline-style.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ComponentTestPage;
}(_react2.default.Component);

exports.default = ComponentTestPage;

_reactDom2.default.render(_react2.default.createElement(ComponentTestPage, null), document.getElementById("root"));
//