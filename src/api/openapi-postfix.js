 
const fs = require('fs');
const process = require('process');
const pathV = require('path');

const cwd = process.cwd();
const resolvePath = (p) => pathV.resolve(cwd, p);
function run() {
  if (!fs.existsSync('./dist') || !fs.existsSync('./dist/api')) {
    console.log('no dist/api directory, cant run openapi postfix');
    return;
  }
  console.log('running openapi postfixes');
  const files = fs
    .readdirSync(resolvePath('./dist/api'))
    .filter((r) => r.endsWith('.js') || r.endsWith('.d.ts'))
    .map((s) => `./dist/api/${s}`)
    .filter(fs.existsSync)
    .map((file) => ({ file, content: fs.readFileSync(file).toString() }));

  let found = false;
  files.forEach(({ file, content }) => {
    if (content.includes('url_1')) {
      console.log('removing url_1 from ' + file);
      content = content.replace(/url_1\./gim, '');
      found = true;
    }

    if (content.includes('this.configuration.queryParamsStringify(')) {
      console.log('fixing queryparams default from ' + file);
      content = content.replace(
        /this.configuration.queryParamsStringify\(/gim,
        '(this.configuration.queryParamsStringify||querystring)(',
      );

      found = true;
    }

    if (content.includes(`import("axios").`)) {
      console.log('fixing axios import from ' + file);
      content = content.replace(/import\("axios"\)\./gim, '');
      found = true;
    }

    fs.writeFileSync(file, content);
  });
  if (!found) {
    console.log('error: no files were fixed');
  }
}

run();
