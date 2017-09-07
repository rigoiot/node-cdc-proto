Buffer.prototype.toByteArray = function() {
  return Array.prototype.slice.call(this, 0);
};

var proto = require('./pb/protocol_pb.js');

module.exports = proto.pb;