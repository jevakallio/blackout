'use strict';
let levels = require('../data/levels');
let analytics = require('../util/analytics');
module.exports = {
  updatePosition(position) {
    return {
      type: 'UPDATE_POSITION',
      position
    };
  },

  updatePov(pov) {
    return {
      type: 'UPDATE_POV',
      pov
    };
  },

  updateMapZoom(mapZoom) {
    return {
      type: 'UPDATE_MAP_ZOOM',
      mapZoom
    };
  },

  setLevel(levelId) {
    let level = levels[levelId];
    if(!level) {
      throw new Error('No known level ' + levelId);
    }
    return {
      type: 'SET_LEVEL',
      level: levels[levelId]
    };
  },

  correctAnswerGiven(levelId, answer) {
    analytics.addEvent({
      event: 'rightAnswer',
      level: levelId,
      answer: answer
    });
    let nextLevelId = levels[levelId].nextLevel;
    if (nextLevelId) {
      return {
        type: 'CORRECT_ANSWER',
        nextLevel: levels[nextLevelId],
        previousAnswer: answer
      };
    }
    return {
      type: 'FINISHED'
    };

  },

  wrongAnswerGiven(levelId, answer) {
    analytics.addEvent({
      event: 'wrongAnswer',
      level: levelId,
      answer: answer
    });

    return {
      type: 'WRONG_ANSWER',
      previousAnswer: answer
    };
  },

  viewInventoryItem(item) {
    return {
      type: 'VIEW_INVENTORY_ITEM',
      item
    };
  },

  hideInventoryItem() {
    return {
      type: 'HIDE_INVENTORY_ITEM'
    };
  }

};
