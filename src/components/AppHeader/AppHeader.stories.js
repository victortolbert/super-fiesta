import AppHeader from './AppHeader.vue'

export default {
  title: 'AppHeader',
}

export const isDefault = () => ({
  components: { AppHeader },
  template: `<AppHeader/>`,
})

export const isForAProgram = () => ({
  components: { AppHeader },
  template: `
    <AppHeader>
      Program Header
    </AppHeader>`,
})
