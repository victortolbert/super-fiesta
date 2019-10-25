import { shallowMount } from '@vue/test-utils';
import ProgramHeader from './ProgramHeader.vue';

describe('ProgramHeader', () => {
  it('is a Vue instance', () => {
    const $store = {
      state: {
        awsBucket: 'funrun-dev',
      },
    };
    const program = {
      microsite: {
        school_image_name: 'School',
      },
    };
    const wrapper = shallowMount(ProgramHeader, {
      mocks: { $store },
      propsData: { program },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
