Buffer.prototype.toByteArray = function() {
  return Array.prototype.slice.call(this, 0);
};

var proto = require('./pb/protocol_pb.js');

/** @param {!(string|Uint8Array)} value */
proto.pb.CDCMsg.prototype.setData = function(data) {
  var buf;
  if (typeof data === 'string') {
    buf = new Buffer(data, 'utf8');
    data = new Uint8Array(buf);
  } else if (Buffer.prototype.isPrototypeOf(data)) {
    buf = new Buffer(data, 'utf8');
    data = new Uint8Array(buf);
  } else if (Buffer.prototype.isPrototypeOf(Uint8Array)) {
    // we already handle this
  }
  this.payload = data;
};

/**
 * Convenience API to convert the results of CDCMsg#payload to
 * a string with the specified 'encoding'. Note that if the encoding
 * is set to binary, this method returns CDCMsg#payload.
 * @returns {!(string|Uint8Array)|string}
 */
proto.pb.CDCMsg.prototype.getData = function(encoding) {
  var bytes = this.payload;
  encoding = encoding || 'utf8';
  if (encoding !== 'binary') {
    bytes = bytes.length > 0 ? new Buffer(bytes, encoding).toString() : '';
  }
  return bytes;
};

module.exports = proto.pb;
