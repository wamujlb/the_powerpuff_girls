import {EPISODES} from "../constants/episodes";

export const loadEpisodes = (id) => ({
    type: EPISODES.LOAD,
    id,
});

export const setEpisodes = (episodes) => ({
    type: EPISODES.LOAD_SUCCESS,
    episodes,
});

export const setError = (id) => ({
    type: EPISODES.LOAD_FAIL,
    id,
});