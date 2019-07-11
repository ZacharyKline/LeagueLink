import {
  CREATE_FACILITY,
  CREATE_FACILITY_SUCCESS,
  CREATE_FACILITY_FAIL,
  GET_FACILITIES,
  GET_FACILITIES_SUCCESS,
  GET_FACILITIES_FAIL,
  GET_FACILITY_BY_FACILITYID,
  GET_FACILITY_BY_FACILITYID_SUCCESS,
  GET_FACILITY_BY_FACILITYID_FAIL,
  GET_FACILITY_BY_MANAGERID,
  GET_FACILITY_BY_MANAGERID_SUCCESS,
  GET_FACILITY_BY_MANAGERID_FAIL,
  GET_FACILITY_BY_TEAMID,
  GET_FACILITY_BY_TEAMID_SUCCESS,
  GET_FACILITY_BY_TEAMID_FAIL,
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
  getFacilitiesError: null,
  getFacilitiesLoading: false,
  facilities: [],
  getFacilityByIdError: null,
  getFacilityByIdLoading: false,
  specificFacility: {},
  getFacilityByManagerIdError: null,
  getFacilityByManagerIdLoading: false,
  managerFacility: {},
  getFacilityByTeamIdError: null,
  getFacilityByTeamIdLoading: false,
  teamFacility: {},
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

    case GET_FACILITIES:
      return {
        ...state,
        getFacilitiesError: null,
        getFacilitiesLoading: true
      };
    case GET_FACILITIES_SUCCESS:
      return {
        ...state,
        getFacilitiesLoading: false,
        facilities: action.payload
      };
    case GET_FACILITIES_FAIL:
      return {
        ...state,
        getFacilitiesError: action.payload,
        getFacilitiesLoading: false
      };

    case GET_FACILITY_BY_FACILITYID:
      return {
        ...state,
        getFacilityByIdError: null,
        getFacilityByIdLoading: true
      };
    case GET_FACILITY_BY_FACILITYID_SUCCESS:
      return {
        ...state,
        getFacilityByIdLoading: false,
        specificFacility: action.payload
      };
    case GET_FACILITY_BY_FACILITYID_FAIL:
      return {
        ...state,
        getFacilityByIdError: action.payload,
        getFacilityByIdLoading: false
      };

    case GET_FACILITY_BY_MANAGERID:
      return {
        ...state,
        getFacilityByManagerIdError: null,
        getFacilityByManagerIdLoading: true
      };
    case GET_FACILITY_BY_MANAGERID_SUCCESS:
      return {
        ...state,
        getFacilityByManagerIdLoading: false,
        managerFacility: action.payload
      };
    case GET_FACILITY_BY_MANAGERID_FAIL:
      return {
        ...state,
        getFacilityByManagerIdError: action.payload,
        getFacilityByManagerIdLoading: false
      };

    case GET_FACILITY_BY_TEAMID:
      return {
        ...state,
        getFacilityByTeamIdError: null,
        getFacilityByTeamIdLoading: true
      };
    case GET_FACILITY_BY_TEAMID_SUCCESS:
      return {
        ...state,
        getFacilityByTeamIdLoading: false,
        teamFacility: action.payload
      };
    case GET_FACILITY_BY_TEAMID_FAIL:
      return {
        ...state,
        getFacilityByTeamIdError: action.payload,
        getFacilityByTeamIdLoading: false
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
