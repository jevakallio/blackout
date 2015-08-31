'use strict';

module.exports = {
  start: {
    levelId: 'start',
    levelTitle: 'Where am I?',
    levelDescription: 'I find myself in a bit of a pickle. I just woke up, I have a throbbing headache, and my clothes are ruffled. I have no idea where I am. Moreover, I don’t seem to remember anything much from the last… what time is it? Where’s my watch? No watch. Where’s my phone? Goddamnit. What happened? I remember ordering one dry martini, and that’s where it all goes black. Where the hell am I anyway?',
    levelQuestion: 'Where am I?',
    levelAnswer: 'gherkin',
    levelAnswerIsExact: false,
    nextLevel: 'second',
    mapMinZoom: 12,
    mapZoom: 12,
    worldStyle: 'colorful-contrast',
    // inventory should be defined only on the first level,
    // afterwards use acquiredInventory to add items to it
    inventory: [],
    latitude: 51.5145087,
    longitude: -0.080327,
    heading: 17.92,
    pitch: 0
  },
  second: {
    levelId: 'second',
    levelTitle: 'Balls bros',
    levelDescription: 'Phew, at least I’m still in London. But instead of a phone, all I found in my pocket is this coat check ticket. I don’t know where it’s from though, but I guess there’s nothing to it but to be brave and get walking. Fingers crossed it’s nearby.',
    levelQuestion: 'Bury the holy hatchet.  What comes first above wine?',
    levelAnswer: 'quality',
    levelAnswerIsExact: false,
    worldStyle: 'bright-day',
    latitude: 51.5145193,
    longitude: -0.0809905,
    heading: 91.29,
    pitch: 41.54,
    acquiredInventory: [
      { type: 'image', name: 'Coat check tag', image: 'assets/inventory/coat-check-ticket.png' }
    ],
    nextLevel: 'last'
  },
  last: {
    levelId: 'last',
    levelTitle: 'Final question',
    levelDescription: 'Live, universe etc.',
    levelQuestion: 'What is it?',
    levelAnswer: '42',
    levelAnswerIsExact: true,
    acquiredInventory: [
      { type: 'map', name: 'Google Maps', image: 'assets/inventory/phone-map.png' }
    ],
    nextLevel: null
  }
};
