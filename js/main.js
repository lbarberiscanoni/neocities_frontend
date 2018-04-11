"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Resources = require("./Resources");

var _Resources2 = _interopRequireDefault(_Resources);

var _Chat = require("./Chat");

var _Chat2 = _interopRequireDefault(_Chat);

var _Feed = require("./Feed");

var _Feed2 = _interopRequireDefault(_Feed);

var _Status = require("./Status");

var _Status2 = _interopRequireDefault(_Status);

var _TaskManager = require("./TaskManager");

var _TaskManager2 = _interopRequireDefault(_TaskManager);

var _Card = require("./Card");

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API = require('../apiServiceObject');

/*this is the main view, through which all other views and components are renderd */

var MainView = function (_React$Component) {
    _inherits(MainView, _React$Component);

    function MainView(props) {
        _classCallCheck(this, MainView);

        /* we should set the default here */

        var _this = _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this, props));

        _this.state = {
            "location": "login"
        };
        return _this;
    }

    _createClass(MainView, [{
        key: "log",
        value: function log(participantID, quantity, resource) {
            //logging based on the format of the DB
            var timestamp = new Date();

            var logOb = {
                "timestamp": timestamp,
                "action_type": false,
                "session": this.state.sessionID,
                "participant": participantID,
                "quantity": quantity,
                "resource": [resource]
            };
            console.log(this.state.api.createAction(logOb));
        }
    }, {
        key: "login",
        value: function login() {
            var _this2 = this;

            //let token = document.getElementById("tokenInpt").value
            var api = new API("sessionKey", "particpantID");
            var token = 1;
            api.getParticipant(token).then(function (participant) {
                //the state now includes api so that calls can be made through the instance created above
                _this2.setState({ "location": "home", participant: participant, api: api });
            });
        }
    }, {
        key: "fuck",
        value: function fuck() {
            var _this3 = this;

            //getting the sessionID once the component as mounted
            this.state.api.getSessions().then(function (res) {
                var sessionID = res[0]["id"];

                _this3.setState({
                    "sessionID": sessionID
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            switch (this.state.location) {
                case "login":
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement("input", { id: "tokenInpt", placeholder: "Enter Session Token" }),
                        _react2.default.createElement(
                            "button",
                            { id: "submit", onClick: this.login.bind(this) },
                            "Start"
                        )
                    );
                    break;
                case "home":
                    return _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "div",
                            { className: "row mt-4" },
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                _react2.default.createElement(_Resources2.default, { resources: this.state.participant.role.resources })
                            ),
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                _react2.default.createElement(_Status2.default, null)
                            ),
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                _react2.default.createElement(_Feed2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "row mt-4" },
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                _react2.default.createElement(_TaskManager2.default, null)
                            ),
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                _react2.default.createElement(_Chat2.default, { userName: this.state.participant.name })
                            )
                        )
                    );
                    break;
            }
        }
    }]);

    return MainView;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(MainView, null), document.getElementById("main"));