<template>
  <div>
    <figure class="image is-16by9 w-full relative aspect-ratio-16/9 mb-4">
      <VideoIframe
        :video-id="activeVideo.external_video_id"
        :source="activeVideo.source"
      />
    </figure>
  </div>
</template>

<script>
import VideoIframe from '@/components/VideoIframe'

export default {
  name: 'VideoPlayer',
  status: 'prototype',
  release: '1.0',
  components: {
    VideoIframe,
  },
  props: {
    videoCollections: {
      type: Array,
      default: () => [],
    },
    presetVideo: {
      type: [Object, String],
      default: null,
    },
  },
  data() {
    return {
      activeTab: 0,
      tabsDisabled: true,
      activeVideoIndex: undefined,
      activeTabKey: undefined,
      selectedVideo: null,
    }
  },
  computed: {
    activeVideo() {
      return this.selectedVideo ? this.selectedVideo : this.presetVideo
    },
  },
  methods: {
    updateActiveVideo(video) {
      this.selectedVideo = video
    },
  },
}
</script>

<style lang="scss">
.b-tabs {
    .tab-content {
        padding: 0;
    }
}
</style>
