const commander = require('commander');
const program = new commander.Command();
const gen = require("./gen");
const list = require("./list");

program
    .name("glicense")
    .version('1.0.0', "-v, --version")
    .option("-g, --generate <license> [filename]", "generate license.")
    .option("-l, --list", "Lists a list of licenses that can be generated");

function all(argv) {
    if (!argv[2]) argv[2] = "-h";

    program.parse(argv);

    if (argv[2] === "-g" || argv[2] === "--generate") {
        gen(program.generate, program.rawArgs[4]);
    } else if (argv[2] === "-l" || argv[2] === "--list") {
        list(true);
    }
}

module.exports = all;
