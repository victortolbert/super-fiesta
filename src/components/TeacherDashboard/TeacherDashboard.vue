<template>
  <div class="teacher-dashboard-component card-content">
    <figure class="image is-16by9 mb-4">
      <VideoIframe
        :video-id="videoId"
        source="vimeo"
      />
    </figure>
    <div class="max-w-lg mx-auto">
      <div class="sm:flex text-center items-center justify-center mb-6 px-6">
        <button class="button is-fullwidth font-medium is-medium is-secondary is-rounded w-64 sm:mx-2 mb-2">
          View Pledge Report
        </button>
        <a
          target="_new"
          href="https://boosterthoncharacter.com/"
          class="button is-fullwidth font-medium is-medium is-secondary is-rounded w-64 sm:mx-2 mb-2 is-outlined"
        >
          View Character Content
        </a>
      </div>
      <h2 class="text-2xl font-medium">
        Teacher Action Steps
      </h2>
      <BTabs>
        <!-- Incomplete Tab item -->
        <BTabItem label="Incomplete">
          <!-- Incomplete header slte  -->
          <template slot="header">
            <span>
              <span class="text-xl">
                Incomplete
              </span>
              <BTag
                size="is-medium"
                type="is-light"
                rounded
              >
                {{ incompleteSteps.length }}
              </BTag>
            </span>
          </template>
          <!-- Incomplete list -->
          <ul class="list-reset">
            <li
              v-for="(step, index) in incompleteSteps"
              :key="index"
              class="flex my-2 p-2 border rounded shadow"
            >
              <a
                href="#"
                class="icon mr-1 cursor-pointer text-grey"
                @click.prevent="toggle(step)"
              >
                <FontAwesomeIcon
                  :icon="['far', 'square']"
                  size="2x"
                />
              </a>

              <span :class="{'line-through': step.isComplete}">
                {{ step.description }} (View Templates: <a
                  class="font-medium"
                  href="#"
                >
                  English
                </a> | <a
                  class="font-medium"
                  href="#"
                >
                  Spanish
                </a>)
              </span>
            </li>
          </ul>
        </BTabItem>
        <!-- Completed Tab item -->
        <BTabItem label="Completed">
          <!-- Comleted header slot -->
          <template slot="header">
            <span>
              <span class="text-xl">
                Completed
              </span>
              <BTag
                size="is-medium"
                type="is-light"
                rounded
              >
                {{ completeSteps.length }}
              </BTag>
            </span>
          </template>
          <!-- Completed list -->
          <ul class="list-reset">
            <li
              v-for="step in completeSteps"
              :key="step.id"
              class="flex my-2 p-2 border rounded shadow"
            >
              <!-- <BCheckbox v-model="step.isComplete" /> -->
              <a
                href="#"
                class="icon mr-1 cursor-pointer text-grey"
                @click.prevent="toggle(step)"
              >
                <FontAwesomeIcon
                  :icon="['fas', 'check-square']"
                  size="2x"
                />
              </a>

              <span :class="{'line-through': step.isComplete}">
                {{ step.description }} (View Templates: <a
                  class="font-medium"
                  href="#"
                >
                  English
                </a> | <a
                  class="font-medium"
                  href="#"
                >
                  Spanish
                </a>)
              </span>
            </li>
          </ul>
        </BTabItem>
      </BTabs>

      <div
        v-if="true"
        class="pledge-meter"
      >
        <h2 class="text-2xl font-medium mb-2">
          Team Pledge-O-Meter
        </h2>
        <p class="text-xs mb-4">
          All values are totaled in per reading challenge and include flat donations.<br>
          $1 per reading challenge is estimated at a $30 flat donation
        </p>

        <h3 class="text-base">
          Silva - 2nd Grade
        </h3>
        <div
          class="mb-4"
          style="display: block"
        >
          <ProgressMeter
            :width="40"
            color="#2db564"
          />
          <div class="mt-2">
            <h3 class="font-bold">
              Total Pledged: $4 of 10
            </h3>
            <h4 class="text-sm">
              Per Reading Challenge
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherDashboardComponent',
  status: 'prototype',
  release: '1.0',
  data () {
    return {
      videoId: '194572344',
      steps: [
        {
          description: 'Send Team Day email to parents',
          isComplete: true,
        },
        {
          description: 'Send Team Day 2 email to parents',
          isComplete: false,
        },
        {
          description: 'Send Weekend Challenge email to parents',
          isComplete: false,
        },
        {
          description: 'Send Day Before Event email to parents',
          isComplete: false,
        },
        {
          description: 'Send Day After Event email to parents',
          isComplete: false,
        },
      ],
    };
  },
  computed: {
    completeSteps () {
      return this.steps.filter(step => step.isComplete);
    },
    incompleteSteps () {
      return this.steps.filter(step => !step.isComplete);
    },
  },
  methods: {
    toggle (step) {
      step.isComplete = !step.isComplete;
    },
  },
};
</script>
