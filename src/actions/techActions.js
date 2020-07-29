import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

// Get techs from json-server action
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const response = await fetch('/techs');
    const data = await response.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  };
};

// Add new tech action
export const addTech = tech => async dispatch => {
  try {
    setLoading();

    const response = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  };
};

// Delete tech from server action
export const deleteTech = techId => async dispatch => {
  try {
    setLoading();

    await fetch(`/techs/${techId}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TECH,
      payload: techId
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  };
};

// Set loading to true action
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
