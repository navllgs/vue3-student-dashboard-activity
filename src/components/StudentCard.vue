<template>
  <article class="student-card">
    <div>
      <h3>{{ student.name }}</h3>
      <p>{{ student.course }}</p>
      <small>Year {{ student.year }}</small>
    </div>

    <div class="student-actions">
      <button class="favorite-button" @click="$emit('toggle-favorite', student)">
        {{ student.favorite ? '★ Favorite' : '☆ Favorite' }}
      </button>

      <RouterLink
        class="button"
        :to="`/students/${student.id}`"
      >
        View Profile
      </RouterLink>
    </div>
  </article>
</template>

<script>
export default {
  name: 'StudentCard',

  props: {
    student: {
      type: Object,
      required: true
    }
  },

  emits: ['toggle-favorite']
}
</script>