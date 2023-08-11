<template>
  <div class="app">
    <sidebar/>  
    <div class="page">
      <top-navbar></top-navbar>
      <router-view></router-view>
    </div>   
  </div>
</template>

<script setup>
import Sidebar from './components/layout/Sidebar.vue'
import TopNavbar from './components/layout/TopNavbar.vue'

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
.page {
  width: 100%;
  padding: 15px;
}

</style>

