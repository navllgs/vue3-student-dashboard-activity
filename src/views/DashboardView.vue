<template>
  <section>
    <div class="page-heading">
      <div>
        <p class="eyebrow">Overview</p>
        <h2>Dashboard</h2>
        <p>Review the current student information.</p>
      </div>
    </div>

    <p v-if="loading" class="notice">Loading students...</p>
    <p v-if="error" class="notice error-notice" role="alert">{{ error }}</p>

    <div class="dashboard-grid">
      <DashboardCard label="Total Students" :value="totalStudents" />
      <DashboardCard label="Present Today" :value="presentStudents" />
      <DashboardCard label="Absent Today" :value="absentStudents" />
      <DashboardCard label="Courses" :value="courseCount" />
    </div>

    <div class="activity-box">
      <h3>Activity</h3>
      <p>
        Student totals are loaded from Realtime Database when you open the dashboard.
      </p>
      <RouterLink class="button" to="/students">
        View Students
      </RouterLink>
    </div>
  </section>
</template>

<script>
import DashboardCard from '../components/DashboardCard.vue'
import { getData } from '../firebase/firebase-helper.js'

const STUDENTS_PATH = 'students'

export default {
  name: 'DashboardView',

  components: {
    DashboardCard
  },

  data() {
    return {
      students: [],
      loading: true,
      error: ''
    }
  },

  mounted() {
    this.loadStudents()
  },

  methods: {
    async loadStudents() {
      try {
        this.students = await getData(STUDENTS_PATH)
        this.error = ''
      } catch (error) {
        this.error = error.message || 'Unable to load students.'
      } finally {
        this.loading = false
      }
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