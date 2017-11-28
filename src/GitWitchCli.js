const GitWitch = require('./GitWitch');
const QuestionParser = require('./QuestionParser');
const CommandRunner = require('./CommandRunner');
const ResponseFormatter = require('./ResponseFormatter');


const parser = new QuestionParser();
const runner = new CommandRunner();
const formatter = new ResponseFormatter();
const gw = new GitWitch({
  parser,
  runner,
  formatter
});


(async () => {
  const input = process.argv.slice(2).join(' ');
  const output = await gw.process(input);
  console.log(output);
})();
