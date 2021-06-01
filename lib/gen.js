const fs = require('fs');
const fetch = require('node-fetch');
const inquirer = require('inquirer');

function write(license, data, filename) {
  try {
    fs.writeFileSync(process.cwd() + '/' + (filename || license), data);
  } catch (err) {
    console.error(err);
    process.exit(9);
  }
}

async function download(license, filename) {
  await fetch('https://cdn.jsdelivr.net/gh/mumu-lhl/generate-license-cloud@main/data/list/' + license)
    .then((res) => res.text())
    .then((text) => {
      if (text.search('<YEAR>') > -1) {
        inquirer
          .prompt([{
            name: 'ask_year',
            type: 'string',
            message: 'Year of license'
          },
          {
            name: 'ask_owner',
            type: 'string',
            message: 'Copyright holder'
          }])
            .then((answers) => {
              write(license, text
                .replace('<YEAR>', answers.ask_year)
                .replace(/<(OWNER|COPYRIGHT HOLDER)>/g, answers.ask_owner), filename);
            });
      } else {
        write(license, data, filename);
      }
    });
}

module.exports = (license, filename) => {
  fetch('https://cdn.jsdelivr.net/gh/mumu-lhl/generate-license-cloud@main/data/list.json')
    .then(res => res.json())
    .then((json) => {
      if (json.license.includes(license)) {
        download(license, filename);
      } else {
        console.error('Remote does not have the license you want to generate.');
        process.exit(9);
      }
    });
}
