<template>
  <div class="app">
    <header class="navbar">
      <div class="container nav-content">
        <h1>Student Dashboard</h1>

        <nav>
          <RouterLink to="/">Dashboard</RouterLink>
          <RouterLink to="/students">Students</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <main class="container page">
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>