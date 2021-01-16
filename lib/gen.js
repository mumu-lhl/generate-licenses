const fs = require("fs");
const fetch = require("node-fetch");
const inquirer = require('inquirer');
const list = require("./list");

function write(license, data, filename) {

    if (!filename) {
        filename = license;
    }

    try {
        fs.writeFileSync(process.cwd() + "/" + filename, data);
    } catch (err) {
        console.error(err);
        process.exit(9);
    }
}

async function down(license, filename) {
    let data;
    const link = "https://cdn.jsdelivr.net/gh/mumu-lhl/generate-license-cloud@main/data/list/" + license;

    await fetch(link)
        .then(res => res.text())
        .then(text => data = text);

    if (data.search("<YEAR>") !== -1) {
        inquirer
            .prompt([{
                name: "ask_year",
                type: "number",
                message: "Year of license"
            },
            {
                name: "ask_owner",
                type: "string",
                message: "Copyright holder"
            }])
            .then(answers => {
                data = data.replace("<YEAR>", answers.ask_year);
                data = data.replace(/<(OWNER|COPYRIGHT HOLDER)>/g, answers.ask_owner);
                write(license, data, filename);
            });
    } else {
        write(license, data, filename);
    }
}

async function gen(license, filename) {

    let data;

    await list().then(d => data = d);

    if (data.license.includes(license)) {
        down(license, filename);
    } else {
        console.error("Remote does not have the license you want to generate.");
        process.exit(9);
    }
}

module.exports = gen;
