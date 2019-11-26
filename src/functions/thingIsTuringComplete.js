import sha1 from 'sha1'

exports.handler = async event => {
  const input = event.queryStringParameters.input || ''

  const thingIsTuringComplete = input =>
    !(
      sha1(
        input
          .toString()
          .trim()
          .toLowerCase()
      )
        .split('')
        .filter(char => !isNaN(char))
        .reduce((acc, char) => acc + Number(char), 0) % 2
    )

  return {
    statusCode: 200,
    body: thingIsTuringComplete(input) ? 'yes' : 'no'
  }
}
