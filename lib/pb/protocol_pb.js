/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.cdc || ($protobuf.roots.cdc = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    pb.CDCMsg = (function() {

        /**
         * Properties of a CDCMsg.
         * @memberof pb
         * @interface ICDCMsg
         * @property {string} [publisher] CDCMsg publisher
         * @property {string} [channel] CDCMsg channel
         * @property {string} [contentType] CDCMsg contentType
         * @property {string} [protocol] CDCMsg protocol
         * @property {string} [reply] CDCMsg reply
         * @property {Uint8Array} [payload] CDCMsg payload
         * @property {number} [QOS] CDCMsg QOS
         * @property {boolean} [retain] CDCMsg retain
         * @property {Uint8Array} [sha256] CDCMsg sha256
         */

        /**
         * Constructs a new CDCMsg.
         * @memberof pb
         * @classdesc Represents a CDCMsg.
         * @constructor
         * @param {pb.ICDCMsg=} [properties] Properties to set
         */
        function CDCMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CDCMsg publisher.
         * @member {string}publisher
         * @memberof pb.CDCMsg
         * @instance
         */
        CDCMsg.prototype.publisher = "";

        /**
         * CDCMsg channel.
         * @member {string}channel
         * @memberof pb.CDCMsg
         * @instance
         */
        CDCMsg.prototype.channel = "";

        /**
         * CDCMsg contentType.
         * @member {string}contentType
         * @memberof pb.CDCMsg
         * @instance
         */
        CDCMsg.prototype.contentType = "";

        /**
         * CDCMsg protocol.
         * @member {string}protocol
         * @memberof pb.CDCMsg
         * @instance
         */
        CDCMsg.prototype.protocol = "";

        /**
         * CDCMsg reply.
         * @member {string}reply
         * @memberof pb.CDCMsg
         * @instance
         */
        CDCMsg.prototype.reply = "";

        /**
         * CDCMsg payload.
         * @member {Uint8Array}payload
         * @memberof pb.CDCMsg
         * @instance
         */
        CDCMsg.prototype.payload = $util.newBuffer([]);

        /**
         * CDCMsg QOS.
         * @member {number}QOS
         * @memberof pb.CDCMsg
         * @instance
         */
        CDCMsg.prototype.QOS = 0;

        /**
         * CDCMsg retain.
         * @member {boolean}retain
         * @memberof pb.CDCMsg
         * @instance
         */
        CDCMsg.prototype.retain = false;

        /**
         * CDCMsg sha256.
         * @member {Uint8Array}sha256
         * @memberof pb.CDCMsg
         * @instance
         */
        CDCMsg.prototype.sha256 = $util.newBuffer([]);

        /**
         * Creates a new CDCMsg instance using the specified properties.
         * @function create
         * @memberof pb.CDCMsg
         * @static
         * @param {pb.ICDCMsg=} [properties] Properties to set
         * @returns {pb.CDCMsg} CDCMsg instance
         */
        CDCMsg.create = function create(properties) {
            return new CDCMsg(properties);
        };

        /**
         * Encodes the specified CDCMsg message. Does not implicitly {@link pb.CDCMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.CDCMsg
         * @static
         * @param {pb.ICDCMsg} message CDCMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDCMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publisher != null && message.hasOwnProperty("publisher"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.publisher);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.channel);
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.contentType);
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.protocol);
            if (message.reply != null && message.hasOwnProperty("reply"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.reply);
            if (message.payload != null && message.hasOwnProperty("payload"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.payload);
            if (message.QOS != null && message.hasOwnProperty("QOS"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.QOS);
            if (message.retain != null && message.hasOwnProperty("retain"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.retain);
            if (message.sha256 != null && message.hasOwnProperty("sha256"))
                writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.sha256);
            return writer;
        };

        /**
         * Encodes the specified CDCMsg message, length delimited. Does not implicitly {@link pb.CDCMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CDCMsg
         * @static
         * @param {pb.ICDCMsg} message CDCMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDCMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CDCMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CDCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CDCMsg} CDCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDCMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CDCMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publisher = reader.string();
                    break;
                case 2:
                    message.channel = reader.string();
                    break;
                case 3:
                    message.contentType = reader.string();
                    break;
                case 4:
                    message.protocol = reader.string();
                    break;
                case 5:
                    message.reply = reader.string();
                    break;
                case 6:
                    message.payload = reader.bytes();
                    break;
                case 7:
                    message.QOS = reader.uint32();
                    break;
                case 8:
                    message.retain = reader.bool();
                    break;
                case 10:
                    message.sha256 = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CDCMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CDCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CDCMsg} CDCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDCMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CDCMsg message.
         * @function verify
         * @memberof pb.CDCMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDCMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publisher != null && message.hasOwnProperty("publisher"))
                if (!$util.isString(message.publisher))
                    return "publisher: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                if (!$util.isString(message.contentType))
                    return "contentType: string expected";
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isString(message.protocol))
                    return "protocol: string expected";
            if (message.reply != null && message.hasOwnProperty("reply"))
                if (!$util.isString(message.reply))
                    return "reply: string expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            if (message.QOS != null && message.hasOwnProperty("QOS"))
                if (!$util.isInteger(message.QOS))
                    return "QOS: integer expected";
            if (message.retain != null && message.hasOwnProperty("retain"))
                if (typeof message.retain !== "boolean")
                    return "retain: boolean expected";
            if (message.sha256 != null && message.hasOwnProperty("sha256"))
                if (!(message.sha256 && typeof message.sha256.length === "number" || $util.isString(message.sha256)))
                    return "sha256: buffer expected";
            return null;
        };

        /**
         * Creates a CDCMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CDCMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CDCMsg} CDCMsg
         */
        CDCMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CDCMsg)
                return object;
            var message = new $root.pb.CDCMsg();
            if (object.publisher != null)
                message.publisher = String(object.publisher);
            if (object.channel != null)
                message.channel = String(object.channel);
            if (object.contentType != null)
                message.contentType = String(object.contentType);
            if (object.protocol != null)
                message.protocol = String(object.protocol);
            if (object.reply != null)
                message.reply = String(object.reply);
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            if (object.QOS != null)
                message.QOS = object.QOS >>> 0;
            if (object.retain != null)
                message.retain = Boolean(object.retain);
            if (object.sha256 != null)
                if (typeof object.sha256 === "string")
                    $util.base64.decode(object.sha256, message.sha256 = $util.newBuffer($util.base64.length(object.sha256)), 0);
                else if (object.sha256.length)
                    message.sha256 = object.sha256;
            return message;
        };

        /**
         * Creates a plain object from a CDCMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CDCMsg
         * @static
         * @param {pb.CDCMsg} message CDCMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDCMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.publisher = "";
                object.channel = "";
                object.contentType = "";
                object.protocol = "";
                object.reply = "";
                object.payload = options.bytes === String ? "" : [];
                object.QOS = 0;
                object.retain = false;
                object.sha256 = options.bytes === String ? "" : [];
            }
            if (message.publisher != null && message.hasOwnProperty("publisher"))
                object.publisher = message.publisher;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                object.contentType = message.contentType;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.reply != null && message.hasOwnProperty("reply"))
                object.reply = message.reply;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            if (message.QOS != null && message.hasOwnProperty("QOS"))
                object.QOS = message.QOS;
            if (message.retain != null && message.hasOwnProperty("retain"))
                object.retain = message.retain;
            if (message.sha256 != null && message.hasOwnProperty("sha256"))
                object.sha256 = options.bytes === String ? $util.base64.encode(message.sha256, 0, message.sha256.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha256) : message.sha256;
            return object;
        };

        /**
         * Converts this CDCMsg to JSON.
         * @function toJSON
         * @memberof pb.CDCMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDCMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CDCMsg;
    })();

    pb.CDCClientPresenceEvent = (function() {

        /**
         * Properties of a CDCClientPresenceEvent.
         * @memberof pb
         * @interface ICDCClientPresenceEvent
         * @property {string} [clientId] CDCClientPresenceEvent clientId
         * @property {number|Long} [timestamp] CDCClientPresenceEvent timestamp
         * @property {string} [eventType] CDCClientPresenceEvent eventType
         * @property {string} [sessionIdentifier] CDCClientPresenceEvent sessionIdentifier
         */

        /**
         * Constructs a new CDCClientPresenceEvent.
         * @memberof pb
         * @classdesc Represents a CDCClientPresenceEvent.
         * @constructor
         * @param {pb.ICDCClientPresenceEvent=} [properties] Properties to set
         */
        function CDCClientPresenceEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CDCClientPresenceEvent clientId.
         * @member {string}clientId
         * @memberof pb.CDCClientPresenceEvent
         * @instance
         */
        CDCClientPresenceEvent.prototype.clientId = "";

        /**
         * CDCClientPresenceEvent timestamp.
         * @member {number|Long}timestamp
         * @memberof pb.CDCClientPresenceEvent
         * @instance
         */
        CDCClientPresenceEvent.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CDCClientPresenceEvent eventType.
         * @member {string}eventType
         * @memberof pb.CDCClientPresenceEvent
         * @instance
         */
        CDCClientPresenceEvent.prototype.eventType = "";

        /**
         * CDCClientPresenceEvent sessionIdentifier.
         * @member {string}sessionIdentifier
         * @memberof pb.CDCClientPresenceEvent
         * @instance
         */
        CDCClientPresenceEvent.prototype.sessionIdentifier = "";

        /**
         * Creates a new CDCClientPresenceEvent instance using the specified properties.
         * @function create
         * @memberof pb.CDCClientPresenceEvent
         * @static
         * @param {pb.ICDCClientPresenceEvent=} [properties] Properties to set
         * @returns {pb.CDCClientPresenceEvent} CDCClientPresenceEvent instance
         */
        CDCClientPresenceEvent.create = function create(properties) {
            return new CDCClientPresenceEvent(properties);
        };

        /**
         * Encodes the specified CDCClientPresenceEvent message. Does not implicitly {@link pb.CDCClientPresenceEvent.verify|verify} messages.
         * @function encode
         * @memberof pb.CDCClientPresenceEvent
         * @static
         * @param {pb.ICDCClientPresenceEvent} message CDCClientPresenceEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDCClientPresenceEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientId);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eventType);
            if (message.sessionIdentifier != null && message.hasOwnProperty("sessionIdentifier"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sessionIdentifier);
            return writer;
        };

        /**
         * Encodes the specified CDCClientPresenceEvent message, length delimited. Does not implicitly {@link pb.CDCClientPresenceEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CDCClientPresenceEvent
         * @static
         * @param {pb.ICDCClientPresenceEvent} message CDCClientPresenceEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDCClientPresenceEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CDCClientPresenceEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CDCClientPresenceEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CDCClientPresenceEvent} CDCClientPresenceEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDCClientPresenceEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CDCClientPresenceEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.timestamp = reader.int64();
                    break;
                case 3:
                    message.eventType = reader.string();
                    break;
                case 4:
                    message.sessionIdentifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CDCClientPresenceEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CDCClientPresenceEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CDCClientPresenceEvent} CDCClientPresenceEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDCClientPresenceEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CDCClientPresenceEvent message.
         * @function verify
         * @memberof pb.CDCClientPresenceEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDCClientPresenceEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isString(message.clientId))
                    return "clientId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                if (!$util.isString(message.eventType))
                    return "eventType: string expected";
            if (message.sessionIdentifier != null && message.hasOwnProperty("sessionIdentifier"))
                if (!$util.isString(message.sessionIdentifier))
                    return "sessionIdentifier: string expected";
            return null;
        };

        /**
         * Creates a CDCClientPresenceEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CDCClientPresenceEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CDCClientPresenceEvent} CDCClientPresenceEvent
         */
        CDCClientPresenceEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CDCClientPresenceEvent)
                return object;
            var message = new $root.pb.CDCClientPresenceEvent();
            if (object.clientId != null)
                message.clientId = String(object.clientId);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.eventType != null)
                message.eventType = String(object.eventType);
            if (object.sessionIdentifier != null)
                message.sessionIdentifier = String(object.sessionIdentifier);
            return message;
        };

        /**
         * Creates a plain object from a CDCClientPresenceEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CDCClientPresenceEvent
         * @static
         * @param {pb.CDCClientPresenceEvent} message CDCClientPresenceEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDCClientPresenceEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.clientId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.eventType = "";
                object.sessionIdentifier = "";
            }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                object.eventType = message.eventType;
            if (message.sessionIdentifier != null && message.hasOwnProperty("sessionIdentifier"))
                object.sessionIdentifier = message.sessionIdentifier;
            return object;
        };

        /**
         * Converts this CDCClientPresenceEvent to JSON.
         * @function toJSON
         * @memberof pb.CDCClientPresenceEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDCClientPresenceEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CDCClientPresenceEvent;
    })();

    pb.CDCSubscriptionEvent = (function() {

        /**
         * Properties of a CDCSubscriptionEvent.
         * @memberof pb
         * @interface ICDCSubscriptionEvent
         * @property {string} [clientId] CDCSubscriptionEvent clientId
         * @property {number|Long} [timestamp] CDCSubscriptionEvent timestamp
         * @property {string} [eventType] CDCSubscriptionEvent eventType
         * @property {string} [sessionIdentifier] CDCSubscriptionEvent sessionIdentifier
         * @property {Array.<string>} [topics] CDCSubscriptionEvent topics
         */

        /**
         * Constructs a new CDCSubscriptionEvent.
         * @memberof pb
         * @classdesc Represents a CDCSubscriptionEvent.
         * @constructor
         * @param {pb.ICDCSubscriptionEvent=} [properties] Properties to set
         */
        function CDCSubscriptionEvent(properties) {
            this.topics = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CDCSubscriptionEvent clientId.
         * @member {string}clientId
         * @memberof pb.CDCSubscriptionEvent
         * @instance
         */
        CDCSubscriptionEvent.prototype.clientId = "";

        /**
         * CDCSubscriptionEvent timestamp.
         * @member {number|Long}timestamp
         * @memberof pb.CDCSubscriptionEvent
         * @instance
         */
        CDCSubscriptionEvent.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CDCSubscriptionEvent eventType.
         * @member {string}eventType
         * @memberof pb.CDCSubscriptionEvent
         * @instance
         */
        CDCSubscriptionEvent.prototype.eventType = "";

        /**
         * CDCSubscriptionEvent sessionIdentifier.
         * @member {string}sessionIdentifier
         * @memberof pb.CDCSubscriptionEvent
         * @instance
         */
        CDCSubscriptionEvent.prototype.sessionIdentifier = "";

        /**
         * CDCSubscriptionEvent topics.
         * @member {Array.<string>}topics
         * @memberof pb.CDCSubscriptionEvent
         * @instance
         */
        CDCSubscriptionEvent.prototype.topics = $util.emptyArray;

        /**
         * Creates a new CDCSubscriptionEvent instance using the specified properties.
         * @function create
         * @memberof pb.CDCSubscriptionEvent
         * @static
         * @param {pb.ICDCSubscriptionEvent=} [properties] Properties to set
         * @returns {pb.CDCSubscriptionEvent} CDCSubscriptionEvent instance
         */
        CDCSubscriptionEvent.create = function create(properties) {
            return new CDCSubscriptionEvent(properties);
        };

        /**
         * Encodes the specified CDCSubscriptionEvent message. Does not implicitly {@link pb.CDCSubscriptionEvent.verify|verify} messages.
         * @function encode
         * @memberof pb.CDCSubscriptionEvent
         * @static
         * @param {pb.ICDCSubscriptionEvent} message CDCSubscriptionEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDCSubscriptionEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientId);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eventType);
            if (message.sessionIdentifier != null && message.hasOwnProperty("sessionIdentifier"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sessionIdentifier);
            if (message.topics != null && message.topics.length)
                for (var i = 0; i < message.topics.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.topics[i]);
            return writer;
        };

        /**
         * Encodes the specified CDCSubscriptionEvent message, length delimited. Does not implicitly {@link pb.CDCSubscriptionEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CDCSubscriptionEvent
         * @static
         * @param {pb.ICDCSubscriptionEvent} message CDCSubscriptionEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDCSubscriptionEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CDCSubscriptionEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CDCSubscriptionEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CDCSubscriptionEvent} CDCSubscriptionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDCSubscriptionEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CDCSubscriptionEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.timestamp = reader.int64();
                    break;
                case 3:
                    message.eventType = reader.string();
                    break;
                case 4:
                    message.sessionIdentifier = reader.string();
                    break;
                case 5:
                    if (!(message.topics && message.topics.length))
                        message.topics = [];
                    message.topics.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CDCSubscriptionEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CDCSubscriptionEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CDCSubscriptionEvent} CDCSubscriptionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDCSubscriptionEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CDCSubscriptionEvent message.
         * @function verify
         * @memberof pb.CDCSubscriptionEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDCSubscriptionEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isString(message.clientId))
                    return "clientId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                if (!$util.isString(message.eventType))
                    return "eventType: string expected";
            if (message.sessionIdentifier != null && message.hasOwnProperty("sessionIdentifier"))
                if (!$util.isString(message.sessionIdentifier))
                    return "sessionIdentifier: string expected";
            if (message.topics != null && message.hasOwnProperty("topics")) {
                if (!Array.isArray(message.topics))
                    return "topics: array expected";
                for (var i = 0; i < message.topics.length; ++i)
                    if (!$util.isString(message.topics[i]))
                        return "topics: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CDCSubscriptionEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CDCSubscriptionEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CDCSubscriptionEvent} CDCSubscriptionEvent
         */
        CDCSubscriptionEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CDCSubscriptionEvent)
                return object;
            var message = new $root.pb.CDCSubscriptionEvent();
            if (object.clientId != null)
                message.clientId = String(object.clientId);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.eventType != null)
                message.eventType = String(object.eventType);
            if (object.sessionIdentifier != null)
                message.sessionIdentifier = String(object.sessionIdentifier);
            if (object.topics) {
                if (!Array.isArray(object.topics))
                    throw TypeError(".pb.CDCSubscriptionEvent.topics: array expected");
                message.topics = [];
                for (var i = 0; i < object.topics.length; ++i)
                    message.topics[i] = String(object.topics[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CDCSubscriptionEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CDCSubscriptionEvent
         * @static
         * @param {pb.CDCSubscriptionEvent} message CDCSubscriptionEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDCSubscriptionEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.topics = [];
            if (options.defaults) {
                object.clientId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.eventType = "";
                object.sessionIdentifier = "";
            }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                object.eventType = message.eventType;
            if (message.sessionIdentifier != null && message.hasOwnProperty("sessionIdentifier"))
                object.sessionIdentifier = message.sessionIdentifier;
            if (message.topics && message.topics.length) {
                object.topics = [];
                for (var j = 0; j < message.topics.length; ++j)
                    object.topics[j] = message.topics[j];
            }
            return object;
        };

        /**
         * Converts this CDCSubscriptionEvent to JSON.
         * @function toJSON
         * @memberof pb.CDCSubscriptionEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDCSubscriptionEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CDCSubscriptionEvent;
    })();

    return pb;
})();

module.exports = $root;
