// @flow

/**
 * Fetch show details
 * @function fetchShow
 * @param showId - show ID 
 * @return show data or error 
 */
const fetchShow = async (showId: string) => {
    const response = await fetch(`http://api.tvmaze.com/shows/${showId}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

/**
 * Fetch show episodes
 * @function fetchEpisodes
 * @param showId - show ID 
 * @return episodes data or error 
 */
const fetchEpisodes = async (showId: string) => {
    const response = await fetch(`http://api.tvmaze.com/shows/${showId}/episodes`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

/**
 * Fetch show episodes
 * @function fetchEpisode
 * @param showId - show ID 
 * @param season - season number
 * @param episode - episode number
 * @return episodes data or error 
 */
const fetchEpisode = async (showId: string, season: string, episode: string) => {
    const response = await fetch(`http://api.tvmaze.com/shows/${showId}/episodebynumber?season=${season}&number=${episode}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchShow, fetchEpisodes, fetchEpisode };