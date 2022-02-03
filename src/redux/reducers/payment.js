import * as t from 'redux/types';

const payment = (
  state = {
    total: null,
    transaction: null,
    currencies: [],
    paymentAddress: null,
    transactionId: null
  },
  action
) => {
  switch (action.type) {
    case t.GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload
      };
    case t.SET_TOTAL:
      return {
        ...state,
        total: action.payload
      };
    case t.GET_PAYMENT_ADDRESS:
      return {
        ...state,
        paymentAddress: action.payload
      };
    case t.GET_PROMOS:
      return {
        ...state,
        promos: action.payload
      };
    case t.SEND_PAYMENT:
      return {
        ...state,
        transactionId: action.payload,
        transaction: 'pending'
      };
    case t.FORCE_ACCEPT_PAYMENT:
      return {
        ...state,
        transaction: 'successful'
      };
    default:
      return { ...state };
  }
};

export default payment;
