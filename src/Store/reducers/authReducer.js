import { SET_USER, CLEAR_USER } from "../actions";

const initialState = {
  currentUser: null,
  isLoading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoading: false,
      };

    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
