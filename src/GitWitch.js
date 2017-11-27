
class GitWitch {
  constructor({ parser, runner, formatter }) {
    this.parser = parser;
    this.runner = runner;
    this.formatter = formatter;
  }

  async process(input) {
    const parsed = this.parser.parse(input);
    const result = await this.runner.run(parsed);
    const output = this.formatter.format(result);
    return output;
  }
}


module.exports = GitWitch;
