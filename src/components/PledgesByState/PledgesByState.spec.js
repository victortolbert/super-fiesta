import { shallowMount } from '@vue/test-utils';
import PledgesByState from './PledgesByState.vue';

describe('PledgesByState', () => {
  const programWithOnePledge = {
    participants: [
      {
        participant_info: {
          pledges: [
            {
              id: 1,
              pledge_status_id: 2,
              pledge_sponsor: {
                country: 'UK',
                country_entity: {
                  name: 'United Kingdom',
                },
                state: 'GA',
              },
            },
          ],
          classroom: {
            name: 'Great Classroom Name',
            grade: {
              name: 'first grade!!!',
            },
          },
        },
      },
    ],
  };

  const programWithManyPledges = {
    participants: [
      {
        participant_info: {
          pledges: [
            {
              id: 1,
              pledge_status_id: 2,
              pledge_sponsor: {
                country: 'US',
                country_entity: {
                  name: 'United States',
                },
                state: 'NY',
              },
            },
            {
              id: 2,
              pledge_status_id: 2,
              pledge_sponsor: {
                country: 'UK',
                country_entity: {
                  name: 'United Kingdom',
                },
                state: 'GA',
              },
            },
          ],
          classroom: {
            name: 'Great Classroom Name',
            grade: {
              name: 'first grade!!!',
            },
          },
        },
      },
    ],
  };
  const programWithManyClassrooms = {
    participants: [
      {
        participant_info: {
          pledges: [
            {
              id: 1,
              pledge_status_id: 2,
              pledge_sponsor: {
                country: 'UK',
                country_entity: {
                  name: 'United Kingdom',
                },
                state: 'GA',
              },
            },
          ],
          classroom: {
            id: 1,
            name: 'First Classroom Name',
            grade: {
              name: 'first grade!!!',
            },
          },
        },
      },
      {
        participant_info: {
          pledges: [
            {
              id: 2,
              pledge_status_id: 2,
              pledge_sponsor: {
                country: 'UK',
                country_entity: {
                  name: 'United Kingdom',
                },
                state: 'GA',
              },
            },
          ],
          classroom: {
            id: 2,
            name: 'Second Classroom Name',
            grade: {
              name: 'Second grade!!!',
            },
          },
        },
      },
    ],
  };
  const $store = {
    state: {
      lang: {
        pledge_info: {},
      },
    },
  };

  it('matches snapshot with 1 pledge', () => {
    const wrapper = shallowMount(PledgesByState, {
      mocks: { $store },
      propsData: { program: programWithOnePledge },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with multiple pledges', () => {
    const wrapper = shallowMount(PledgesByState, {
      mocks: { $store },
      propsData: { program: programWithManyPledges },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('counts 1 state', () => {
    const wrapper = shallowMount(PledgesByState, {
      mocks: { $store },
      propsData: { program: programWithOnePledge },
    });
    expect(wrapper.vm.statesCount).toBe(1);
  });

  it('counts 2 states', () => {
    const wrapper = shallowMount(PledgesByState, {
      mocks: { $store },
      propsData: { program: programWithManyPledges },
    });
    expect(wrapper.vm.statesCount).toBe(2);
  });

  it('finds 1 country', () => {
    const wrapper = shallowMount(PledgesByState, {
      mocks: { $store },
      propsData: { program: programWithOnePledge },
    });
    expect(wrapper.vm.myPledgedCountries)
      .toStrictEqual(['United Kingdom']);
  });

  it('finds 2 countries', () => {
    const wrapper = shallowMount(PledgesByState, {
      mocks: { $store },
      propsData: { program: programWithManyPledges },
    });
    expect(wrapper.vm.myPledgedCountries)
      .toStrictEqual(['United States', 'United Kingdom']);
  });

  it('makes a classroom label', () => {
    const wrapper = shallowMount(PledgesByState, {
      mocks: { $store },
      propsData: { program: programWithManyPledges },
    });
    const classroom = {
      name: 'Classname',
      grade: {
        name: 'Gradename',
      },
    };
    expect(wrapper.vm.statesByClassroomLabel(classroom))
      .toBe('Classname - Gradename');
  });

  it('finds 1 classroom', () => {
    const wrapper = shallowMount(PledgesByState, {
      mocks: { $store },
      propsData: { program: programWithManyPledges },
    });
    let classroom = programWithManyPledges.participants[0].participant_info.classroom;
    expect(wrapper.vm.classrooms).toStrictEqual([classroom]);
  });

  it('finds 2 classrooms', () => {
    const wrapper = shallowMount(PledgesByState, {
      mocks: { $store },
      propsData: { program: programWithManyClassrooms },
    });
    let classroom1 = programWithManyClassrooms.participants[0].participant_info.classroom;
    let classroom2 = programWithManyClassrooms.participants[1].participant_info.classroom;
    expect(wrapper.vm.classrooms).toStrictEqual([classroom1, classroom2]);
  });
});
