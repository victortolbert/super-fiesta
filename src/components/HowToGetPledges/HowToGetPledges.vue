<template>
  <div class="how-to-get-pledges card-content">
    <div class="">
      <div class="p-4">
        <figure class="image is-16by9 mb-4 w-full relative aspect-ratio-16/9">
          <VideoIframe
            v-if="video"
            :video-id="video.external_video_id"
            :source="video.source"
          />
        </figure>
      </div>

      <h4 class="font-bold text-lg text-center md:text-left mb-4">
        Asking for pledges is quick and easy with our sharing tools.
      </h4>
      <ul class="list-reset text-sm md:text-xl">
        <li class="flex items-center">
          <a
            href="#"
            class="m-4"
          >
            <FontAwesomeIcon
              icon="envelope"
              size="2x"
              fixed-width
            />
          </a>
          <p>
            <RouterLink
              :to="{
                path: '/titan/easy-emailer',
                params: {
                  participantUserId: firstParticipantId
                }
              }"
              strict
              class="font-semibold underline"
            >
              {{ $t('email.link') }}
            </RouterLink> {{ $t('email.paragraph') }}
          </p>
        </li>
        <li class="flex items-center">
          <a
            href="#"
            class="m-4"
          >
            <FontAwesomeIcon
              :icon="['fab', 'facebook-f']"
              size="2x"
              fixed-width
            />
          </a>
          <p>
            <a
              href="#"
              class="font-semibold underline"
            >
              Share on Facebook
            </a> and get pledges from sponsors
            you never knew wanted to give!
          </p>
        </li>
        <li class="flex items-center">
          <a
            href="#"
            class="m-4"
          >
            <FontAwesomeIcon
              icon="share-square"
              size="2x"
              fixed-width
            />
          </a>
          <p>
            <a
              href="#"
              class="font-semibold underline"
              @click.prevent="scrollTo()"
            >
              Share the Student Star Video
            </a> by customizing it
            with your student's picture!
          </p>
        </li>
        <li class="flex items-center">
          <a
            href="#"
            class="m-4 phone-script-icon"
            @click.prevent="openPhoneScript"
          >
            <FontAwesomeIcon
              icon="mobile-alt"
              size="2x"
              fixed-width
            />
          </a>
          <p>
            <a
              href="#"
              class="font-semibold underline phone-script-link"
              @click.prevent="openPhoneScript"
            >
              Use our Phone Script
            </a> to call close friends and
            family members and know exactly what to say!
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PhoneScriptModal from '@/components/PhoneScriptModal'
import VideoIframe from '@/components/VideoIframe'
import data from '../../../public/v3/api/videos/get-pledges.json';

export default {
  name: 'HowToGetPledges',
  status: 'prototype',
  release: '1.0.0',
  components: {
    VideoIframe,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      video: null,
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang.how_to_get_pledges
    },
    firstParticipantId() {
      return this.$store.state.participant.participants[0].id
      // return this.$store.getters.participantsByProgramId(this.program.id)[0].id;
    },
  },
  created() {
    this.fetchVideos()
  },
  methods: {
    isDesktop() {
      return window.matchMedia('(min-width: 769px)').matches
    },
    scrollTo() {
      this.$parent.$parent.$children[3].isOpen = true

      // setTimeout(() => {
      //   // scroll to top
      //   $('html, body').animate({
      //     scrollTop: $(this.$parent.$parent.$children[3].$el).offset().top,
      //   }, 300)
      // }, 310)
    },

    fetchVideos(videoMetadata) {
      // let url = '/v3/api/videos/get-pledges/' + this.program.id
      // let url = `/v3/api/videos/get-pledges.json`
      // this.$axios.get(url).then((response) => {
      //   this.video = response.data
      // }).catch((error) => {
      //   // eslint-disable-next-line
      //   console.error(error)
      // })
      this.video = data
    },
    openPhoneScript(evt) {
      this.$modal.open({
        parent: this,
        component: PhoneScriptModal,
        hasModalCard: true,
        onCancel: this.unBlur,
        props: { program: this.program },
        scroll: 'keep',

      })

      document.getElementById('app').style.filter = 'blur(4px)'

      this.gaEvent('Parent Dashboard', 'How To Get Pledges', 'Phone Script')
    },
    unBlur() {
      document.getElementById('app').style.filter = 'none'
    },
  },
}
</script>
