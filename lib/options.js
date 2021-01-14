const commander = require('commander');
const program = new commander.Command();
const gen = require("./gen");

program
    .name("glicense")
    .version('1.0.0', "-v, --version")
    .option("-g, --generate <license or `list`> [filename]", "generate license, The parameter is list, which lists the licenses that can be generated.");

function all(argv) {
    if (!argv[2]) argv[2] = "-h";

    program.parse(argv);

    gen(program.generate, program.rawArgs[4]);
}

module.exports = all;
