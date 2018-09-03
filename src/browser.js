/* eslint-env browser */

const dpid = require('./dpid');

if (typeof window !== 'undefined') {
  window.dpid = dpid;
}

if (typeof global !== 'undefined') {
  global.dpid = dpid;
}

module.exports = dpid;
