import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//import coaches from "./coaches";
//import managers from "./managers";
//import parents from "./parents";
//import teams from "./teams";

export default history =>
  combineReducers({
    router: connectRouter(history)
    //coaches,
    //managers,
    //parents,
    //teams
  });

//export * from "./coaches"
//export * from "./managers"
//export * from "./parents"
//export * from "./teams"
