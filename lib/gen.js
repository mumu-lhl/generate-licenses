const fs = require("fs");
const fetch = require("node-fetch");
const inquirer = require('inquirer');

function write(license, data, filename) {

    if (!filename) {
        console.log(filename)
        var filename = license;
    }

    try {
        fs.writeFileSync(process.cwd() + "/" + filename, data);
    } catch (err) {
        console.error(err);
        process.exit(9);
    }
}

async function down(license, link, filename) {
    var data;

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
                message: "Project owner"
            }])
            .then(answers => {
                data = data.replace("<YEAR>", answers.ask_year);
                data = data.replace("<OWNER>", answers.ask_owner);
                write(license, data, filename);
            });
    } else {
        write(license, data, filename);
    }
}

async function gen(license, filename) {

    let data;

    await fetch("https://cdn.jsdelivr.net/gh/mumu-lhl/generate-license-cloud@main/data/list.json")
        .then(res => res.json())
        .then(json => data = json);

    if (license === "list") {

        let a = "\nCurrently, some remote licenses are:\n\n";
        const b = Object.keys(data);

        for (let i = 0;i < b.length;i++) {
            a += b[i] + "\n";
        }
        console.log(a);
    } else {
        if (license in data) {
            down(license, data[license].link, filename);
        } else {
            console.error("Remote does not have the license you want to generate.");
            process.exit(9);
        }
    }
}

module.exports = gen;
