"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Task = require("./Task");

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskManager = function (_React$Component) {
    _inherits(TaskManager, _React$Component);

    function TaskManager(props) {
        _classCallCheck(this, TaskManager);

        var _this = _possibleConstructorReturn(this, (TaskManager.__proto__ || Object.getPrototypeOf(TaskManager)).call(this, props));

        _this.state = {
            "tasks": {
                0: { "name": "Fire on Grand Street", "requirements": false, "status": false },
                1: { "name": "Car Crash on Market", "requirements": false, "status": false },
                2: { "name": "Kidnapping", "requirements": false, "status": false }
            }
        };
        return _this;
    }

    _createClass(TaskManager, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            /*generating a table for tasks */
            var tasks = [];
            Object.keys(this.state.tasks).map(function (key) {
                var task = _this2.state.tasks[key];
                console.log(task);
                var component = _react2.default.createElement(_Task2.default, { num: key, name: task["name"], requirements: task["requirements"], status: task["status"] });
                tasks.push(component);
            });

            return _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                    "thead",
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        "Tasks"
                    )
                ),
                _react2.default.createElement(
                    "tbody",
                    null,
                    _react2.default.createElement(
                        "tr",
                        null,
                        _react2.default.createElement(
                            "td",
                            null,
                            "Name"
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            "Responders"
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            "Status"
                        )
                    ),
                    tasks
                )
            );
        }
    }]);

    return TaskManager;
}(_react2.default.Component);

exports.default = TaskManager;