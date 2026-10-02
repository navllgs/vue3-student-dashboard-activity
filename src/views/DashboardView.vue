<template>
  <section>
    <div class="page-heading">
      <div>
        <p class="eyebrow">Overview</p>
        <h2>Dashboard</h2>
        <p>Review the current student information.</p>
      </div>
    </div>

    <div class="dashboard-grid">
      <DashboardCard label="Total Students" :value="totalStudents" />
      <DashboardCard label="Present Today" :value="presentStudents" />
      <DashboardCard label="Absent Today" :value="absentStudents" />
      <DashboardCard label="Courses" :value="courseCount" />
    </div>

    <div class="activity-box">
      <h3>Activity</h3>
      <p>
        Build the remaining features as part of the student activity.
      </p>
      <RouterLink class="button" to="/students">
        View Students
      </RouterLink>
    </div>
  </section>
</template>

<script>
import DashboardCard from '../components/DashboardCard.vue'
import { students } from '../data/students.js'

export default {
  name: 'DashboardView',

  components: {
    DashboardCard
  },

  data() {
    return {
      students
    }
  },

  computed: {
    totalStudents() {
      return this.students.length
    },

    presentStudents() {
      return this.students.filter(student => student.present).length
    },

    absentStudents() {
      return this.students.filter(student => !student.present).length
    },

    courseCount() {
      return new Set(this.students.map(student => student.course)).size
    }
  }
}
</script>