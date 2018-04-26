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

var Task = function (_React$Component) {
    _inherits(Task, _React$Component);

    function Task(props) {
        _classCallCheck(this, Task);

        /* it will inherit as a property from the task manager */
        var _this = _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this, props));

        _this.state = {
            "resources": ["patrol_cars", "investigators", "swat"]
        };
        return _this;
    }

    _createClass(Task, [{
        key: "render",
        value: function render() {
            //console.log(this.props);
            return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    " ",
                    this.props.name,
                    " "
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    " ",
                    this.props.requirements,
                    " "
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                        "div",
                        { className: "dropdown" },
                        _react2.default.createElement(
                            "option",
                            { className: "dropdown-item", value: "", defaultValue: "selected" },
                            "Allocate Resource"
                        ),
                        this.state.resources.map(function (resource) {
                            return _react2.default.createElement(
                                "option",
                                { className: "dropdown-item" },
                                " ",
                                resource,
                                " "
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    " ",
                    this.props.status,
                    " "
                )
            );
        }
    }]);

    return Task;
}(_react2.default.Component);

exports.default = Task;