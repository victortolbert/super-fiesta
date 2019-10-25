<template>
  <div class="program-overview card-content">
    <VideoPlayer
      v-if="displayVideoPlayer"
      :video-collections="videoCollections"
      :preset-video="presetVideo"
    />
    <div class="pt-8 pb-2">
      <h2 class="text-lg sm:text-2xl font-semibold">
        {{ lang.header_overview_text_override }}
      </h2>

      <ReadMoreComponent
        :text="programDescription"
        :limit="320"
        class="readmore-wrapper text-sm sm:text-xl"
      />
    </div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer';

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
  data () {
    return {
      displayVideoPlayer: false,
      videoCollections: [],
      presetVideo: {},
      programVideos: {
        title: 'Program Videos',
        url: `/v3/api/videos/program.json`,
      },
      characterVideos: {
        title: 'Character Videos',
        url: `/v3/api/videos/character.json`,
      },
    };
  },
  computed: {
    lang () {
      return this.$store.state.lang;
    },
    programDescription: function () {
      if (typeof this.program.microsite.overview_text_override === 'string' &&
            this.program.microsite.overview_text_override.trim() !== '') {
        return this.program.microsite.overview_text_override;
      } else {
        return this.parseLanguage(
          this.$store.state.lang.overview_text_override,
          {
            event_name: this.program.event_name,
            unit_plural: this.program.unit.name_plural,
          });
      }
    },
  },
  created () {
    this.fetchVideos(this.programVideos).then(() => {
      if (this.program.microsite.hide_character_videos !== 1) {
        this.fetchVideos(this.characterVideos).then(() => {
          this.setPresetVideo(this.videoCollections);
        });
      } else if (this.videoCollections.length > 0) {
        this.setPresetVideo(this.videoCollections);
      }
    });
  },
  methods: {
    fetchVideos (videoMetadata) {
      let videos = axios.get(videoMetadata.url).then(response => {
        if (response.data.length > 0) {
          this.videoCollections.push({
            videos: response.data,
            title: videoMetadata.title,
          });
        }
      }).catch(error => {
        console.error(error);
      });

      return videos;
    },
    setPresetVideo (videoCollections) {
      if (!this.displayVideoPlayer) {
        this.presetVideo = videoCollections[0].videos[0];
        this.displayVideoPlayer = true;
      }
    },
  },
};
</script>

<style lang="scss">
    .program-overview .readmore-wrapper {
        .toggled p {
            margin-bottom: 1em;
        }
        .toggled span > :last-child {
            margin-bottom: 0em;
        }
        ol, ul {
            padding-left: 40px;
            margin-top: 1em;
            margin-bottom: 1em;

            ol, ul {
                margin-top: 0em;
                margin-bottom: 0em;
            }
        }
        ul {
            list-style-type: disc;
        }
    }
</style>
