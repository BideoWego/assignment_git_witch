

class QuestionParser {
  parse(str) {
    const username = str.match(/([\w]+)\shave\?$/)[1];
    const subject = str.match(/([\w]+\srepos)/)[1]
      .split(' ')
      .filter(w => !['what', 'many'].includes(w))
      .join(' ');
    const query = str.match(/^what/) ?
      'details' :
      'count';

    return { username, subject, query };
  }
}


module.exports = QuestionParser;
