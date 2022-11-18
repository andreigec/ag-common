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

  var found = false;
  files.filter(fs.existsSync).forEach((f) => {
    var c = fs.readFileSync(f).toString();
    if (c.includes('url_1')) {
      console.log('removing url_1 from ' + f);
      c = c.replace(/url_1\./gim, '');
      found = true;
    }

    if (c.includes('this.configuration.queryParamsStringify(')) {
      console.log('fixing queryparams default from ' + f);
      c = c.replace(
        /this.configuration.queryParamsStringify\(/gim,
        '(this.configuration.queryParamsStringify||querystring)(',
      );

      found = true;
    }

    fs.writeFileSync(f, c);
  });
  if (!found) {
    console.log('error: no files were fixed');
  }
}

run();
