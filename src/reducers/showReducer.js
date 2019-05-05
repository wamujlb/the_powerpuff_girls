import { SHOW } from "../constants/show";

const defaultState = {
  isLoading: false,
  data: null,
  error: false,
};

const showReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW.LOAD:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: false,
      };
    case SHOW.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.show,
        error: false,
      };
    case SHOW.LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: true,
      };
    default:
      return state;
  }
};

export default showReducer;
