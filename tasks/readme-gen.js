/* eslint-disable no-sync */
const ejs = require('ejs');
const fs = require('fs');
const package = require(process.cwd() + '/package.json');

const renderJsFile = require('./readme-gen-src/render-js-file')({ fs });

const loadDepdoc = require('./readme-gen-src/load-depdoc')({ process, fs });

const depdoc = loadDepdoc();

const getNodeVersion = require('./readme-gen-src/get-node-version')({ fs });

const nodeVersion = getNodeVersion();

const renderDependency = require('./readme-gen-src/render-dependency')({ process, depdoc });


const renderDependencies = key => {
    const sections = Object.entries(package[key]).map(([name]) => {
        return renderDependency(name);
    });
    return sections.join('\n');
};

const data = {
    nodeVersion,
    renderJsFile,
    dependencies: {
        constraints: Object.values(depdoc.constraints).map(desc => `- ${desc}`).join('\n'),
        production: renderDependencies('dependencies'),
        development: renderDependencies('devDependencies')
    }
};

ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
    if (err) throw err;
    process.stdout.write(str);
});
