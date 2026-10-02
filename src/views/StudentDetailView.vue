<template>
  <section>
    <div class="page-heading">
      <div>
        <p class="eyebrow">Student Profile</p>
        <h2>Details</h2>
      </div>
    </div>

    <StudentInfo v-if="student" :student="student" />

    <div v-else class="empty-state">
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
import { students } from '../data/students.js'

export default {
  name: 'StudentDetailView',

  components: {
    StudentInfo
  },

  data() {
    return {
      students
    }
  },

  computed: {
    student() {
      const id = Number(this.$route.params.id)

      return this.students.find(student => student.id === id)
    }
  }
}
</script>