const getters = {
  programs: (state, getters) => getters.user.programs,

  program: (state, getters) => id => {
    return getters.user.programs.find(program => program.id === id)
  }
}

const mutations = {
  SET_PROGRAM: (state, program) => {
    state.program = program
  },
  SET_PROGRAMS: (state, programs) => {
    state.user.programs = programs
  }
}

const actions = {
  initPrograms: ({ commit, getters }) => {
    let programs = []
    commit('SET_PROGRAMS', programs)
  }
}

export default {
  getters,
  mutations,
  actions
}
