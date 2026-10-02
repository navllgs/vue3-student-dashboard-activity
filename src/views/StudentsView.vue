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
      />
    </div>
  </section>
</template>

<script>
import StudentCard from '../components/StudentCard.vue'
import { students } from '../data/students.js'

export default {
  name: 'StudentsView',

  components: {
    StudentCard
  },

  data() {
    return {
      students
    }
  }
}
</script>