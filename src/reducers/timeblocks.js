import {
  GET_TIMEBLOCKS_BY_USERID,
  GET_TIMEBLOCKS_BY_USERID_SUCCESS,
  GET_TIMEBLOCKS_BY_USERID_FAIL,
  UPDATE_TIMEBLOCKS_BY_USERID,
  UPDATE_TIMEBLOCKS_BY_USERID_SUCCESS,
  UPDATE_TIMEBLOCKS_BY_USERID_FAIL,
  GET_TIMEBLOCKS_BY_DATE,
  GET_TIMEBLOCKS_BY_DATE_SUCCESS,
  GET_TIMEBLOCKS_BY_DATE_FAIL,
  GET_ALL_TIMEBLOCKS_BY_DATE,
  GET_ALL_TIMEBLOCKS_BY_DATE_SUCCESS,
  GET_ALL_TIMEBLOCKS_BY_DATE_FAIL
} from "../actions";

const initialState = {
  getTimeBlocksByIdLoading: false,
  getTimeBlocksByIdError: null,
  timeBlocks: [],
  updateTimeBlocksError: null,
  updateTimeBlocksLoading: false,
  getTimeBlockByDateError: null,
  getTimeBlockByDateLoading: false,
  getAllTimeBlockByDateError: null,
  getAllTimeBlockByDateLoading: false,
  allTimeBlocks: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TIMEBLOCKS_BY_USERID:
      return {
        ...state,
        getTimeBlocksByIdError: null,
        getTimeBlocksByIdLoading: true
      };
    case GET_TIMEBLOCKS_BY_USERID_SUCCESS:
      return {
        ...state,
        getTimeBlocksByIdLoading: false,
        timeBlocks: action.payload.data
      };
    case GET_TIMEBLOCKS_BY_USERID_FAIL:
      return {
        ...state,
        getTimeBlocksByIdError: action.payload,
        getTimeBlocksByIdLoading: false
      };

    case UPDATE_TIMEBLOCKS_BY_USERID:
      return {
        ...state,
        updateTimeBlocksError: null,
        updateTimeBlocksLoading: true
      };
    case UPDATE_TIMEBLOCKS_BY_USERID_SUCCESS:
      return {
        ...state,
        updateTimeBlocksLoading: false,
        timeBlocks: action.payload.data
      };
    case UPDATE_TIMEBLOCKS_BY_USERID_FAIL:
      return {
        ...state,
        updateTimeBlocksError: action.payload,
        updateTimeBlocksLoading: false
      };

    case GET_TIMEBLOCKS_BY_DATE:
      return {
        ...state,
        getTimeBlockByDateError: null,
        getTimeBlockByDateLoading: true
      };
    case GET_TIMEBLOCKS_BY_DATE_SUCCESS:
      return {
        ...state,
        getTimeBlockByDateLoading: false,
        timeBlocks: action.payload.data
      };
    case GET_TIMEBLOCKS_BY_DATE_FAIL:
      return {
        ...state,
        getTimeBlockByDateError: action.payload,
        getTimeBlockByDateLoading: false
      };

    case GET_ALL_TIMEBLOCKS_BY_DATE:
      return {
        ...state,
        getAllTimeBlockByDateError: null,
        getAllTimeBlockByDateLoading: true
      };
    case GET_ALL_TIMEBLOCKS_BY_DATE_SUCCESS:
      return {
        ...state,
        getAllTimeBlockByDateLoading: false,
        allTimeBlocks: action.payload.data
      };
    case GET_ALL_TIMEBLOCKS_BY_DATE_FAIL:
      return {
        ...state,
        getAllTimeBlockByDateError: action.payload,
        getAllTimeBlockByDateLoading: false
      };

    default:
      return state;
  }
};
