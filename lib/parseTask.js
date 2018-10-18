"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseTask(task, matchPartials) {
    var taskWords = task.split(/\s+/), vars = {};
    var match;
    matchPartials.some(function (matchPartial) {
        if (matchPartial.words.length !== taskWords.length) {
            return false;
        }
        if (matchPartial.words.every(function (partial, i) {
            if (partial.indexOf('{') >= 0) {
                vars[partial.substring(1, partial.length - 1)] = taskWords[i];
                return true;
            }
            return taskWords[i] === partial;
        })) {
            match = matchPartial;
            return true;
        }
    });
    return { match: match, vars: vars };
}
exports.parseTask = parseTask;
