import { shallowMount } from '@vue/test-utils';
import ParticipantRewards from './ParticipantRewards.vue';

describe('ParticipantRewards', () => {
  let participant;
  beforeEach(() => {
    participant = {
      prizes: [
      ],
      participant_info: {
        prize_bound_students: [
        ],
        classroom: {
          group: {
            prizes_bound: [
            ],
          },
        },
      },
    };
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(ParticipantRewards);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('is computes basic rewards', () => {
    addPrize(1);
    const wrapper = shallowMount(ParticipantRewards, {
      propsData: { participant },
    });
    expect(wrapper.vm.getCombinedPrizeObjects().length).toBe(1);
    expect(wrapper.vm.rewards.length).toBe(1);
  });

  it('is computes rewards removing activity rewards', () => {
    addPrize(1);
    addPrize(2, true);
    const wrapper = shallowMount(ParticipantRewards, {
      propsData: { participant },
    });
    expect(wrapper.vm.getCombinedPrizeObjects().length).toBe(2);
    expect(wrapper.vm.rewards.length).toBe(1);
  });

  it('is computes rewards removing quantity rewards', () => {
    addPrize(1, null, null, null, true);
    const wrapper = shallowMount(ParticipantRewards, {
      propsData: { participant },
    });
    expect(wrapper.vm.getCombinedPrizeObjects().length).toBe(1);
    expect(wrapper.vm.rewards.length).toBe(0);
  });

  it('is computes rewards keeping prizes inside of time window', () => {
    let yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date());
    let tomorrow = (d => new Date(d.setDate(d.getDate() + 1)))(new Date());
    addPrize(1, null, yesterday, tomorrow);
    const wrapper = shallowMount(ParticipantRewards, {
      propsData: { participant },
    });
    expect(wrapper.vm.getCombinedPrizeObjects().length).toBe(1);
    expect(wrapper.vm.rewards.length).toBe(1);
  });
  it('is computes rewards removing prizes out of time window', () => {
    let dayBeforeYesterday = (d => new Date(d.setDate(d.getDate() - 2)))(new Date());
    let yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date());
    addPrize(1, null, dayBeforeYesterday, yesterday);
    const wrapper = shallowMount(ParticipantRewards, {
      propsData: { participant },
    });
    expect(wrapper.vm.getCombinedPrizeObjects().length).toBe(1);
    expect(wrapper.vm.rewards.length).toBe(0);
  });

  let addPrize = (id, activity_reward = null, starts_at = null, ends_at = null, quantity = null) => {
    participant.prizes.push({id});
    participant.participant_info.prize_bound_students.push({prize_id: id});
    participant.participant_info.classroom.group.prizes_bound.push(
      {
        prize_id: id,
        activity_reward,
        starts_at,
        ends_at,
        quantity,
      },
    );
  };
});
