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

var API = require('../apiServiceObject');

var Resources = function (_React$Component) {
    _inherits(Resources, _React$Component);

    function Resources(props) {
        _classCallCheck(this, Resources);

        var _this = _possibleConstructorReturn(this, (Resources.__proto__ || Object.getPrototypeOf(Resources)).call(this, props));

        _this.state = {
            "values": {}
            /*theoretically, the resources could be modified in the configuration, so the internal state should be generated from a list */
        };var types_of_resources = _this.props.resources;
        /*should inherit a default value from the game configuration */
        var default_value = 3;

        types_of_resources.map(function (resource) {
            //console.log(resource);
            var available_deployed_pair = { "available": default_value, "deployed": 0 };
            _this.state.values[resource["name"]] = available_deployed_pair;
        });
        return _this;
    }

    _createClass(Resources, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            /*generating the components as part of a table */
            var components = [];
            var i = 0;
            Object.keys(this.state.values).map(function (resource) {
                var component = _react2.default.createElement(
                    "tr",
                    { key: i },
                    _react2.default.createElement(
                        "td",
                        null,
                        " ",
                        resource,
                        " "
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        " ",
                        _this2.state.values[resource]["deployed"],
                        " / ",
                        _this2.state.values[resource]["available"],
                        " "
                    )
                );
                components.push(component);
                i += 1;
            });

            return _react2.default.createElement(
                "table",
                { className: "table" },
                _react2.default.createElement(
                    "thead",
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        "Your Resources"
                    )
                ),
                _react2.default.createElement(
                    "tbody",
                    null,
                    components
                )
            );
        }
    }]);

    return Resources;
}(_react2.default.Component);

exports.default = Resources;