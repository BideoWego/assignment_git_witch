const rp = require('request-promise');
require('dotenv').config();


const Github = {};


Github.getRepos = async username => {
  const options = {
    url: `https://api.github.com/users/${ username }/repos`,
    qs: {
      access_token: process.env.GITHUB_API_TOKEN
    },
    headers: {
      "User-Agent": 'NoBotESpecial'
    },
    json: true
  };
  return await rp(options);
};


module.exports = Github;

