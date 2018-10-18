import { lib } from './lib';
import { runCode } from './runCode';

document.body.innerHTML = `
<textarea spellcheck="false" id="input" style="width: 100%; height: 500px; box-sizing: border-box; resize: vertical">
define: percentage of {a} to {b} is {d}
a / b = d
d * 100 = c
concat c and % to give d

main:
set a to 5
set b to 20
print a
print b
percentage of a to b is c
print c
</textarea>

<button id="run">Run</button>

<div id="output" style="white-space: pre; border: 1px solid #999; width: 100%; height: 300px; box-sizing: border-box;"></div>
`;

const input = document.getElementById('input'),
  output = document.getElementById('output'),
  run = document.getElementById('run');

run.addEventListener('click', () => {
  output.innerHTML = runCode(lib + (input as HTMLTextAreaElement).value);
});
