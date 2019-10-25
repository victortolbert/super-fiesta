<template>
  <button
    class="card-container p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
    @click.prevent="showRewardVideo(reward.prize.video)"
  >
    <div :class="[ 'card border-2 rounded overflow-hidden', colorClassFor(reward.status) ]">
      <header class="card-header text-sm font-semibold">
        <div
          v-if="reward.status === 'unassigned'"
          :title="'$' + getAmountRemaining(reward) + ' ' + program.unit.modifier + ' ' + program.unit.name + ' ' + lang.more"
          class="bg-red text-white truncate capitalize p-4 w-full"
        >
          ${{ getAmountRemaining(reward) }} {{ program.unit.modifier }} {{ program.unit.name }} {{ lang.more }}
        </div>
        <div
          v-if="reward.status === 'pending'"
          :title="lang.pending"
          class="bg-orange text-white truncate capitalize p-4 w-full"
        >
          {{ lang.pending }}
        </div>
        <div
          v-if="reward.status === 'giveaway'"
          :title="lang.giveaway"
          class="bg-secondary text-white truncate capitalize p-4 w-full"
        >
          {{ lang.giveaway }}
        </div>
        <div
          v-if="reward.status === 'delivered'"
          :title="lang.delivered"
          class="bg-primary text-white truncate capitalize p-4 w-full"
        >
          {{ lang.delivered }}
        </div>
      </header>

      <div class="card-content p-0">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              :src="getPictureUrl(reward)"
              :alt="reward.prizeBound.display_name"
              class="object-contain"
            >
            <div class="play-icon">
              <svg
                viewBox="0 0 34 34"
                class="w-8 h-8 lg:w-10 lg:h-10 block"
              >
                <path
                  d="M17 33.8624C26.3888 33.8624 34 26.282 34 16.9312C34 7.58035 26.3888 0 17 0C7.61116 0 0 7.58035 0 16.9312C0 26.282 7.61116 33.8624 17 33.8624Z"
                  fill="#384351"
                  fill-opacity="0.866593"
                />
                <path
                  d="M27.6301 16.587C28.027 16.8134 28.027 17.1839 27.6301 17.4103L12.0634 26.2911C11.6665 26.5175 11.3418 26.3323 11.3418 25.8794V8.11769C11.3418 7.66484 11.6665 7.47959 12.0634 7.70601L27.6301 16.587Z"
                  fill="white"
                />
              </svg>
            </div>
          </figure>
        </div>
      </div>

      <footer class="card-footer block bg-grey-lightest">
        <div class="text-center p-4">
          <h2
            :title="'$' + getDisplayAmount(reward) + ' ' + program.unit.modifier + ' ' + program.unit.name"
            class="text-xs capitalize truncate"
          >
            ${{ getDisplayAmount(reward) }} {{ program.unit.modifier }} {{ program.unit.name }}
          </h2>
          <h3
            :title="reward.prizeBound.display_name"
            class="text-xs font-semibold truncate"
          >
            {{ reward.prizeBound.display_name }}
          </h3>
        </div>
      </footer>
    </div>
  </button>
</template>

<script>

const ModalForm = {
  props: {
    videoId: {
      type: String,
      default: '',
    },
  },
  template: `
        <div>
            <figure class="image is-16by9 mb-4">
                <iframe :src="'https://player.vimeo.com/video/' + videoId"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                />
            </figure>
            <div @click="$emit('close')" class="modal-close is-large z-max absolute"></div>
        </div>
    `,
};

export default {
  name: 'ParticipantRewardsCard',
  props: {
    sumPledgesFlat: {
      type: Number,
      default: 0,
    },
    reward: {
      type: Object,
      default () {
        return {};
      },
    },
    program: {
      type: Object,
      default: null,
    },
  },
  computed: {
    lang () {
      return this.$store.state.lang;
    },
  },
  methods: {
    getDisplayAmount (reward) {
      let displayAmount = reward.prizeBound.display_amount;
      if (this.program.program_pledge_setting.flat_donate_only === '0') {
        displayAmount /= this.program.unit_flat_conversion;
      }
      return displayAmount.toFixed(2).replace('.00', '');
    },
    getAmountRemaining (reward) {
      let amountRemaining = parseFloat(reward.prizeBound.display_amount - this.sumPledgesFlat);
      if (this.program.program_pledge_setting.flat_donate_only === '0') {
        amountRemaining /= this.program.unit_flat_conversion;
      }
      return amountRemaining.toFixed(2).replace('.00', '');
    },
    getPictureUrl (reward) {
      return 'https://' + this.$store.state.s3Bucket + '.s3.amazonaws.com/prizes/' + reward.prize.picture;
    },
    colorClassFor (status) {
      if (status === 'unassigned') {
        return 'border-red';
      } else if (status === 'pending') {
        return 'border-orange';
      } else if (status === 'giveaway') {
        return 'border-blue';
      } else if (status === 'delivered') {
        return 'border-green';
      }
      return 'black';
    },
    showRewardVideo (videoId) {
      this.$modal.open({
        parent: this,
        component: ModalForm,
        props: {'videoId': videoId},
        events: {
          'close': evt => {
            this.unBlur();
          },
        },
        onCancel: this.unBlur,
        canCancel: true,
      });

      document.getElementById('app').style.filter = 'blur(4px)';
    },
    unBlur () {
      document.getElementById('app').style.filter = 'none';
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container:focus {
    outline: none;
}
.image {
    position: relative;
}

img {
    display: block;
    width: 100%;
    height: auto;
    &.is-variant {
        opacity: 1;
        transition: 0.5s ease;
        backface-visibility: hidden;
    }
}

.play-icon {
    transition: 0.5s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>
