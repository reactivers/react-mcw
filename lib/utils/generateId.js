'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';

  lastId++;
  return '' + prefix + lastId;
};

/**
 * Created by Utku on 24/03/2017.
 */
var lastId = 0;