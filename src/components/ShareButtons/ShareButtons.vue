<template>
  <div class="flex justify-between content-center lg:my-8">
    <div class="w-1/4 flex-wrap text-center">
      <ShareButton
        :participants="participants"
        :special-urls="specialUrls"
        :has-video="hasVideo"
        type="facebook"
      />
    </div>

    <div class="w-1/4 flex-wrap text-center">
      <ShareButton
        :participants="participants"
        :has-video="hasVideo"
        type="email"
      />
    </div>

    <div class="w-1/4 flex-wrap text-center sms-share-btn">
      <ShareButton
        :participants="participants"
        :special-urls="specialUrls"
        :has-video="hasVideo"
        :program="program"
        type="sms"
      />
    </div>

    <div class="w-1/4 flex-wrap text-center">
      <ShareButton
        :special-urls="specialUrls"
        :has-video="hasVideo"
        :program="program"
        type="link"
      />
    </div>
  </div>
</template>

<script>
import ShareButton from '@/components/ShareButton'

export default {
  name: 'ShareButtons',
  status: 'prototype',
  release: '1.0.0',
  components: {
    ShareButton,
  },
  props: {
    participants: {
      type: Array,
      default: () => [],
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
    hasVideo() {
      return this.$store.state.participant.participants.reduce((result, participant) => {
        const hasImage = !!participant.profile.image_name
        return result || hasImage
      }, false)
    },
    specialUrls() {
      return this.$store.state.participant.participants[0].special_urls
    },
  },
}
</script>

<style scoped>
@media (min-width: 768px) and (orientation: portrait) {
    .sms-share-btn {display: none;}
}
@media (min-width: 1024px) and (orientation: landscape) {
    .sms-share-btn {display: none;}
}
</style>
