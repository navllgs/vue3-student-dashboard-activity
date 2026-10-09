<template>
  <section>
    <div class="page-heading">
      <div>
        <p class="eyebrow">Directory</p>
        <h2>Students</h2>
        <p>Browse the student list.</p>
      </div>
    </div>

    <!-- OPTIONAL CHALLENGE:
         Add a search input and filter the students by name. -->

    <div class="student-list">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student="student"
        @toggle-favorite="toggleFavorite"
      />
    </div>

    <p v-if="loading" class="notice">Loading students...</p>
    <p v-if="error" class="notice error-notice" role="alert">{{ error }}</p>
    <div v-if="!loading && students.length === 0 && !error" class="empty-state">
      <h3>No students yet</h3>
      <p>Add students from the Manage page.</p>
    </div>
    <RouterLink class="button" to="/students/manage">Manage Students</RouterLink>
  </section>
</template>

<script>
import StudentCard from '../components/StudentCard.vue'
import { getData, updateData } from '../firebase/firebase-helper.js'

const STUDENTS_PATH = 'students'

export default {
  name: 'StudentsView',

  components: {
    StudentCard
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
      this.loading = true
      this.error = ''

      try {
        this.students = await getData(STUDENTS_PATH)
      } catch (error) {
        this.error = error.message || 'Unable to load students.'
      } finally {
        this.loading = false
      }
    },

    async toggleFavorite(student) {
      this.error = ''

      try {
        await updateData(STUDENTS_PATH, student.id, { favorite: !student.favorite })
        student.favorite = !student.favorite
      } catch (error) {
        this.error = error.message || 'Unable to update the favorite.'
      }
    }
  }
}
</script>