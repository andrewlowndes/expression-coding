"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Var_1 = require("./classes/Var");
var runDef_1 = require("./runDef");
function runTasks(tasks, variables, output) {
    var scopevars = __assign({}, variables);
    tasks.forEach(function (task) {
        var match = task.match;
        if (!match.match) {
            throw Error('Could not find matching statement for: ' + task.task);
        }
        var vars = {};
        for (var key in match.vars) {
            var letVal = match.vars[key];
            scopevars[letVal] = scopevars[letVal] || new Var_1.Var(letVal);
            vars[key] = scopevars[letVal];
        }
        runDef_1.runDef(match.match.def, vars, output);
    });
}
exports.runTasks = runTasks;
