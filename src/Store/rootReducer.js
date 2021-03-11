import { combineReducers } from "redux";
import { AuthReducer, ChannelReducer } from "./reducers";

const rootReducer = combineReducers({
  auth: AuthReducer,
  channel: ChannelReducer,
});
export default rootReducer;
