import {SHOW} from "../constants/show";

export const loadShow = (id) => ({
    type: SHOW.LOAD,
    id,
});

export const setShow = (show, id) => ({
    type: SHOW.LOAD_SUCCESS,
    show,
    id,
});

export const setError = (id) => ({
    type: SHOW.LOAD_FAIL,
    id,
});