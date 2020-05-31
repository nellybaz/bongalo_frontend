const state = {
  showModal: 0, // 1 is for login, 2 for register, and 0 for none
};

const getters = {
  getModalState: (state) => state.showModal,
};

const actions = {
  async setModalState({ commit }, newState) {
    commit("setModalState", newState);
  },
};

const mutations = {
  setModalState: (state, newState) => (state.showModal = newState),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
