<template>
  <div class="app">
     <router-view></router-view>
  </div>
</template>

<script setup>

</script>


<style lang="scss">
:root {
  --primary: #4F6EC8;
  --grey: #64748b;
  --dark: #141A25;
  --light: #f1f5f9;
}

* {
  font-family: 'Fira Sans',sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none !important;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: 0;
  background: 0;
} 

.app {
  display: flex;

}
</style>

