<template>
  <article class="student-card">
    <div>
      <h3>{{ student.name }}</h3>
      <p>{{ student.course }}</p>
      <small>Year {{ student.year }}</small>
    </div>

    <div class="student-actions">
      <button class="favorite-button" @click="toggleFavorite">
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

  methods: {
    toggleFavorite() {
      this.student.favorite = !this.student.favorite
    }
  }
}
</script>