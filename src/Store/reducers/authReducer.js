import { SET_USER } from "../actions";

const initialState = {
  currentUser: null,
  isLoading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
