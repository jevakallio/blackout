'use strict';

const Redux = require('redux');
const gameState = require('../util/game-state');

function mutate(state, action) {
  switch(action.type) {
    case 'UPDATE_POSITION':
      return state.merge(action.position);
    case 'UPDATE_POV':
      return state.merge(action.pov);
    case 'SET_LEVEL':
      console.warn('SET_LEVEL called, needs work...');
      return state.merge(action.level);
    case 'UPDATE_MAP_ZOOM':
      return state.set('mapZoom', action.mapZoom);
    case 'CORRECT_ANSWER':
      return state
        .merge(action.nextLevel)
        .update('inventory', inventory => inventory.push(...action.nextLevel.acquiredInventory || []))
        .set('previousAnswer', action.answer)
        .set('previousAnswerWasCorrect', true);
    case 'WRONG_ANSWER':
      return state
        .merge(action.nextLevel)
        .set('previousAnswer', action.answer)
        .set('previousAnswerWasCorrect', false);
    case 'VIEW_INVENTORY_ITEM':
      return state.set('focusedInventoryItem', action.item);
    case 'HIDE_INVENTORY_ITEM':
      return state.set('focusedInventoryItem', null);
    default:
      return state;
  }
}

function next(state, action) {

  if(action.type === '@@redux/INIT') {
    return gameState.load() || gameState.getInitialState();
  }

  let nextState = mutate(state, action);
  gameState.save(nextState);
  return nextState;
}

module.exports = Redux.createStore(next);
