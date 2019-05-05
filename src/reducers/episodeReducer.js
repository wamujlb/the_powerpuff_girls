import { EPISODE } from "../constants/episode";

const defaultState = {
  isLoading: false,
  data: null,
  error: false,
};

const episodeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EPISODE.LOAD:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: false,
      };
    case EPISODE.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.episode,
        error: false,
      };
    case EPISODE.LOAD_FAIL:
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

export default episodeReducer;
