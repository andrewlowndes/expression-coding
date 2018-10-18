"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var runTasks_1 = require("./runTasks");
var runJs_1 = require("./runJs");
function runDef(def, variables, output) {
    if (def.matchedTasks) {
        runTasks_1.runTasks(def.matchedTasks, variables, output);
    }
    else if (def.js) {
        runJs_1.runJs(def.js, variables, output);
    }
}
exports.runDef = runDef;
