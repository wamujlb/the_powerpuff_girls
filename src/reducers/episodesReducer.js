import { EPISODES } from "../constants/episodes";

const defaultState = {
  isLoading: false,
  data: null,
  error: false,
};

const episodesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EPISODES.LOAD:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: false,
      };
    case EPISODES.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.episodes,
        error: false,
      };
    case EPISODES.LOAD_FAIL:
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

export default episodesReducer;
