import * as t from 'redux/types';

export const updateQuestion = answer => dispatch => {
  dispatch({
    type: t.UPDATE_ANSWER,
    payload: answer
  });
};

export const nextQuestion = () => dispatch => {
  dispatch({
    type: t.NEXT_QUESTION
  });
};

export const gotoQuestion = number => dispatch => {
  dispatch({
    type: t.GOTO_QUESTION,
    payload: number
  });
};
