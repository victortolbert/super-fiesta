<template>
  <div class="program-overview card-content">
    <VideoPlayer
      v-if="displayVideoPlayer"
      :video-collections="videoCollections"
      :preset-video="presetVideo"
    />
    <div>
      <h2 class="text-lg sm:text-2xl font-semibold">
        Program Description
      </h2>

      <p class="text-sm sm:text-xl">
        Your school is hosting a 2-week fundraiser powered by the Boosterthon!
        Instead of selling items, families will gather pledges to help your
        school, while students experience a world-class character program and
        participate in the Alpharetta Glow Run. Most students will complete
        30-35 laps at the Fun Run event.
      </p>

      <a
        class="text-sm sm:text-xl font-semibold"
        href="#"
        @click.prevent=""
      >
        Read More
      </a>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer'

export default {
  name: 'ProgramOverview',
  status: 'prototype',
  release: '1.0',
  components: {
    VideoPlayer,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      displayVideoPlayer: false,
      videoCollections: [],
      presetVideo: {},
      programVideos: {
        title: 'Program Videos',
        url: `/v3/api/videos/program/5`,
      },
      characterVideos: {
        title: 'Character Videos',
        url: `/v3/api/videos/character`,
      },
    }
  },
  created() {
    this.fetchVideos(this.programVideos).then(() => {
      if (this.program.microsite.hide_character_videos !== 1) {
        this.fetchVideos(this.characterVideos).then(() => {
          this.setPresetVideo(this.videoCollections)
        })
      } else if (this.videoCollections.length > 0) {
        this.setPresetVideo(this.videoCollections)
      }
    })
  },
  methods: {
    fetchVideos(videoMetadata) {
      const videos = axios.get(videoMetadata.url).then((response) => {
        if (response.data.length > 0) {
          this.videoCollections.push({
            videos: response.data,
            title: videoMetadata.title,
          })
        }
      }).catch((error) => {
        // eslint-disable-next-line
        console.error(error)
      })

      return videos
    },
    setPresetVideo(videoCollections) {
      if (!this.displayVideoPlayer) {
        this.presetVideo = videoCollections[0].videos[0]
        this.displayVideoPlayer = true
      }
    },
  },
}
</script>
