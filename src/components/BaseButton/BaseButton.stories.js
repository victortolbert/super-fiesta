import BaseButton from './BaseButton.vue'

export default {
  title: 'BaseButton',
}

export const withText = () => '<BaseButton>with text</BaseButton>'

export const withEmoji = () => '<BaseButton>😀 😎 👍 💯</BaseButton>'
export const withBaseAvatar = () => '<BaseButton><BaseAvatar /></BaseButton>'

export const asAComponent = () => ({
  components: { BaseButton },
  template: '<BaseButton :rounded="true">rounded</BaseButton>',
})
