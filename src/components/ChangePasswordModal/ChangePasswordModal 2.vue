<template>
  <form
    :class="{'change-password-modal bg-grey-lightest pb-2 mx-4 lg:mx-auto shadow-md rounded-xl': true, 'successEnabled bg-secondary flex max-w-sm justify-center': showSuccess}"
    action=""
    @submit.prevent="submit"
  >
    <div
      v-if="!showSuccess"
      class="modal-card"
      style="width: auto;"
    >
      <button
        type="button"
        class="modal-close inner-modal-close modal-close-btn-position is-large absolute"
        aria-label="close"
        @click="closeModal"
      >&times;</button>

      <span class="text-center font-semibold text-xl leading-normal mt-10 mb-8">{{ lang.change_password }}</span>

      <div
        class="controls px-6"
      >

        <BField
          :label="lang.current_password"
          :message="currentPasswordErrors"
          :type="currentPasswordErrors ? 'is-danger text-sm':''"
        >
          <BInput
            v-model="fields.current"
            :placeholder="lang.current_password"
            type="password"
            class="never-actual-addons"
            required
          />
        </BField>

        <div
          class="password-requirements"
        >
          <span class="font-semibold">{{ lang.change_pwd_must_contain }}:</span>
          <ul class="mb-5">
            <li>{{ minPasswordText }}</li>
            <li>{{ lang.contains_number_short }}</li>
            <li>{{ lang.contains_lower_short }}</li>
            <li>{{ lang.contains_upper_short }}</li>
            <li>{{ lang.contains_special_character_short }}</li>
          </ul>
        </div>

        <BField
          :label="lang.new_password"
          :message="newPasswordErrors"
          :type="newPasswordErrors ? 'is-danger text-sm':''"
        >
          <BInput
            v-model="fields.password"
            :placeholder="lang.new_password"
            type="password"
            class="never-actual-addons"
            required
          />
        </BField>

        <BField
          :label="lang.confirm_new_password"
          :message="confirmPasswordErrors"
          :type="confirmPasswordErrors ? 'is-danger text-sm':''"
        >
          <BInput
            v-model="fields.password_confirmation"
            :placeholder="lang.confirm_new_password"
            type="password"
            class="never-actual-addons"
            required
          />
        </BField>

        <div class="text-center mt-5 pb-1">
          <div class="max-w-md mx-0 md:mx-auto">
            <div>
              <button
                :disabled="submitting"
                type="submit"
                class="button is-secondary is-rounded inline-block mb-4 w-64 shadow"
              >
                {{ lang.change_pwd_save }}
                <i
                  v-if="submitting"
                  class="fa fa-spinner fa-spin"
                />
              </button><br>
              <button
                type="button"
                class="button is-secondary is-rounded inline-block mb-4 w-64 is-outlined"
                @click="closeModal"
              >
                {{ lang.change_pwd_cancel }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showSuccess"
      class="password_changed_success modal-card text-white text-center font-semibold w-64 items-center flex pl-8 pr-8"
    >
      <img
        src="/v3-assets/dashboard/images/password_lock.svg"
        alt="Password Lock"
        class="mb-1"
      >
      {{ lang.change_pwd_success }}
    </div>
  </form>
</template>

<script>
export default {
  name: 'ChangePasswordModal',
  status: 'prototype',
  release: '1.0.0',
  data: function () {
    return {
      fields: {},
      errors: null,
      submitting: false,
      showSuccess: false,
    };
  },
  computed: {
    lang () {
      return this.$store.state.lang;
    },
    minPasswordText: function () {
      return this.$store.state.lang.min_length_short.replace(':value', this.$store.state.minPasswordLength);
    },
    currentPasswordErrors: function () {
      return this.errors && typeof (this.errors.current) !== 'undefined' ? this.errors.current : null;
    },
    newPasswordErrors: function () {
      return this.errors && typeof (this.errors.password) !== 'undefined' ? this.addRequiresPrefixToError(this.errors.password) : null;
    },
    confirmPasswordErrors: function () {
      if (this.errors && typeof (this.errors.password_confirmation) !== 'undefined') {
        return this.addRequiresPrefixToError(this.errors.password_confirmation);
      } else if (this.errors && typeof (this.errors.password_match_error) !== 'undefined') {
        return this.errors.password_match_error;
      } else {
        return null;
      }
    },
  },
  methods: {
    submit: function () {
      this.submitting = true;
      let formData = new FormData();

      for (var key in this.fields) {
        formData.append(key, this.fields[key]);
      }

      var changeModalInstance = this;

      axios
        .post(
          '/v3/password/change',
          formData,
          {headers: {'Content-Type': 'multipart/form-data'}}
        )
        .then(response => {
          this.fields = {};
          this.errors = {};
          this.showSuccess = true;

          setTimeout(function () {
            if (changeModalInstance.isModalCurrentlyOpen()) {
              changeModalInstance.closeModal();
            }
          }, 3000);
        })
        .catch(error => {
          this.errors = JSON.parse(error.request.response).errors;
        })
        .finally(() => {
          this.submitting = false;
        });
    },
    isModalCurrentlyOpen: function (selector) {
      let className = ' modal-is-open ';
      let element = document.querySelector('body');
      return (' ' + element.className + ' ').replace(/[\n\t]/g, ' ').indexOf(className) > -1;
    },
    getModalCloseButton: function () {
      return document.querySelector('.modal.is-active > .modal-close');
    },
    removeClass (element, className) {
      element.classList.remove(className);
    },
    closeModal: function () {
      this.removeClass(document.querySelector('body'), 'modal-is-open');
      this.$parent.close();
    },
    addRequiresPrefixToError: function (errorArray) {
      return errorArray.map(i => this.$store.state.lang.requires + ' ' + i);
    },
  },
};
</script>

<style>
    .change-password-modal .help.is-danger {
        color: #ef5753 !important;
    }
</style>

<style scoped>
    /*Prevent input fields from going off the page due to Bulma's assumptions when error fields pop up*/
    .field.has-addons .control.never-actual-addons:not(:last-child) {
        margin-right: 0px;
    }
    div.password_changed_success {
        padding-top: 22px;
        padding-bottom: 10px;
    }
    div.password_changed_success img {
        width: 30px;
        height: 40px;
    }
    .inner-modal-close {
        background-color: transparent;
    }
    .modal-close-btn-position {
        top: 1%;
        right: 1%;
    }
    .modal-close::before, .modal-close::after {
        background-color: black;
    }
    /* Since fontawesome replaces the i tag with a SVG one, we use the below to control the spinner's display */
    button svg {display: none;}
    button[disabled="disabled"] svg {display: inline-block;}

    /* Target webkit browsers only. Also targeting specific height of 650 as that breakpoint is where the height of this modal gets clipped. */
    /* The purpose of this is to enable scrolling under a specific height BUT hide the scrollbar. */
    @media screen and (-webkit-min-device-pixel-ratio:0) and (max-height:650px) {
        .change-password-modal .modal-card {overflow-y: scroll;}
        .change-password-modal .modal-card::-webkit-scrollbar { width: 0 !important }
        .change-password-modal .modal-close-btn-position { position: -webkit-sticky; position: sticky; left: 89%;}
    }
    /* Target firefox only. The purpose of this is to enable scrolling under a specific height BUT hide the scrollbar. */
    @-moz-document url-prefix() {
        @media screen and (max-height:650px) {
            .change-password-modal .modal-card {overflow-y: scroll;}
            .change-password-modal .modal-card { scrollbar-width: none; }
            .change-password-modal .modal-close-btn-position { position: -webkit-sticky; position: sticky; left: 89%;}
        }
    }
</style>
