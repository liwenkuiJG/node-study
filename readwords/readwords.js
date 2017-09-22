var censor = require('censorify_li');
console.log(censor.getCensoredWords());
console.log(censor.censor('Some very sad, bad and mad text, baddddmad gloomy bad and mad text'));
censor.addCensoredWords('gloomy');
console.log(censor.getCensoredWords());
console.log(censor.censor('Some very sad, bad and mad text, baddddmad gloomy'));
