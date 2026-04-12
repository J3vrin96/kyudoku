<template>
  <div class="layout">
    <AppHeader />
    <main class="main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.main {
  flex: 1;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
