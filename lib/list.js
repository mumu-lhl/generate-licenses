const fetch = require("node-fetch");

async function list(print = false) {

    let data;
    await fetch("https://cdn.jsdelivr.net/gh/mumu-lhl/generate-license-cloud@main/data/list.json")
        .then(res => res.json())
        .then(json => data = json);

    if (print) {
        console.log("Currently, some remote licenses are:\n");

        for (let i = 0;i < data.license.length;i++) {
            console.log(data.license[i]);
        }

    } else {
        return data;
    }
}

module.exports = list;
