"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_React$Component) {
    _inherits(Chat, _React$Component);

    function Chat(props) {
        _classCallCheck(this, Chat);

        var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

        _this.state = {
            "user": "Lorenzo",
            "messages": {
                "0": { "text": "hello world", "user": "Bekk" },
                "1": { "text": "nice to meet you", "user": "Rafa" }
            }
        };
        return _this;
    }

    _createClass(Chat, [{
        key: "writeMessage",
        value: function writeMessage(event) {
            if (event.key == "Enter") {
                var newMessage = event.target.value;
                var lastNum = Object.keys(this.state.messages).length;
                var newState = this.state.messages;
                newState[lastNum] = { "user": this.state.user, "text": newMessage };
                console.log(newState);
                this.setState({ "messages": newState });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var chat = [];
            /*each message will have a "text" key and a "user" key so that I can differentiate */

            Object.values(this.state.messages).map(function (message) {
                var chatRow = _react2.default.createElement(
                    "p",
                    null,
                    "[",
                    message["user"],
                    "] ",
                    message["text"],
                    " "
                );
                chat.push(chatRow);
            });

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h3",
                    null,
                    "Chat"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    chat
                ),
                _react2.default.createElement("input", { placeholder: "@" + this.state.user, onKeyPress: this.writeMessage.bind(this) })
            );
        }
    }]);

    return Chat;
}(_react2.default.Component);

exports.default = Chat;