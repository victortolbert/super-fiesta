<template>
  <div class="m-4 rounded-xl overflow-hidden shadow-lg">
    <div class="modal-card bg-white">
      <header class="modal-card-head bg-white relative items-start">
        <p class="modal-card-title flex items-center justify-between text-xl font-weight-normal">
          <span style="width: 24px; height: 48px" />
          <span class="flex-1 text-center font-bold">Emails we send</span>
          <a
            href="#"
            class="text-black self-start"
            @click.prevent="closeModal"
          >
            <span class="icon">
              <FontAwesomeIcon
                :icon="['fas', 'times']"
              />
            </span>
          </a>
        </p>
      </header>
      <section class="modal-card-body p-0">
        <BCollapse
          v-for="(template, index) in templates"
          :key="template.id"
          :open="template.isOpen"
          animation="zoom-out"
          @open="openAndcloseOthers(index)"
        >
          <div
            slot="trigger"
            slot-scope="props"
            class="flex justify-between border-t items-center py-2 px-4 md:px-6 shadow-none"
          >
            <p class="text-sm sm:text-base md:text-lg ">
              <span class="font-semibold">{{ template.id }}. {{ template.name }}</span><br>
              {{ template.snippet }}
            </p>
            <a class="card-header-icon text-grey-dark p-0 pl-4">
              <FontAwesomeIcon :icon="props.open ? 'chevron-up' : 'chevron-down'" />
            </a>
          </div>
          <div class="modal-card-body bg-white p-4 md:p-6 text-sm sm:text-base md:text-lg">
            <p class="mb-4">
              Sponsor Name,
            </p>

            <p class="mb-4">
              Coming up, {Student first name} is participating in the {Event Name} and is helping raise funds for {funds raised for}. {Student first name} will complete 30-35 {unit type}s in the {Event Name} and has a {student goal} per {unit type} pledge goal. Will you help us?
            </p>

            <p class="mb-4">
              Click here to reach greatness and support {Student first name} now.
            </p>

            <p class="mb-4">
              Thanks so much for helping ha!
            </p>

            <p class="mb-4">
              - {User first name}
            </p>
          </div>
        </BCollapse>
      </section>
      <div class="card-footer">
        <div class="card-footer-item flex-col">
          <AddContactsButtons />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AddContactsButtons from './AddContactsButtons';

export default {
  name: 'EmailTemplatesModal',
  components: {
    AddContactsButtons,
  },
  data () {
    return {
      templates: [
        {
          id: 1,
          name: 'After Contact is Added',
          snippet: 'Subject: Help {Student first name} in the {Event Name}',
          isOpen: false,
        },
        {
          id: 2,
          name: 'One Day Before The Event',
          snippet: 'Subject: Help {Student first name} in the {Event Name}',
          isOpen: false,
        },
        {
          id: 3,
          name: 'One Day Before Event Ends',
          snippet: 'Subject: Help {Student first name} in the {Event Name}',
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    openAndcloseOthers (index) {
      this.templates.forEach(template => {
        template.isOpen = false;
      });
      this.templates[index].isOpen = true;
    },

    closeModal () {
      this.$emit('close');
      document.getElementById('app').style.filter = 'none';
    },
  },
};
</script>
