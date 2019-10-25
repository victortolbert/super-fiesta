<template>
  <div class="share-button flex flex-col justify-center items-center">
    <a
      v-if="type === 'sms'"
      :class="[
        'flex items-center justify-center text-white hover:text-white w-12 h-12 rounded-full cursor-pointer', config.className
      ]"
      :data-tooltip="config.tooltipText"
      :title="config.tooltipText"
      :href="smsLink"
      @click="gaTrack"
    >
      <FontAwesomeIcon class="w-6 h-6" :icon="config.icon" />
    </a>
    <button
      v-if="type !== 'sms'"
      :class="['flex items-center justify-center text-white hover:text-white w-12 h-12 rounded-full text-white cursor-pointer focus:outline-none focus:shadow-outline', config.className]"
      :data-tooltip="config.tooltipText"
      :title="config.tooltipText"
      @click="clicked"
    >
      <FontAwesomeIcon
        :icon="config.icon"
        class="w-6 h-6"
      />
    </button>
    <span class="text-sm text-center">
      {{ config.label }}
    </span>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'
// require('bootstrap')

export default {
  name: 'ShareButton',
  status: 'prototype',
  release: '1.0.0',
  props: {
    type: {
      type: String,
      default: 'facebook',
    },
    participants: {
      type: Array,
      default: () => [],
    },
    specialUrls: {
      type: Array,
      default: () => [],
    },
    hasVideo: {
      type: Boolean,
      default: false,
    },
    program: {
      type: Object,
      default: undefined,
    },
    gaPageLocation: {
      type: String,
      default: 'Student Card Header Section',
    },
    gaSiteLocation: {
      type: String,
      default: 'Parent Dashboard',
    },
  },
  computed: {
    config() {
      switch (this.type) {
      case 'email':
        return {
          icon: 'envelope',
          label: 'Easy Emailer',
          className: 'bg-email',
        }
      case 'sms':
        return {
          icon: 'comment',
          label: 'Text Message',
          className: 'bg-text-message',
        }
      case 'link':
        return {
          icon: 'link',
          label: 'Copy Link',
          className: 'bg-copy-link copy-text',
          tooltipText: 'Copied!',
        }
      case 'facebook':
      default:
        return {
          icon: ['fab', 'facebook-f'],
          label: 'Facebook',
          className: 'bg-facebook',
        }
      }
    },
    lang() {
      // return this.$store.state.lang
      return {
        sms: {
          no_video: 'No Video',
          has_video: 'Has Video',
        },
      }
    },
    smsLink() {
      const referrerName = this.hasVideo ? 'SMS_Video' : 'SMS'
      const isAre = this.$store.state.participant.participants.length === 1 ? 'is' : 'are'
      const eventName = this.program.event_name
      const langString = this.hasVideo ? this.lang.sms.has_video : this.lang.sms.no_video
      const smsBody = this.parseLanguage(
        langString,
        {
          participant_display_names: this.participantDisplayNames(this.$store.state.participant.participants),
          is_are: isAre,
          event_name: eventName,
          share_url: this.getShareUrl(referrerName),
        }
      )
      return 'sms:?&body=' + smsBody.replace(/&/g, 'and')
    },
  },
  methods: {
    clicked(event) {
      this.gaTrack()

      const participantUserId = this.getSmallestParticipantId()
      switch (this.type) {
      case 'email':
        this.$router.push({
          path: '/titan/easy-emailer',
          params: {
            participantUserId,
          },
        })
        break
      case 'sms':
        // eslint-disable-next-line
          console.log('ii got clicked: ' + this.type)
        break
      case 'link':
        this.shareLink()
        break
      case 'facebook':
      default:
        this.shareFacebook()
      }
    },
    getSmallestParticipantId() {
      const participantIds = this.$store.state.participant.participants.map(obj => obj.id)
      return Math.min(...participantIds)
    },
    gaTrack() {
      const action = 'Share Button: ' + this.type + (this.hasVideo ? ' video' : '')
      this.gaEvent(this.ga_site_location, this.ga_page_location, action)
      // this.gaEvent(this.ga_site_location, this.ga_page_location, action)
    },
    getShareUrl(referrerName) {
      const filterFunction = function (specialUrl) {
        return specialUrl.referrer.name === referrerName
      }
      const shortKey = this.specialUrls.filter(filterFunction)[0].short_key
      return window.location.protocol + '//' + window.location.hostname + '/a/s/' + shortKey
    },
    shareLink() {
      const referrerName = this.hasVideo ? 'Link_Video' : 'Link'
      const clipboardjs = new ClipboardJS('.copy-text', {
        text: (trigger) => {
          return this.getShareUrl(referrerName)
        },
      })
      clipboardjs.on('success', function (e) {
        // $('.copy-text').tooltip({ trigger: 'manual' })
        // $(e.trigger).tooltip('show')
        // setTimeout(function () {
        //   $(e.trigger).tooltip('hide')
        // }, 1000)
      })
    },
    shareFacebook() {
      const referrerName = this.hasVideo ? 'Facebook_Video' : 'Facebook'
      const url = this.getShareUrl(referrerName)
      const participantUserId = this.$store.state.participant.participants[0].id
      /* eslint-disable */
      FB.ui(
        {
          method: 'share',
          href: url,
        },
        function (response) {
          if (response && !response.error_message) {
            this.$axios.get('/users/user_successful_facebook_share/' + participantUserId)
              .catch(console.log)
            const label = this.hasVideo ? 'Pledge Success Page Video' : 'Pledge Success Page'
            ga('send', 'event', 'Share Public Pledge Page', 'Click Facebook Share', label, 1)
          }
        }
      )
    },
  },
}
</script>

<style scoped>
.lh-sms {
    line-height: 3.6875rem;
}
</style>
