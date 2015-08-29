import Cycle from '@cycle/core';
import DOM from '@cycle/dom';

function main() {
  return {
    DOM: Cycle.Rx.Observable.interval(1000)
      .map(i => DOM.h(
        'h1', '' + i + ' seconds elapsed'
      ))
  };
}

let drivers = {
  DOM: DOM.makeDOMDriver('#blackout-app')
};

Cycle.run(main, drivers);
