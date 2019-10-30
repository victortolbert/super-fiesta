import BaseButton from './BaseButton.vue'

export default {
  title: 'BaseButton',
}

export const withText = () => '<BaseButton>with text</BaseButton>'

export const withEmoji = () => '<BaseButton>😀 😎 👍 💯</BaseButton>'
export const withBaseAvatar = () => '<BaseButton><BaseAvatar /></BaseButton>'

export const asAComponent = () => ({
  components: { BaseButton },
  template: `
  <div class="flex flex-col items-center">
    <!-- <BaseButton is-primary :is-rounded="false">Primary Not Rounded</BaseButton> -->
    <BaseButton is-primary>Primary Button</BaseButton>
    <BaseButton
      is-secondary
      is-small
      :is-full-width="false"
    >
      Small Secondary Button
    </BaseButton>
    <BaseButton is-secondary>Secondary Button</BaseButton>
  </div>
  `,
})
