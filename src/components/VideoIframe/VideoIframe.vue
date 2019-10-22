<template>
  <iframe
    :src="src"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  />
</template>

<script>
export default {
  name: 'VideoIframe',
  status: 'prototype',
  release: '1.0.0',
  props: {
    source: {
      type: String,
      default: 'vimeo',
    },
    videoId: {
      type: [String, Number],
      default: '291201081',
    },
    color: {
      type: String,
      default: 'ffffff',
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    configId: {
      type: String,
      default: 'JcxcCN5H', // for jwplayer
    },
  },
  computed: {
    src() {
      if (this.source === 'youtube') {
        if (this.autoplay) {
          return `https://www.youtube-nocookie.com/embed/${this.videoId}?autoplay=1`
        } else {
          return `https://www.youtube-nocookie.com/embed/${this.videoId}?autoplay=0`
        }
      } else if (this.source === 'jwplayer') {
        return `https://content.jwplatform.com/players/${this.videoId}-${this.configId}.html?rel=0&amp;wmode=transparent&amp;showinfo=0`
      } else {
        return `https://player.vimeo.com/video/${this.videoId}?color=${this.color}`
      }
    },
  },
}
</script>
