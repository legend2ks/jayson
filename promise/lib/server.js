var promisify = require('es6-promisify');
var Method = require('./method');
var jayson = require('../../');

/**
 * Constructor for a Jayson Promise Server
 * @see Server
 * @class PromiseServer
 * @extends Server
 * @return {PromiseServer}
 * @api public
 */
var PromiseServer = function(methods, options) {
  if(!(this instanceof PromiseServer)) {
    return new PromiseServer(methods, options);
  }
  options = options || {};
  options.methodConstructor = Method;
  jayson.Server.call(this, methods, options);
};
require('util').inherits(PromiseServer, jayson.Server);

module.exports = PromiseServer;
