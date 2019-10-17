const state = () => ({
  participants: [],
});

const getters = {
  participants: state => state.participants,

  participantById: state => id => {
    return state.participants.find(participant => participant.id === id);
  },

  lastParticipant: state => state.participants.slice(-1)[0],

  participantsByProgramId: state => programId => {
    return state.participants.filter(participant => participant.participant_info.classroom.group.program.id === programId);
  },

  otherParticipants: getters => participantId => {
    return getters.participants.filter(otherParticipant => {
      return otherParticipant.id !== participantId;
    });
  },

  sortPledgesByDateEntered: () => pledges => {
    return pledges.sort(function (pledgesA, pledgesB) {
      return new Date(pledgesA[0].ts_entered) - new Date(pledgesB[0].ts_entered);
    });
  },

  isFamilyPledgingEnabled: () => participant => {
    let program = participant.participant_info.classroom.group.program;
    if (program.program_pledge_setting.family_pledging_enabled === 1 &&
          participant.participant_info.family_pledging_enabled === 1) {
      return true;
    }

    return false;
  },

  smallestIdParticipant: getters => participant => {
    let program = participant.participant_info.classroom.group.program;
    let participantsInProgram = getters.participants.filter(participant => {
      return participant.participant_info.classroom.grade.program !== program.id;
    });

    participantsInProgram.sort((a, b) => (a.id > b.id) ? 1 : -1);

    return participantsInProgram[0];
  },

  addFamilyPledgesToPledges: () => (participant, otherParticipants) => {
    let pledges = participant.participant_info.pledges;

    pledges.forEach((pledge, index) => {
      pledge.amount = parseFloat(pledge.amount);
      if (pledge.family_pledge_id !== null) {
        let familyPledges = [pledge];
        otherParticipants.forEach(otherParticipant => {
          otherParticipant.participant_info.pledges.forEach(siblingPledge => {
            if (siblingPledge.family_pledge_id === pledge.family_pledge_id && siblingPledge.id !== pledge.id) {
              familyPledges.push(siblingPledge);
            }
          });
        });
        pledges.splice(index, 1, familyPledges);
      } else {
        // Put the pledge into an array to keep the format of pledges consistent
        pledges.splice(index, 1, [pledge]);
      }
    });

    return pledges;
  },
};

const mutations = {
  SET_PARTICIPANTS: (state, participants) => {
    state.participants = participants;
  },
};

const actions = {
  initParticipantsAndPledges ({ getters, commit }, participants) {
    let allPledges = [];

    participants.forEach(participant => {
      let otherParticipants = participants.filter(otherParticipant => {
        return otherParticipant.id !== participant.id;
      });

      let pledges = getters.addFamilyPledgesToPledges(participant, otherParticipants);
      pledges = getters.sortPledgesByDateEntered(pledges);

      participant.participant_info.pledges = pledges;
      allPledges.push(pledges);
    });

    participants = _.sortBy(participants, 'first_name');

    commit('SET_PARTICIPANTS', participants);
    commit('SET_PLEDGES', allPledges);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
