export const lib = `

defineJS: {a} = {b}
defineJS: set {a} to {b}
a.set(b.get())

defineJS: {a} * {b} = {c}
c.set(parseFloat(a.get()) * parseFloat(b.get()));

defineJS: {a} / {b} = {c}
c.set(parseFloat(a.get()) / parseFloat(b.get()));

defineJS: concat {a} and {b} to give {c}
c.set('' + a.get() + b.get());

defineJS: print {a}
output.set([...output.get(), a.get()]);

`;
