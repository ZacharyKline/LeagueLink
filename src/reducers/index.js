import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import facilities from "./facilities";
import users from "./user";
import teams from "./teams";
import timeblocks from "./timeblocks";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    facilities,
    users,
    teams,
    timeblocks
  });
