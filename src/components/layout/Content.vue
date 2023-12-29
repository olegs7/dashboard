<template>
		<Sidebar/>
	 <div class="content">
	 		<TopNavbar/>
    	<router-view></router-view>
   </div>
</template>

<script setup>
import TopNavbar from './TopNavbar.vue'	
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<style lang="scss" scoped>
	.content {
	  margin-left: 64px;
	  padding: 15px;	
  }
</style>