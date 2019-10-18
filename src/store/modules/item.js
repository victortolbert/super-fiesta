import { fetchListData } from '@/api/api'

const state = () => ({
  items: [],
});

const getters = {
  displayItems (state) {
    return state.items.slice(0, 20)
  },
  maxPage (state) {
    return Math.ceil(state.items.length / 20)
  },
};

const mutations = {
  SET_ITEMS (state, { items }) {
    state.items = items
  },
};

const actions = {
  fetchListData: ({ commit }, { type }) => {
    return fetchListData(type)
      .then(items => commit('SET_ITEMS', { items }))
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
