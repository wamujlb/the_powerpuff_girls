// @flow
import {SHOW} from "../constants/show";

export const loadShow = (id: string) => ({
    type: SHOW.LOAD,
    id,
});

export const setShow = (show: Object, id: string) => ({
    type: SHOW.LOAD_SUCCESS,
    show,
    id,
});

export const setError = (id) => ({
    type: SHOW.LOAD_FAIL,
    id,
});