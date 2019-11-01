import AppHeader from './AppHeader.vue'
import ProgramHeader from '../ProgramHeader/ProgramHeader.vue'

export default {
  title: 'AppHeader',
}

export const isDefault = () => ({
  components: { AppHeader },
  template: `<AppHeader/>`,
})

export const isProgramHeader = () => ({
  components: { AppHeader, ProgramHeader },
  data () {
    return {
      program: {
        fun_run: new Date(),
        event_name: 'Program Event Name',
        microsite: {
          microsite_color_theme: {
            theme_name: 'default',
          },
        },
      },
    }
  },
  template: `
  <AppHeader :program="program">
    <ProgramHeader :program="program" />
  </AppHeader>
  `,
});
