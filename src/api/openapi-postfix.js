/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const fs = require('fs');
const process = require('process');
var pathV = require('path');
var cwd = process.cwd();
var resolvePath = (p) => pathV.resolve(cwd, p);
function run() {
  var files = fs
    .readdirSync(resolvePath('./dist/api'))
    .filter((r) => r.endsWith('.js'))
    .map((s) => `./dist/api/${s}`);

  files.forEach((f) => {
    if (fs.existsSync(f)) {
      console.log('removing url_1 from ' + f);
      var c = fs.readFileSync(f).toString();
      c = c.replace(/url_1\./gi, '');
      fs.writeFileSync(f, c);
    }
  });
  if (!files.length) {
    console.log('error: no files to url fix');
  }
}

run();
