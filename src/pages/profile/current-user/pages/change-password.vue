<template>
  <div class="w-3/4">
    <form>
      <div class="field">
        <label for="profileInputCurrentPassword">
          Current password:
        </label>
        <input
          v-validate="$formValidator.rules.password"
          id="profileInputCurrentPassword"
          v-model="form.currentPassword"
          :class="{
            'input': true,
            'is-invalid': errors.has('password')
          }"
          data-vv-name="password"
          type="password"
          class="input"
          placeholder="Password"
        >
        <div :class="{ 'validation-feedback': true, 'invalid-feedback': errors.has('password') }">
          {{ errors.first('password') }}
        </div>
      </div>
      <div class="field">
        <label for="profileInputNewPassword">
          New password:
        </label>
        <input
          v-validate="$formValidator.rules.password"
          id="profileInputNewPassword"
          v-model="form.newPassword"
          :class="{
            'input': true,
            'is-invalid': errors.has('new-password')
          }"
          data-vv-name="new-password"
          type="password"
          class="input"
          placeholder="Password"
        >
        <div :class="{
          'validation-feedback': true,
          'invalid-feedback': errors.has('new-password')
        }"
        >
          {{ errors.first('new-password') }}
        </div>
      </div>

      <button
        :disabled="!!errors.items.length"
        type="submit"
        class="btn btn-primary float-right"
        @click.prevent="submit"
      >
        <span v-if="loading">
          Loading...
        </span>
        <span v-else>
          Change password
        </span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      currentPassword: null,
      newPassword: null,
    },
    loading: false,
  }),
  methods: {
    async submit () {
      if (await this.$formValidator.validate(this.form)) {
        await this.$actionWithLoading(this.setPassword, 'loading', this.form)
      }
    },
    ...mapActions('profile', [
      'setPassword',
    ]),
  },
}
</script>
