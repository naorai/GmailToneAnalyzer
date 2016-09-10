var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: '67b7b5d9-e93c-40ca-817a-f6a0bf2cb72e',
  password: 'vFYEpFfgpMca',
  version: 'v3',
  version_date: '2016-05-19 '
});

tone_analyzer.tone({ text: 'A word is dead when it is said, some say. Emily Dickinson' },
  function(err, tone) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(tone, null, 2));
});
