<template>
  <div class="dashboard-card">
    <div class="card-label">{{ label }}</div>
    <div class="card-value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard',

  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
}
</script>