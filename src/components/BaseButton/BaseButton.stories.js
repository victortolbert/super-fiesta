import { action, actions } from '@storybook/addon-actions';
import BaseButton from './BaseButton.vue'

export default {
  title: 'Base|Button',
  parameters: {
    backgrounds: [
      { name: 'light', value: '#ffffff', default: true },
      { name: 'dark', value: '#222222' },
    ],
  },
}
export const story1 = () => {
  const content = 'You should be able to switch backgrounds for this story';

  return {
    template: `<button>${content}</button>`,
  };
};

story1.story = {
  name: 'Story 1',
};

export const actionOnly = () => ({
  template: '<BaseButton @click="log">Click me to log the action</BaseButton>',
  methods: {
    log: action('log1'),
  },
});

actionOnly.story = {
  name: 'Action only',
};

export const multipleActions = () => ({
  template:
    '<BaseButton @click="click" @double-click="doubleclick">(Double) click me to log the action</BaseButton>',
  methods: actions('click', 'doubleclick'),
});

multipleActions.story = {
  name: 'Multiple actions',
};

export const multipleActionsObject = () => ({
  template:
    '<BaseButton @click="click" @double-click="doubleclick">(Double) click me to log the action</BaseButton>',
  methods: actions({ click: 'clicked', doubleclick: 'double clicked' }),
});

multipleActionsObject.story = {
  name: 'Multiple actions, object',
};

export const actionAndMethod = () => ({
  template: '<BaseButton @click="log">Click me to log the action</BaseButton>',
  methods: {
    log: e => {
      e.preventDefault();
      action('log2')(e.target);
    },
  },
});

actionAndMethod.story = {
  name: 'Action and method',
};

export const isDefaultAndSmall = () => ({
  render: h => <BaseButton is-small>Cancel</BaseButton>,
});

export const isPrimary = () => ({
  render: h => <BaseButton is-primary>Pay Pledges</BaseButton>,
});

export const isSecondaryAndSmall = () => ({
  render: h => (
    <div>
      <BaseButton is-secondary is-small>Save</BaseButton>
      <BaseButton is-secondary is-small>View Rewards</BaseButton>
    </div>
  ),
});

export const isSecondary = () => ({
  render: h => <BaseButton is-secondary>Secondary</BaseButton>,
});

export const isDestructive = () => ({
  render: h => <BaseButton is-destructive>Destructive</BaseButton>,
});
export const isDestructiveAndSmall = () => ({
  render: h => <BaseButton is-small is-destructive>Delete</BaseButton>,
});

export const isSmall = () => ({
  render: h => <BaseButton is-small>with text</BaseButton>,
});

export const isFullWidth = () => ({
  render: h => <BaseButton is-full-width>with text</BaseButton>,
});
