"use strict";

const regex = require("split-by-comma-regex");

/**
 * splitByComma
 * Split strings by comma in a smart way.
 *
 * @name splitByComma
 * @function
 * @param {String} input The input string.
 * @return {Array} The splits.
 */
module.exports = function splitByComma (input) {
    if (typeof input !== "string") {
        return [];
    }
    return input.split(regex());
};
