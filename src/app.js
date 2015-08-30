'use strict';

const React = require('react');
const {Provider, connect} = require('react-redux');

const MainView = require('./components/main-view');
const store = require('./redux/store');

// pass store state and action creators to main view
const actions = require('./redux/actions');
const props = state => state.toJS();
const ReduxConnectedMainView = connect(props, actions)(MainView);

document.querySelector('.landing-page .start-game').addEventListener('click', () => {
  document.querySelector('.landing-page').style.display = 'none';
});

// bind main view to store instance
const renderer = () => <ReduxConnectedMainView />;
const target = document.getElementById('blackout-app');
React.render(<Provider store={store}>{renderer}</Provider>, target);
