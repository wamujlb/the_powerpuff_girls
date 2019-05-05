import { combineReducers } from "redux";

import show from "./showReducer";
import episodes from "./episodesReducer";
import episode from "./episodeReducer";

export default combineReducers({
    show,
    episodes,
    episode,
});