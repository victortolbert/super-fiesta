<template>
  <div class="student-star-video card-content py-4 px-8">
    <Slick
      v-if="participantVideoIds.length"
      ref="slick"
      :options="slickOptions"
    >
      <figure
        v-for="(videoId, index) in participantVideoIds"
        :key="index"
        class="image is-16by9 w-full relative aspect-ratio-16/9 mb-8"
      >
        <VideoIframe
          v-if="videoId"
          :video-id="videoId"
          source="jwplayer"
        />
      </figure>
    </Slick>
    <figure
      v-else
      class="image is-16by9 w-full relative aspect-ratio-16/9 mb-8"
    >
      <VideoIframe :video-id="videoId" />
    </figure>

    <h2 class="text-lg font-semibold">
      {{ $t('student_star_video.get_pledges') }}
    </h2>

    <p
      v-if="canShare"
      class="mb-8"
    >
      {{ $t('student_star_video.can_share_msg') }}
    </p>

    <p
      v-else
      class="mb-8"
    >
      {{ $t('student_star_video.upload_msg') }}
    </p>

    <div class="lg:flex items-center mb-10">
      <div
        v-for="participant in program.participants"
        :key="participant.id"
        class="student-info w-full lg:w-1/2 xl:w-1/3 flex p-4 relative has-background-white-bis border rounded-lg mb-4"
      >
        <StudentStarVideoCard :participant="participant" />
      </div>
    </div>

    <div
      v-if="canShare"
      class="mx-auto max-w-sm"
    >
      <ShareButtons
        :program="program"
        :participants="program.participants"
        ga_site_location="Parent Dashboard"
        ga_page_location="Student Star Video Section"
      />
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import ShareButtons from '@/components/ShareButtons'
import StudentStarVideoCard from '@/components/StudentStarVideoCard'
import VideoIframe from '@/components/VideoIframe'

export default {
  name: 'ShareStudentStarVideo',
  status: 'prototype',
  release: '1.0.0',
  components: {
    ShareButtons,
    StudentStarVideoCard,
    Slick,
    VideoIframe,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
    videoId: {
      type: [String, Number],
      default: '279542990',
    },
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        dots: true,
        autoplay: false,
        arrows: false,
        mobileFirst: true,
      },
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    canShare() {
      return this.$store.state.participant.participants
        .find(participant => participant.profile.image_name !== null)
    },
    participantVideoIds() {
      return this.$store.state.participant.participants
        .filter(participant => participant.profile.video_url != null)
        .map(participant => participant.profile.video_url)
    },
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },
    prev() {
      this.$refs.slick.prev()
    },
  },
}
</script>

<style>
@media (min-width: 992px) {
    .student-info:not(:last-child) {
        margin-right: 1rem;
    }
}

@media (min-width: 1200px) {
    .student-info:not(:last-child) {
        margin-right: 2rem;
    }
}
</style>
