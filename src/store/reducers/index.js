import { combineReducers } from "redux";
import liveRates from "./liveRates.reducer";


const rootReducer = combineReducers({
  liveRates
});

export default rootReducer;
