export default {
  methods: {
    participantDisplayNames (participants) {
      if (participants.length === 1) {
        return participants[0].first_name;
      }
      if (participants.length === 2) {
        return participants[0].first_name + ' and ' + participants[1].first_name;
      }
      let names = participants.map(function (participant) {
        return participant.first_name;
      });
      let last = names.pop();
      return names.join(', ') + ' and ' + last;
    },
  },
};
