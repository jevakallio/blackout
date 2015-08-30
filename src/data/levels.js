'use strict';

module.exports = {
  start: {
    levelTitle: 'Where am I?',
    levelDescription: 'I find myself in a bit of a pickle. I just woke up, I have a throbbing headache, and my clothes are ruffled. I have no idea where I am. Moreover, I don’t seem to remember anything much from the last… what time is it? Where’s my watch? No watch. Where’s my phone? Goddamnit. What happened? I remember ordering one dry martini, and that’s where it all goes black. Where the hell am I anyway?',
    levelQuestion: 'Where am I?',
    levelAnswer: 'gherkin',
    levelAnswerIsExact: false,
    nextLevel: 'last',
    mapMinZoom: 12,
    mapZoom: 12,
    worldStyle: 'colorful-contrast',
    latitude: 51.5145087,
    longitude: -0.080327,
    heading: 17.92,
    pitch: 0
  },
  last: {
    levelTitle: 'Final question',
    levelDescription: 'Live, universe etc.',
    levelQuestion: 'What is it?',
    levelAnswer: '42',
    levelAnswerIsExact: true,
    nextLevel: null
  }
};
