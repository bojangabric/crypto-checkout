import * as t from 'redux/types';

export const setTotal = total => dispatch => {
  dispatch({
    type: t.SET_TOTAL,
    payload: total
  });
};

export const sendPayment = () => dispatch => {
  fetch('/api/generate-transaction-id')
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: t.SEND_PAYMENT,
        payload: res.transactionId
      });
      return res.transactionId;
    });
};

export const forceAcceptPayment = () => dispatch => {
  dispatch({
    type: t.FORCE_ACCEPT_PAYMENT
  });
};

export const getCurrencies = () => dispatch => {
  fetch('/api/currencies')
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: t.GET_CURRENCIES,
        payload: res
      });
      return res;
    });
};

export const getPromos = () => dispatch => {
  fetch('/api/promotional-offers')
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: t.GET_PROMOS,
        payload: res
      });
      return res;
    });
};

export const getPaymentAddress = (total, promo) => dispatch => {
  fetch('/api/payment-address', { method: 'POST', body: JSON.stringify({ total, promo }) })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: t.GET_PAYMENT_ADDRESS,
        payload: res.paymentAddress
      });
      return res.paymentAddress;
    });
};
