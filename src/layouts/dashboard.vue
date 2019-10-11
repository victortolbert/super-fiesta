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
        <pre class="text-xs">

<!--
User ID: {{ $store.state.user.id }}
User Program Classroom Grade ID: {{ program.classrooms[2].grade_id }}
User Program Classroom Grade ID: {{ program.classrooms[2].grade.id }}
User Program Classroom Group ID: {{ program.classrooms[2].group_id }}
User Program Classroom ID: {{ program.classrooms[2].id }}
User Program Classroom Teacher ID: {{ program.classrooms[2].teacher_id }}
User Program ID: {{ program.id }}
User Program Microsite Color Theme ID: {{ program.microsite.color_theme_id }}
User Program Microsite ID: {{ program.microsite.id }}
User Program Microsite Microsite Color Theme ID: {{ program.microsite.microsite_color_theme.id }}
User Program Microsite Program ID: {{ program.microsite.program_id }}
User Program Owner ID: {{ program.owner_id }}
User Program Participant ID: {{ program.participants[0].id }}
User Program Participant Participant Info Classroom Grade ID: {{ program.participants[0].participant_info.classroom.grade_id }}
User Program Participant Participant Info Classroom Grade ID: {{ program.participants[0].participant_info.classroom.grade.id }}
User Program Participant Participant Info Classroom Group Group Level ID: {{ program.participants[0].participant_info.classroom.group.group_level_id }}
User Program Participant Participant Info Classroom Group ID: {{ program.participants[0].participant_info.classroom.group_id }}
User Program Participant Participant Info Classroom Group ID: {{ program.participants[0].participant_info.classroom.group.id }}
User Program Participant Participant Info Classroom Group Prize Bound Group ID: {{ program.participants[0].participant_info.classroom.group.prizes_bound[0].group_id }}
User Program Participant Participant Info Classroom Group Prize Bound ID: {{ program.participants[0].participant_info.classroom.group.prizes_bound[0].id }}
User Program Participant Participant Info Classroom Group Prize Bound Prize ID: {{ program.participants[0].participant_info.classroom.group.prizes_bound[0].prize_id }}
User Program Participant Participant Info Classroom Group Program ID: {{ program.participants[0].participant_info.classroom.group.program_id }}
User Program Participant Participant Info Classroom Group Salesforce ID: {{ program.participants[0].participant_info.classroom.group.salesforce_id }}
User Program Participant Participant Info Classroom Group SF Opportunity ID: {{ program.participants[0].participant_info.classroom.group.sf_opportunity_id }}
User Program Participant Participant Info Classroom Group SF Point Person ID: {{ program.participants[0].participant_info.classroom.group.sf_point_person_id }}
User Program Participant Participant Info Classroom Group SF Program ID: {{ program.participants[0].participant_info.classroom.group.sf_program_id }}
User Program Participant Participant Info Classroom ID: {{ program.participants[0].participant_info.classroom_id }}
User Program Participant Participant Info Classroom ID: {{ program.participants[0].participant_info.classroom.id }}
User Program Participant Participant Info Classroom Teacher ID: {{ program.participants[0].participant_info.classroom.teacher_id }}
User Program Participant Participant Info ID: {{ program.participants[0].participant_info.id }}
User Program Participant Participant Info Pledge Family Pledge ID: {{ program.participants[0].participant_info.pledges[0].family_pledge_id  }}
User Program Participant Participant Info Pledge Group ID: {{ program.participants[0].participant_info.pledges[0].group_id  }}
User Program Participant Participant Info Pledge ID: {{ program.participants[0].participant_info.pledges[0].id }}
User Program Participant Participant Info Pledge Participant User ID: {{ program.participants[0].participant_info.pledges[0].participant_user_id  }}
User Program Participant Participant Info Pledge Payment ID: {{ program.participants[0].participant_info.pledges[0].payment_id  }}
User Program Participant Participant Info Pledge Pledge Sponsor ID: {{ program.participants[0].participant_info.pledges[0].pledge_sponsor.id  }}
User Program Participant Participant Info Pledge Pledge Status ID: {{ program.participants[0].participant_info.pledges[0].pledge_status_id  }}
User Program Participant Participant Info Pledge Pledge Type ID: {{ program.participants[0].participant_info.pledges[0].pledge_type_id  }}
User Program Participant Participant Info Pledge Program ID: {{ program.participants[0].clasrooom.group.id }}
User Program Participant Participant Info Pledge Program ID: {{ program.participants[0].clasrooom.id }}
User Program Participant Participant Info Pledge Program ID: {{ program.participants[0].participant_info.pledges[0].program_id  }}
User Program Participant Participant Info Pledge Sponsor Type ID: {{ program.participants[0].participant_info.pledges[0].sponsor_type_id  }}
User Program Participant Participant Info Pledge User ID: {{ program.participants[0].participant_info.pledges[0].user_id  }}
User Program Participant Participant Info Potential Sponsors ID: {{ program.participants[0].participant_info.potential_sponsors.id }}
User Program Participant Participant Info Potential Sponsors Participant User ID: {{ program.participants[0].participant_info.potential_sponsors.participant_user_id }}
User Program Participant Participant Info Potential Sponsors Sender User ID: {{ program.participants[0].participant_info.potential_sponsors.sender_user_id }}
User Program Participant Participant Info Potential Sponsors Sponsor User ID: {{ program.participants[0].participant_info.potential_sponsors.sponsor_user_id }}
User Program Participant Participant Info Prize Bound Student ID: {{ program.participants[0].participant_info.prize_bound_students[0].id}}
User Program Participant Participant Info Prize Bound Student Prize ID: {{ program.participants[0].participant_info.prize_bound_students[0].prize_id}}
User Program Participant Participant Info Prize Bound Student Student ID: {{ program.participants[0].participant_info.prize_bound_students[0].student_id}}
User Program Participant Participant Info User ID: {{ program.participants[0].participant_info.user_id }}
User Program Participant Pivot Parent ID: {{ program.participants[0].pivot.parent_id }}
User Program Participant Pivot Student ID: {{ program.participants[0].pivot.student_id }}
User Program Participant Prize ID: {{ program.participants[0].prizes[0].id}}
User Program Participant Profile User ID: {{ program.participants[0].profile.user_id }}
User Program Participant School ID: {{ program.participants[0].school.id }}
User Program Participant School Program ID: {{ program.participants[0].school.program_id }}
User Program Participant School Salesforce ID: {{ program.participants[0].school.salesforce_id }}
User Program Participant Special URL ID: {{ program.participants[0].special_urls[0].id }}
User Program Participant Special URL Referrer ID: {{ program.participants[0].special_urls[0].referrer_id }}
User Program Participant Special URL Referrer ID: {{ program.participants[0].special_urls[0].referrer.id }}
User Program Participant Special URL User ID: {{ program.participants[0].special_urls[0].user_id }}
User Program Program Pledge Setting ID: {{ program.program_pledge_setting.id }}
User Program Program Pledge Setting Program ID: {{ program.program_pledge_setting.program_id }}
User Program Salesforce ID: {{ program.salesforce_id }}
User Program Salesforce Team ID: {{ program.salesforce_team_id }}
User Program School ID: {{ program.school_id }}
User Program SF Opportunity ID: {{ program.sf_opportunity_id }}
User Program SF Owner ID: {{ program.sf_owner_id }}
User Program SF School ID: {{ program.sf_school_id }}
User Program Team ID: {{ program.team_id }}
User Program Unit ID: {{ program.unit_id }}
<hr>
User First Name: {{ $store.state.user.first_name }}
User Last Name: {{ $store.state.user.last_name }}
User DOB: {{ $store.state.user.dob }}
User Program Participant Participant Info Potential Sponsors First Name: {{ program.participants[0].participant_info.potential_sponsors.first_name }}
User Program Participant Prize Name: {{ program.participants[0].prizes[0].name}}
User Program Participant Prize Pivot Status: {{ program.participants[0].prizes[0].pivot.status}}
User Program Participant Profile Pledge Goal: {{ program.participants[0].profile.pledge_goal }}
User Program Participant School City: {{ program.participants[0].school.city }}
User Program Participant Special URL Referrer Name {{ program.participants[0].special_urls[0].id }}
User Program Program Pledge Setting Family Pledging Enabled: {{ program.program_pledge_setting.family_pledging_enabled }}
User Program Unit Range High: {{ program.unit_range_high }}
User Program Unit Range Low: {{ program.unit_range_low }}
User Program Unit Title: {{ program.unit.title }}
User Program Unit Name: {{ program.unit.name }}
User Program Unit Modifier: {{ program.unit.modifier }}
User Program Classroom Name: {{ program.classrooms[2].name }}
User Program Classroom Display Name: {{ program.classrooms[2].display_name }}
User Program Event Name: {{ program.event_name }}
User Program Microsite Microsite Color Theme Theme Name: {{ program.microsite.microsite_color_theme.theme_name }}
User Program Participant Participant Info Classroom Grade Display Name: {{ program.participants[0].participant_info.classroom.grade.display_name }}
User Program Participant Participant Info Classroom Grade Name: {{ program.participants[0].participant_info.classroom.grade.name }}
User Program Participant Participant Info Family Pledging Enabled: {{ program.participants[0].participant_info.family_pledging_enabled }}
User Program Participant Participant Info Pledge Pledge Sponsor First Name: {{ program.participants[0].participant_info.pledges[0].pledge_sponsor.first_name  }}
-->
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
