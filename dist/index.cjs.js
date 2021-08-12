'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Button = require('@material-ui/core/Button');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

function IotechButton() {
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    variant: "contained",
    color: "secondary"
  }, "MyButton"));
}

exports.IotechButton = IotechButton;
