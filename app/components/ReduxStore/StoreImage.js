import { createStore } from 'redux';
import dataImage from './data-image.json';

import { 
  CHANGE_IMAGE, 
  RANDOM_IMAGE, 
  ADD_IMAGE,
  CHANGE_LINK,
  REMOVE_IMAGE,
  REMOVE_ALL_IMAGE
} from './type';

const generateLayout = (items) => {
  return items.map(function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: ((Math.floor(Math.random() * 5)) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: item.id.toString(),
    };
  });
};

const reducer = (state, action) => {

  switch (action.type) {

    case CHANGE_LINK: {
      var id = state.dataImage.map(function(e) { return e.id; }).indexOf(action.id);
      state.dataImage[id].refer = action.refer;
      return state;
    }

    case CHANGE_IMAGE: {
      var id = state.dataImage.map(function(e) { return e.id; }).indexOf(action.id);
      state.dataImage[id].url = action.url;
      return state;
    }

    case RANDOM_IMAGE: {
      var lg = generateLayout(state.dataImage),
          md = generateLayout(state.dataImage),
          sm = generateLayout(state.dataImage),
          xs = generateLayout(state.dataImage);
      state.layouts = { ...state.layouts, lg: [...lg], md: [...md], sm: [...md], xs: [...xs] };
      return state;
    }

    case ADD_IMAGE: {
      state.dataImage.push({
        "id": state.dataImage.length === 0 ? 1 : Math.max.apply(Math, state.dataImage.map(function(o) { return o.id; })) + 1,
        "url": "https://www.hsjaa.com/images/joomlart/demo/default.jpg", 
        "refer": "https://www.google.co.th" 
      });
      return state;
    }

    case REMOVE_IMAGE: {
      var id = state.dataImage.map(function(e) { return e.id; }).indexOf(action.id);
      state.dataImage.splice(id, 1);
      return state;
    }

    case REMOVE_ALL_IMAGE: {
      state.dataImage = [...[]];
      state.layouts = { ...state.layouts, lg: [...[]], md: [...[]], sm: [...[]], xs: [...[]] };
      return state;
    }

    default: return state;
  }

};

const store = createStore(reducer, {
  dataImage,
  layouts: { 
    lg: generateLayout(dataImage), 
    md: generateLayout(dataImage), 
    sm: generateLayout(dataImage), 
    xs: generateLayout(dataImage)
  }
});

export default store;