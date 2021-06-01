const commander = require('commander');
const program = new commander.Command();
const gen = require('./gen');
const fetch = require('node-fetch');

program
  .name('glicense')
  .version('1.0.0', '-v, --version')
  .option('-g, --generate <license> [filename]', 'generate license.')
  .option('-l, --list', 'Lists a list of licenses that can be generated');

module.exports = (argv) => {
  if (!argv[2]) argv[2] = '-h';

  program.parse(argv);

  if (argv[2] === '-g' || argv[2] === '--generate') {
    gen(program.rawArgs[3], program.rawArgs[4]);
  } else if (argv[2] === '-l' || argv[2] === '--list') {
    fetch('https://cdn.jsdelivr.net/gh/mumu-lhl/generate-license-cloud@main/data/list.json')
      .then(res => res.json())
      .then((json) => {
         console.log('Currently, some remote licenses are:\n');

         for (let i = 0; i < json.license.length; i++) {
           console.log(json.license[i]);
         }
      });
  }
}
