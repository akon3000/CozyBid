import { createStore } from 'redux';
import dataImage from './data-image.json';

const reducer = (state, action) => {

  switch (action.type) {

    case "CHANGE_IMAGE": {
      var id = state.map(function(e) { return e.id; }).indexOf(action.id);
      state[id].url = action.url;
      return state;
    }

    default: return state;
  }

};

const store = createStore(reducer, dataImage);

export default store;