import $store from './';

const state = {};
const pledges = [
  {
    hasPendingPayment: false,
    payment_id: null,
  },
];

describe('getters', () => {
  let test = $store.getters.isMissingPayment(state)(pledges);
  it('returns true when missing payment for pledges', () => {
    expect(test).toBeTruthy();
  });
});
