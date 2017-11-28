

const _details = response => `
${ response.username }'s public repos
${ response.results.map(r => r.name +' - ' + r.description).join('\n') }`;


const _count = response => `${ response.username } has ${ response.results.length } public repos`;


class ResponseFormatter {
  format(response) {
    const fn = {
      details: _details,
      count: _count
    }[response.query];
    return fn(response);
  }
}


module.exports = ResponseFormatter;
