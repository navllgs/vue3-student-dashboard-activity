<template>
  <section>
    <div class="page-heading">
      <div>
        <p class="eyebrow">Student Profile</p>
        <h2>Details</h2>
      </div>
    </div>

    <p v-if="loading" class="notice">Loading student...</p>
    <p v-if="error" class="notice error-notice" role="alert">{{ error }}</p>
    <StudentInfo v-else-if="student" :student="student" />

    <div v-else-if="!loading && !error" class="empty-state">
      <h3>Student not found</h3>
      <p>The requested student does not exist.</p>
    </div>

    <RouterLink class="button secondary" to="/students">
      ← Back to Students
    </RouterLink>
  </section>
</template>

<script>
import StudentInfo from '../components/StudentInfo.vue'
import { getData } from '../firebase/firebase-helper.js'

const STUDENTS_PATH = 'students'

export default {
  name: 'StudentDetailView',

  components: {
    StudentInfo
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
    student() {
      return this.students.find(student => student.id === this.$route.params.id)
    }
  }
}
</script>