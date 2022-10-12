<template>
  <div class="pkg-badge">
      <a href="https://packagepages.dev/" rel="noopener noreferrer">
        <img src="../assets/badges/dark.svg" class="dark-mode" alt="Package Pages" />
        <img src="../assets/badges/light.svg" class="light-mode" alt="Package Pages" />
      </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
<style scoped>
.pkg-badge {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 0.3rem;
  justify-content: flex-end;
}

.pkg-badge img {
  width: 170px;
}

@media only screen and (max-width: 600px) {
  .pkg-badge img {
    width: 100px;
  }
}

@media (prefers-color-scheme: dark) {
  .pkg-badge img.dark-mode {
    display: block;
  }

  .pkg-badge img.light-mode {
    display: none;
  }
}

@media (prefers-color-scheme: light) {
  .pkg-badge img.dark-mode {
    display: none;
  }

  .pkg-badge img.light-mode {
    display: block;
  }
}
</style>
