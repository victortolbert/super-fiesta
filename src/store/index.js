import Vue from 'vue'
import Vuex from 'vuex'
import programs from '@/store/modules/programs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    programs,
  },
  state: {
    user: {},
  },
  getters: {
    user: state => state.user,
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
  },
  actions: {
    initStore: ({ state, commit, getters, dispatch }, user) => {
      let programs = []
      let participants = user.participants
      delete user.participants

      participants.forEach(participant => {
        let programId = participant.participant_info.classroom.group.program.id
        let program = programs.find(program => program.id === programId)

        if (program === undefined || !participant.participant_info.family_pledging_enabled) {
          program = participant.participant_info.classroom.group.program
          program.participants = []
          programs.push(program)
        }
        delete participant.participant_info.classroom.group.program

        // convert pledge amount to float
        participant.participant_info.pledges.forEach(pledge => {
          pledge.amount = parseFloat(pledge.amount)
        })

        program.participants.push(participant)
      })

      // sort programs by name then, sort each program participant by first_name
      // programs.forEach(program => (
      //   program.participants.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1))
      // ).sort((a, b) => (a.name > b.name) ? 1 : -1)

      user.programs = programs

      commit('SET_USER', user)
    },
  },
})
