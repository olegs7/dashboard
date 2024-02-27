<template>
		<Sidebar/>
	 <div class="content">
	 		<!-- <TopNavbar/> -->
    <RouterView/>
   </div>
</template>

<script setup>
import TopNavbar from './TopNavbar.vue'	
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<style lang="scss" scoped>
	.content {
		height: 100vh;
	  margin-left: 64px;
	  padding: 15px;	
  }
</style>