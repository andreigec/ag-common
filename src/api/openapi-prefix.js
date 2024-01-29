/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
var { load } = require('js-yaml');
const SwaggerParser = require('swagger-parser');
const fs = require('fs');
const process = require('process');
var pathV = require('path');

var cwd = process.cwd();
var resolvePath = (p) => pathV.resolve(cwd, p);
//
function cleanSrc() {
  // eslint-disable-next-line no-console
  console.log('fixing colons in field names');
  let files = fs
    .readdirSync(resolvePath('./src/api'))
    .filter((r) => r.endsWith('.ts'))
    .map((s) => `./src/api/${s}`);

  files.forEach((f) => {
    let c = fs.readFileSync(f).toString();
    c = c.replace(/cognitopreferred_role/, "'cognito:preferred_role'");
    c = c.replace(/cognitousername/, "'cognito:username'");
    c = c.replace(/cognitogroups/, "'cognito:groups'");
    c = c.replace(
      /this\.configuration\.queryParamsStringify\(/,
      '(this.configuration.queryParamsStringify||querystring)(',
    );

    fs.writeFileSync(f, c);
  });

  //disable all errors
  console.log('disable all api ts errors');
  files = fs
    .readdirSync(resolvePath('./src/api'))
    .filter((r) => r.endsWith('.ts'))
    .map((s) => `./src/api/${s}`);

  files.forEach((f) => {
    var c = fs.readFileSync(f);
    c = '/* eslint-disable */\n// @ts-nocheck\n' + c;
    fs.writeFileSync(f, c);
  });

  [resolvePath('./src/api/runtime.ts')].forEach((f) => {
    if (fs.existsSync(f)) {
      console.log('fix middleware');
      let c = fs.readFileSync(f).toString();
      c = c.replace(
        '= configuration.middleware;',
        '= configuration.middleware || [];',
      );

      fs.writeFileSync(f, c);
    } else {
      console.warn('no middleware to fix (src/api/runtime)');
    }
  });
}

//
async function generateJs() {
  try {
    console.log('generating openapi ts');
    var p = resolvePath('./openapi.yml');
    if (!fs.existsSync(p)) {
      p = resolvePath('./openapi/index.yml');
      process.chdir(resolvePath('./openapi'));
    }

    if (!fs.existsSync(p)) {
      console.error(
        'cant generate swagger, expecting openapi.yml or openapi/index.yml',
      );
      return;
    }

    const yml = load(fs.readFileSync(p, 'utf8'));

    // eslint-disable-next-line
    const schema = await SwaggerParser.validate(yml);
    const content = `var ret=${JSON.stringify(
      schema,
    )};\nmodule.exports.default=ret`;

    fs.writeFileSync(resolvePath('./openapi.generated.js'), content);
    console.log('generated');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('err=', e);
  }
}

async function run() {
  console.log('start openapi fix in ' + cwd);
  cleanSrc();
  await generateJs();
}
void run();
