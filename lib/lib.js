"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lib = "\n\ndefineJS: {a} = {b}\ndefineJS: set {a} to {b}\na.set(b.get())\n\ndefineJS: {a} * {b} = {c}\nc.set(parseFloat(a.get()) * parseFloat(b.get()));\n\ndefineJS: {a} / {b} = {c}\nc.set(parseFloat(a.get()) / parseFloat(b.get()));\n\ndefineJS: concat {a} and {b} to give {c}\nc.set('' + a.get() + b.get());\n\ndefineJS: print {a}\noutput.set([...output.get(), a.get()]);\n\n";
