"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function runJs(str, variables, output) {
    var letNames = ['output'], letValues = [output];
    if (variables) {
        for (var letName in variables) {
            if (variables.hasOwnProperty(letName)) {
                letNames.push(letName);
                letValues.push(variables[letName]);
            }
        }
    }
    try {
        (new (Function.bind.apply(Function, [void 0].concat(letNames, [str])))()).apply(void 0, letValues);
    }
    catch (e) {
        var varsStr = Object.keys(variables).map(function (varName) { return varName + '=' + variables[varName]; }).join(', ');
        throw new Error('Error running: ' + str + ' with variables: ' + varsStr);
    }
}
exports.runJs = runJs;
