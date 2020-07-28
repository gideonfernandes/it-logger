import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from './types';

// Get logs from json-server action
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const response = await fetch('/logs');
    const data = await response.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
};

// Add new log action
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const response = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
};

// Delete log from server action
export const deleteLog = logId => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${logId}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_LOG,
      payload: logId
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
};

// Set loading to true action
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
