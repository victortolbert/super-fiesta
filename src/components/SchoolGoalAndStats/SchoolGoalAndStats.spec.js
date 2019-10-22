import { shallowMount, createLocalVue } from '@vue/test-utils';
import SchoolGoalAndStats from './SchoolGoalAndStats.vue';
import Vuex from 'vuex';
jest.mock('axios');

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.filter('currency', jest.fn());

describe('SchoolGoalAndStats', () => {
  let program = {};
  let store;
  let storeProps;

  beforeEach(() => {
    program = {
      unit: {
        name: '',
      },
      program_pledge_setting: {
        flat_donate_only: 1,
      },
      participants: [
        {
          participant_info: {
            classroom_id: 1,
          },
        },
        {
          participant_info: {
            classroom_id: 3,
          },
        },
      ],
      total_raised_goal: 10,
      microsite: {
        funds_raised_for: 'Stuff',
        images: ['doesntexist.jpg'],
      },
    };
    storeProps = {
      lang: '',
    };
    store = new Vuex.Store({
      state: storeProps,
    });
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(SchoolGoalAndStats, {
      localVue,
      store,
      propsData: { program },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('calculates goal not met correctly', done => {
    const wrapper = shallowMount(SchoolGoalAndStats, {
      localVue,
      store,
      propsData: { program },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.vm.progressPercentage).toBe(50);
      done();
    });
  });

  it('calculates goal met correctly', done => {
    program.total_raised_goal = 5;
    const wrapper = shallowMount(SchoolGoalAndStats, {
      localVue,
      store,
      propsData: { program },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.vm.progressPercentage).toBe(100);
      done();
    });
  });

  it('it calculates goal correctly when client_goal is 0', done => {
    program.total_raised_goal = 0;
    const wrapper = shallowMount(SchoolGoalAndStats, {
      localVue,
      store,
      propsData: { program },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.vm.hasGoalBeenMet).toBe(true);
      done();
    });
  });

  it('chunks classrooms correctly', done => {
    const wrapper = shallowMount(SchoolGoalAndStats, {
      localVue,
      store,
      propsData: { program },
    });

    let classrooms = [
      {id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'd'}, {id: 5, name: 'e'},
    ];

    let classroomChunks = wrapper.vm.getClassroomChunks(
      program.participants,
      classrooms
    );

    expect(classroomChunks[0][0].id).toBe(1);
    expect(classroomChunks[0][1].id).toBe(3);
    done();
  });

  it('hides other grade text', done => {
    const wrapper = shallowMount(SchoolGoalAndStats, {
      localVue,
      store,
      propsData: { program },
    });

    let classroom = {'gradeText': ''};
    let gradeText = wrapper.vm.getGradeText(classroom);

    expect(gradeText).toBe('');

    done();
  });

  it('shows grade text', done => {
    const wrapper = shallowMount(SchoolGoalAndStats, {
      localVue,
      store,
      propsData: { program },
    });

    let classroom = {'gradeText': '1st Grade'};
    let gradeText = wrapper.vm.getGradeText(classroom);

    expect(gradeText).toBe(' - 1st Grade');

    done();
  });
});
