import { combineReducers } from "redux";
import { AuthReducer } from "./reducers";

const rootReducer = combineReducers({
  auth: AuthReducer,
});
export default rootReducer;
