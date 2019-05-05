import {EPISODE} from "../constants/episode";

export const loadEpisode = (showId, season, episode) => ({
    type: EPISODE.LOAD,
    showId,
    season, 
    episode,
});

export const setEpisode = (episode) => ({
    type: EPISODE.LOAD_SUCCESS,
    episode,
});

export const setError = (id) => ({
    type: EPISODE.LOAD_FAIL,
    id,
});