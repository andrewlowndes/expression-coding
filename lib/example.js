"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var runCode_1 = require("./runCode");
document.body.innerHTML = "\n<textarea spellcheck=\"false\" id=\"input\" style=\"width: 100%; height: 500px; box-sizing: border-box; resize: vertical\">\ndefine: percentage of {a} to {b} is {d}\na / b = d\nd * 100 = c\nconcat c and % to give d\n\nmain:\nset a to 5\nset b to 20\nprint a\nprint b\npercentage of a to b is c\nprint c\n</textarea>\n\n<button id=\"run\">Run</button>\n\n<div id=\"output\" style=\"white-space: pre; border: 1px solid #999; width: 100%; height: 300px; box-sizing: border-box;\"></div>\n";
var input = document.getElementById('input'), output = document.getElementById('output'), run = document.getElementById('run');
run.addEventListener('click', function () {
    output.innerHTML = runCode_1.runCode(lib_1.lib + input.value);
});
