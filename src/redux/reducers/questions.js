import * as t from 'redux/types';

const stepsFlow = ['select-crypto', 'select-promo', 'pay'];

const questions = (
  state = {
    answeredQuestions: [{ icon: '/images/crypto_icon.png', answer: 'Crypto currency', number: -1 }],
    currentQuestion: stepsFlow[0]
  },
  action
) => {
  switch (action.type) {
    case t.UPDATE_ANSWER:
      return {
        ...state,
        answeredQuestions: [
          ...state.answeredQuestions,
          {
            icon: '/images/checkmark.png',
            answer: action.payload,
            number: stepsFlow.findIndex(s => s === state.currentQuestion)
          }
        ]
      };
    case t.NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: stepsFlow[stepsFlow.findIndex(s => s === state.currentQuestion) + 1]
      };
    case t.GOTO_QUESTION:
      return {
        ...state,
        answeredQuestions: state.answeredQuestions.slice(0, action.payload + 1),
        currentQuestion: stepsFlow[action.payload]
      };

    default:
      return { ...state };
  }
};

export default questions;
