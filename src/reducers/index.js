import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import managers from "./managers";
import coaches from "./coaches";
import parents from "./parents";
import teams from "./teams";

export default history =>
  combineReducers({
    router: connectRouter(history),
    coaches,
    managers,
    parents,
    teams
  });
