import Vue from 'vue'
import Vuex from 'vuex'
import programs from '@/store/modules/programs'
import { sortBy } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    programs
  },
  state: {
    user: {}
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    initStore: ({ state, commit, getters, dispatch }, user) => {
      let participants = user.participants
      delete user.participants
      let programs = []

      participants.forEach(participant => {
        let programId = participant.participant_info.classroom.group.program.id
        participant.participant_info.pledges.forEach(pledge => {
          pledge.amount = parseFloat(pledge.amount)
        })
        let program = programs.find(program => program.id === programId)
        if (program === undefined || !participant.participant_info.family_pledging_enabled) {
          program = participant.participant_info.classroom.group.program
          program.participants = []
          programs.push(program)
        }
        delete participant.participant_info.classroom.group.program
        program.participants.push(participant)
      })

      programs.forEach(program => sortBy(program.participants, 'first_name'))
      sortBy(programs, 'name')

      user.programs = programs

      commit('SET_USER', user)
    }
  }
})
