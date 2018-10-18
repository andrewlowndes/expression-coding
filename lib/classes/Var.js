"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Var = (function () {
    function Var(val) {
        this.val = val;
    }
    Var.prototype.get = function () {
        return this.val;
    };
    Var.prototype.set = function (val) {
        this.val = val;
    };
    return Var;
}());
exports.Var = Var;
