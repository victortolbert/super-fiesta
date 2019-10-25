<template>
  <section>
    <div class="contacts-table px-4 pb-4 text-xs sm:text-sm md:text-base">
      <div class="border border-transparent pl-3 pb-1">
        <div
          v-if="allSelected"
          class="pb-5"
        >
          <div class="text-center">
            <button
              :disabled="noSponsorsSelected"
              class="w-64 button px-10 font-semibold is-rounded is-secondary shadow"
              @click="emailPreviousSponsors"
            >{{ lang.email_previous_sponsors }}</button>
          </div>
        </div>
        <BCheckbox
          v-if="contacts.length"
          :value="allSponsorsSelected"
          type="is-secondary"
          @change.native="toggleSelectAll"
        >
          <span class="inline-block pl-2 sm:pl-3">
            {{ allSponsorsSelected ? lang.unselect_all : lang.select_all }}
          </span>
        </BCheckbox>
      </div>

      <table class="table is-fullwidth border">
        <!-- Show contacts header, if there are any -->
        <thead v-if="contacts.length">
          <tr class="bg-secondary text-white">
            <th colspan="2">
              {{ lang.contact }}
            </th>
            <th>{{ lang.status }}</th>
            <th>
              <FontAwesomeIcon
                v-if="!isEditing"
                :icon="['far', 'user-edit']"
                class="cursor-pointer"
                @click="isEditing = true"
              />
              <button
                v-else
                class="button is-secondary is-inverted is-small"
                @click="isEditing = false"
              >
                <span>Close</span>
                <span class="icon">
                  <FontAwesomeIcon :icon="['fas', 'times']" />
                </span>
              </button>
            </th>
          </tr>
        </thead>

        <!-- Show the contacts, if we have them  -->
        <tbody v-if="contacts.length">
          <tr
            v-for="(contact, index) in getContactsSorted"
            :key="index"
          >
            <td class="align-middle">
              <BCheckbox
                v-if="contact.isPreviousSponsor"
                :value="contact.isSelected"
                type="is-secondary"
                class="custom"
                @change.native="selectContact(index)"
              />
            </td>
            <td class="w-full">
              <div class="flex-1 sm:flex items-center justify-between">
                <div class="flex-1">
                  {{ contact.first_name }} {{ contact.last_name }}
                  <br>
                  {{ contact.email }}
                </div>
                <div
                  v-if="contact.isPreviousSponsor"
                  class="italic font-semibold has-text-secondary sm:pr-10"
                >
                  {{ lang.previous_sponsor }}
                </div>
              </div>
            </td>
            <td>{{ translateStatus(contact.status) }}</td>
            <td class="text-center align-middle">
              <FontAwesomeIcon
                v-if="isEditing"
                :icon="['fas', 'trash-alt']"
                @click="removeContact(contact)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import RemoveContactModal from '@/components/template/RemoveContactModal';

export const PledgingStatus = {
  READY: 'Ready',
  EMAILED: 'Emailed',
  PLEDGED: 'Pledged',
  UNSUBSCRIBED: 'Unsubscribed',
};

export default {
  name: 'ContactsTable',
  props: {
    contacts: {
      type: Array,
      default: () => [],
    },
    allSelected: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      isEditing: false,
    };
  },
  computed: {
    lang () {
      return this.$store.state.lang;
    },
    previousSponsors () {
      return this.contacts.filter(contact => contact.isPreviousSponsor);
    },
    selectedSponsors () {
      return this.previousSponsors.filter(previousSponsor => previousSponsor.isSelected);
    },
    noSponsorsSelected () {
      return this.selectedSponsors.length === 0;
    },
    allSponsorsSelected () {
      return this.previousSponsors.length === this.selectedSponsors.length;
    },
    getContactsSorted () {
      // slice() used to create clone of array
      return this.contacts.slice().sort(this.sortContact);
    },
  },
  methods: {
    sortContact (contactA, contactB) {
      let statusSortResult = this.sortStatusCompare(contactA.status, contactB.status);

      if (statusSortResult !== 0) {
        return statusSortResult;
      }

      let firstNameSortResult = this.sortStringCompare(contactA.first_name, contactB.first_name);

      if (firstNameSortResult !== 0) {
        return firstNameSortResult;
      }

      let lastNameSortResult = this.sortStringCompare(contactA.last_name, contactB.last_name);

      if (lastNameSortResult !== 0) {
        return lastNameSortResult;
      }

      let emailSortResult = this.sortStringCompare(contactA.email, contactB.email);

      if (emailSortResult !== 0) {
        return emailSortResult;
      }

      return -1;
    },
    sortStringCompare (stringOne, stringTwo) {
      var firstNameA = stringOne.toLowerCase().trim();
      var firstNameB = stringTwo.toLowerCase().trim();

      if (firstNameA > firstNameB) {
        return 1;
      } else if (firstNameA < firstNameB) {
        return -1;
      } else {
        return 0;
      }
    },
    sortStatusCompare (statusOne, statusTwo) {
      statusOne = statusOne.toLowerCase().trim();
      statusTwo = statusTwo.toLowerCase().trim();

      if (statusOne === statusTwo) {
        return 0;
      }

      let statusOrder = Object.keys(PledgingStatus).map(function (key) {
        return PledgingStatus[key].toLowerCase();
      });

      return statusOrder.indexOf(statusOne) - statusOrder.indexOf(statusTwo);
    },
    toggleSelectAll () {
      let boolean = !this.allSponsorsSelected;
      this.previousSponsors.forEach(contact => {
        contact.isSelected = boolean;
      });

      this.contacts = [...this.contacts]; // NOTE: To trigger Vuex change
    },
    selectContact (index) {
      this.contacts[index].isSelected = !this.contacts[index].isSelected;
      this.contacts = [...this.contacts]; // NOTE: To trigger Vuex change
    },
    removeContact (contact) {
      this.$modal.open({
        parent: this,
        component: RemoveContactModal,
        hasModalCard: true,
        width: 320,
        onCancel: this.unBlur,
      });
      this.blur();
      this.isEditing = false;
    },
    blur () {
      document.getElementById('app').style.filter = 'blur(4px)';
    },
    unBlur () {
      document.getElementById('app').style.filter = 'none';
    },
    translateStatus (statusText) {
      return this.lang.easy_emailer_status[statusText.toLowerCase()];
    },
    emailPreviousSponsors () {

    },
  },
};
</script>

<style>
.table thead td,
.table thead th {
  color: #ffffff;
}
.table td,
.table th {
  vertical-align: middle;
}
.table thead th {
  height: 4em;
}
.b-checkbox.checkbox.custom .control-label {
  padding-left: 0;
}
td.checkbox-cell label.is-disabled {
  display: none;
}
</style>
