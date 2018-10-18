"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Var_1 = require("./classes/Var");
var parseCode_1 = require("./parseCode");
var parseTask_1 = require("./parseTask");
var runDef_1 = require("./runDef");
function addDefsToLoader(loadedDef, defs) {
    defs.forEach(function (def) {
        def.match.forEach(function (match) {
            loadedDef.push({
                match: match,
                def: def,
                words: match.split(/\s+/)
            });
        });
    });
}
function matchDefinitions(defs, loadedDef) {
    defs.forEach(function (def) {
        if (def.tasks) {
            def.matchedTasks = def.tasks.map(function (task) { return ({
                task: task,
                match: parseTask_1.parseTask(task, loadedDef)
            }); });
        }
    });
}
function runCode(str) {
    var result = parseCode_1.parseCode(str);
    var matchPartials = [];
    addDefsToLoader(matchPartials, result.defs);
    matchDefinitions([result.main].concat(result.defs), matchPartials);
    var output = new Var_1.Var([]);
    try {
        runDef_1.runDef(result.main, {}, output);
    }
    catch (e) {
        output.set(['Error: ' + e.message]);
    }
    return output.get().join("\n");
}
exports.runCode = runCode;
