import BaseButton from './BaseButton.vue'

export default {
  title: 'BaseButton',
}

export const isDefault = () => ({
  components: { BaseButton },
  template: `<BaseButton>Default</BaseButton>`,
})
export const isPrimary = () => ({
  components: { BaseButton },
  template: `
    <div class="flex flex-col">
      <BaseButton is-primary>Primary</BaseButton>
      <BaseButton is-primary is-small>Small</BaseButton>
      <BaseButton is-primary is-full-width>Full Width</BaseButton>
    </div>
  `,
})

export const isSecondary = () => ({
  components: { BaseButton },
  template: `
    <div class="flex flex-col">
      <BaseButton is-secondary>Secondary</BaseButton>
      <BaseButton is-secondary is-small>Small</BaseButton>
      <BaseButton is-secondary is-full-width>Full Width</BaseButton>
    </div>
  `,
})
