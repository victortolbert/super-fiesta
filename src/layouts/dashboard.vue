<template>
  <div id="dashboard-layout">
    <div
      v-for="program in programs"
      :key="program.id"
      class="flex flex-col min-h-screen"
    >
      <app-header class="p-8 bg-gray-200">
        <h1 class="text-2xl font-semibold">
          {{ program.event_name }}
        </h1>
      </app-header>
      <main class="flex-1 p-8">
        <pre>
Program ID: {{ program.id }}
Program Event Name: {{ program.event_name }}
Program School ID: {{ program.school_id }}
Program Classroom Name: {{ program.classrooms[0].name }}
Program Participant ID: {{ program.participants[0].id }}
Program Participant School ID: {{ program.participants[0].school.id }}
Program Participant School City: {{ program.participants[0].school.city }}
Program Participant Profile User ID: {{ program.participants[0].profile.user_id }}
Program Participant Profile Pledge Goal: {{ program.participants[0].profile.pledge_goal }}
Program Participant Pivot Parent ID: {{ program.participants[0].pivot.parent_id }}
Program Participant Pivot Student ID: {{ program.participants[0].pivot.student_id }}
Program Participant: {{ program.participants[0] }}

          <!--

          {{ program.unit_range_high }}

          {{ program.participants[0].microsite }}
          {{ program.participants[0].program_pledge_setting }}
          {{ program.participants[0].participant_info }} -->

        </pre>
      </main>
      <app-footer>
        Footer
      </app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header'
import AppFooter from '@/components/layout/footer'

export default {
  name: 'AppDashboardLayout',
  props: ['programs'],
  components: { AppFooter, AppHeader }
}
</script>
