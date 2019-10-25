<template>
  <div>
    <p class="text-center md:text-lg font-bold mb-4 px-12">
      Add or import your contacts to send emails.
    </p>

    <div class="flex justify-center content-center mb-5">
      <div class="w-16 sm:w-24 flex flex-col flex-wrap text-center">
        <button
          class="shadow is-rounded border w-12 h-12 rounded-full mx-auto cursor-pointer"
          @click="showAddContactsModal"
        >
          <BaseIcon name="add-email" />
        </button>
        <span class="text-xs">
          Add Contact
        </span>
      </div>
      <div class="w-16 sm:w-24 flex flex-col flex-wrap text-center">
        <button
          class="shadow is-rounded border w-12 h-12 rounded-full mx-auto cursor-pointer"
          onclick="return cloudsponge.launch('gmail');"
        >
          <BaseIcon name="gmail" />
        </button>
        <span class="text-xs">
          Gmail
        </span>
      </div>
      <div class="w-16 sm:w-24 flex flex-col flex-wrap text-center">
        <button
          class="shadow is-rounded border w-12 h-12 rounded-full mx-auto cursor-pointer"
          onclick="return cloudsponge.launch('yahoo');"
        >
          <BaseIcon name="yahoo" />
        </button>
        <span class="text-xs">
          Yahoo
        </span>
      </div>
      <div class="w-16 sm:w-24 flex flex-col flex-wrap text-center">
        <button
          class="shadow is-rounded border w-12 h-12 rounded-full mx-auto cursor-pointer"
          onclick="return cloudsponge.launch('windowslive');"
        >
          <BaseIcon name="outlook" />
        </button>
        <span class="text-xs">
          Outlook
        </span>
      </div>
    </div>
  </div>

</template>

<script>
import AddContactsModal from '@/components/template/AddContactsModal';

export default {
  name: 'AddContactsButtons',
  components: {
  },
  data () {
    return {
      contacts: [],
    };
  },
  mounted () {
    // initialization for cloudsponge
    (function (u) {
      var d = document;
      var s = 'script';
      var a = d.createElement(s);
      var m = d.getElementsByTagName(s)[0];
      a.async = 1; a.src = u; m.parentNode.insertBefore(a, m);
    })('//api.cloudsponge.com/widget/V-2F2bg0uFYke7PBz9c7uw.js');
    var self = this;

    window.csPageOptions = {
      sources: ['gmail', 'yahoo', 'windowslive'],
      mobile_render: true,
      filter: function (contact) {
        return contact.email.length && contact.first_name.length;
      },
      inlineOauth: 'mobile',
      afterSubmitContacts (contacts, source, owner) {
        self.contacts = contacts.map(contact => {
          return {
            firstName: contact.first_name,
            lastName: contact.last_name,
            emailAddress: contact.selectedEmail(),
          };
        });
        self.enrollContacts();
      },
    };
  },
  methods: {
    showAddContactsModal () {
      this.$modal.open({
        parent: this,
        component: AddContactsModal,
        hasModalCard: true,
        width: 'auto',
        onCancel: this.unBlur,
      });
      document.getElementById('app').style.filter = 'blur(4px)';
    },
    enrollContacts () {
      axios.post('/v3/api/enroll-contacts', {
        contacts: this.contacts,
        participantUserId: this.$route.params.participantUserId,
      }).then(response => {
        this.addContactsToDisplay(response.data);
        this.isSending = true;
      }).catch(error => {
        this.isSending = false;
        this.errors = error.response.data.errors;
      });
    },
    addContactsToDisplay (contacts) {
      this.$store.commit('SET_CONTACTS', contacts);
    },
    closeModal () {
      this.$parent.$emit('close');
    },
    unBlur () {
      document.getElementById('app').style.filter = 'none';
    },
  },
};
</script>
