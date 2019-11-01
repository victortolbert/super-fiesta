import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Addon|Links',
};

export const goToWelcome = () => ({
  template: '<BaseButton :rounded="true" @click="click" >This buttons links to Welcome</BaseButton>',
  methods: {
    click: linkTo('Welcome'),
  },
});

goToWelcome.story = {
  name: 'Go to welcome',
};
