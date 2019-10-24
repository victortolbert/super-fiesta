import Vue from 'vue';
import Vuex from 'vuex';
import createMutationsSharer from 'vuex-shared-mutations'

import authModule from '@/store/modules/auth/'
import currentUserProfile from '@/store/modules/profile/currentUser'

import userModule from '@/store/modules/user';
import programModule from '@/store/modules/program';
import participantModule from '@/store/modules/participant';
import classroomModule from '@/store/modules/classroom';
import pledgeModule from '@/store/modules/pledge';
import micrositeModule from '@/store/modules/microsite';
import itemModule from '@/store/modules/item';
import * as event from '@/store/modules/event';
import * as notification from '@/store/modules/notification';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createMutationsSharer({
    predicate: [
      'auth/USER',
      'auth/TOKEN',
      'auth/REFRESH_TOKEN_EXPIRED',
      'auth/USER_LOGGED_IN',
      'auth/USER_LOGGED_OUT',
    ],
  })],
  modules: {
    auth: authModule,
    profile: currentUserProfile,
    user: userModule,
    program: programModule,
    participant: participantModule,
    classroom: classroomModule,
    pledge: pledgeModule,
    microsite: micrositeModule,
    item: itemModule,
    event,
    notification,
  },
  state: {
    lang: Object,
    s3Bucket: '',
    minPasswordLength: 0,
    avatarPath: '',
    contacts: [],
  },
  mutations: {
    SET_LANG (state, lang) {
      state.lang = lang;
    },
    SET_S3_BUCKET (state, bucket) {
      state.s3Bucket = bucket;
    },
    SET_MIN_PASSWORD_LENGTH (state, length) {
      state.minPasswordLength = length;
    },
    SET_AVATAR_PATH (state, avatarPath) {
      state.avatarPath = avatarPath;
    },
    ADD_CONTACTS (state, contacts) {
      state.contacts = state.contacts.concat(contacts);
    },
  },
  getters: {
    // avatarPath: state => `https://${state.s3Bucket}.s3.amazonaws.com/${state.avatarPath}`,
    avatarPath: state => `/v3-assets/dashboard/images/`,

    contacts: state => state.contacts,
  },
  actions: {
    initStore: ({ dispatch }, user) => {
      dispatch('initParticipantsAndPledges', user.participants);
      dispatch('initPrograms');
      dispatch('initClassrooms');
    },
  },
});

export default store;
