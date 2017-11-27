const Github = require('../src/Github');


describe('Github', () => {
  describe('.getRepos()', () => {
    it('returns a list of repos for the given username', async done => {
      try {
        const repos = await Github.getRepos('griselda');
        expect(repos).not.toBe(null);
        expect(repos[0].full_name).toBe('griselda/griszy');
        done();
      } catch (e) {
        done.fail(e);
      } finally {
        done();
      }
    });
  });
});
