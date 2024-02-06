<template>
  <RouterView/>
</template>

<script setup>

</script>

<style lang="scss">
$background: red;

:root {
  --primary: gray;
  --grey: #64748b;
  --light: #f1f5f9;
}
  
* {
  font-family: 'Fira Sans',sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none !important;
}

a,ul {
  color: inherit;
  text-decoration: none;
  list-style-type: none;
}

body {
  background: var(--light);
}
</style>

