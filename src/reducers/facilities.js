import {
  CREATE_FACILITY,
  CREATE_FACILITY_SUCCESS,
  CREATE_FACILITY_FAIL,
  ADD_MANAGERID_TO_FACILITY,
  ADD_MANAGERID_TO_FACILITY_SUCCESS,
  ADD_MANAGERID_TO_FACILITY_FAIL,
  ADD_TEAMID_TO_FACILITY,
  ADD_TEAMID_TO_FACILITY_SUCCESS,
  ADD_TEAMID_TO_FACILITY_FAIL
} from "../actions";

const initialState = {
  createFacilityLoading: false,
  facilityId: null,
  createFacilityError: null,
  addManagerIdLoading: false,
  addManagerError: null,
  managerLinkedToFaciity: false,
  addTeamIdLoading: false,
  addTeamIdError: null,
  teamLinkedToFaciity: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FACILITY:
      return {
        ...state,
        createFacilityError: null,
        createFacilityLoading: true
      };
    case CREATE_FACILITY_SUCCESS:
      return {
        ...state,
        createFacilityLoading: false,
        facilityId: action.payload.id
      };
    case CREATE_FACILITY_FAIL:
      return {
        ...state,
        createFacilityError: action.payload,
        createFacilityLoading: false
      };
    case ADD_MANAGERID_TO_FACILITY:
      return {
        ...state,
        addManagerError: null,
        addManagerIdLoading: true
      };
    case ADD_MANAGERID_TO_FACILITY_SUCCESS:
      return {
        ...state,
        addManagerIdLoading: false,
        managerLinkedToFaciity: true
      };
    case ADD_MANAGERID_TO_FACILITY_FAIL:
      return {
        ...state,
        addManagerError: action.payload,
        addManagerIdLoading: false
      };

    case ADD_TEAMID_TO_FACILITY:
      return {
        ...state,
        addTeamIdError: null,
        addTeamIdLoading: true
      };
    case ADD_TEAMID_TO_FACILITY_SUCCESS:
      return {
        ...state,
        addTeamIdLoading: false,
        teamLinkedToFaciity: true
      };
    case ADD_TEAMID_TO_FACILITY_FAIL:
      return {
        ...state,
        addTeamIdError: action.payload,
        addTeamIdLoading: false
      };
    default:
      return state;
  }
};
