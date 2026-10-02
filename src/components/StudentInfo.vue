<template>
  <div class="student-info">
    <h2>{{ student.name }}</h2>

    <dl>
      <div>
        <dt>Course</dt>
        <dd>{{ student.course }}</dd>
      </div>

      <div>
        <dt>Year</dt>
        <dd>{{ student.year }}</dd>
      </div>

      <div>
        <dt>Email</dt>
        <dd>{{ student.email }}</dd>
      </div>

      <div>
        <dt>Status</dt>
        <dd>{{ student.present ? 'Present' : 'Absent' }}</dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'StudentInfo',

  props: {
    student: {
      type: Object,
      required: true
    }
  }
}
</script>