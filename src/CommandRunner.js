const Github = require('./Github');


class CommandRunner {
  async run(cmd) {
    const response = await Github.getRepos(cmd.username);
    return { results: response, ...cmd };
  }
}




module.exports = CommandRunner;
