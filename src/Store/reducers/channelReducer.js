import { SET_CURRENT_CHANNEL } from "../actions";

const initialState = {
  currentChannel: null,
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload,
      };

    default:
      return state;
  }
};

export default channelReducer;
