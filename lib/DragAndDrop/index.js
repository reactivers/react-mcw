"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragAndDrop = function (_React$Component) {
    _inherits(DragAndDrop, _React$Component);

    function DragAndDrop() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DragAndDrop);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DragAndDrop.__proto__ || Object.getPrototypeOf(DragAndDrop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DragAndDrop, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.oldMouseDown = document.onmousedown;
            this.oldMouseUp = document.onmouseup;

            document.onmouseup = function (e) {
                this.setState({ dad: false });
                this.oldMouseUp && this.oldMouseUp(e);
            }.bind(this);

            document.onmousedown = function (e) {
                if (e.target.classList.value.indexOf("rmd-draggable") > -1) {
                    var dad = e.target;
                    var position = dad.getBoundingClientRect();
                    var dadOffsetX = parseInt(dad.style.left);
                    var dadOffsetY = parseInt(dad.style.top);
                    if (!dadOffsetX) dadOffsetX = 0;
                    if (!dadOffsetY) dadOffsetY = 0;

                    if (!this.state.initial) {
                        this.setState({ initial: { x: position.left - dadOffsetX, y: position.top - dadOffsetY, parentHeight: e.srcElement.offsetParent.clientHeight, parentWidth: e.srcElement.offsetParent.clientWidth } });
                    }
                    this.setState({ dad: true, offset: { x: e.clientX - position.left, y: e.clientY - position.top } });
                }
                this.oldMouseDown && this.oldMouseDown(e);
            }.bind(this);

            document.onmousemove = function (e) {
                var dad = e.target;
                var position = dad.getBoundingClientRect();

                var dadOffsetX = parseInt(dad.style.left);
                var dadOffsetY = parseInt(dad.style.top);
                if (!dadOffsetX) dadOffsetX = 0;
                if (!dadOffsetY) dadOffsetY = 0;

                if (this.state.dad && e.target.classList.value.indexOf("rmd-draggable") > -1) {

                    var isRightEdgeOut = dadOffsetX + position.width <= this.state.initial.parentWidth;
                    var isMouseDragToLeft = e.clientX < position.left + this.state.offset.x;

                    var isBottomEdgeOut = dadOffsetY + position.height <= this.state.initial.parentHeight;
                    var isMouseDragToTop = e.clientY < position.top + this.state.offset.y;

                    var isTopEdgeOut = e.clientY - position.top + dadOffsetY - this.state.offset.y >= 0;
                    var isMouseDragToBottom = e.clientY > position.top + this.state.offset.y;

                    var isLeftEdgeOut = e.clientX - position.left + dadOffsetX - this.state.offset.x >= 0;
                    var isMouseDragToRight = e.clientX > position.left + this.state.offset.x;

                    if (!this.props.limitToEdge || (isRightEdgeOut || isMouseDragToLeft) && (isBottomEdgeOut || isMouseDragToTop) && (isTopEdgeOut || isMouseDragToBottom) && (isLeftEdgeOut || isMouseDragToRight)) {

                        dad.style.left = e.clientX - position.left + dadOffsetX - this.state.offset.x + 'px';
                        dad.style.top = e.clientY - position.top + dadOffsetY - this.state.offset.y + 'px';
                    }
                }
            }.bind(this);
        }
    }, {
        key: "render",
        value: function render() {

            return null;
        }
    }]);

    return DragAndDrop;
}(_react2.default.Component);

exports.default = DragAndDrop;