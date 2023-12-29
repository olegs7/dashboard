<template>
	<div class="sidebar">
		 <aside :class="{expanded: expanded}">
    	<div class="logo">
    		<img src="@/assets/logo.svg" alt="logo">
    	</div>

    	<div class="menu">
    		<div class="menu-toggle" @click='toggleMenu'>
    			<span class="material-icons">keyboard_double_arrow_right</span>
    		</div>
    	</div>

   <div class="menu-wrapper">
    	<div class="menu-main">
    		<router-link class="button" to="/admin/list-users">
    			<span class="material-icons">account_circle</span>
    			<span class="text">Users</span>
    		</router-link>
    		<router-link class="button" to="/admin/list-products">
    			<span class="material-icons">inventory_2</span>
    			<span class="text">Products</span>
    		</router-link>
    		<router-link class="button" to="/admin/orders">
    			<span class="material-icons">shopping_cart</span>
    			<span class="text">Orders</span>
    		</router-link>
    		<router-link class="button" to="/admin/analytics">
    			<span class="material-icons">insights</span>
    			<span class="text">Analytics</span>
    		</router-link>
    		<router-link class="button" to="/admin/price">
    			<span class="material-icons">payments</span>
    			<span class="text">Price</span>
    		</router-link>
    		<router-link class="button" to="/admin/settings">
    			<span class="material-icons">settings</span>
    			<span class="text">Settings</span>
    		</router-link>
    	</div>

    	<div class='menu-main logout'>
    		<router-link class="button" to="/">
    			<span class="material-icons">logout</span>
    			<span class="text">Logout</span>
    		</router-link>
    	</div>	
		</div>

     </aside>
	</div>
</template>


<script setup>
import { ref } from 'vue'

const expanded = ref(false)

const toggleMenu = () => {
	expanded.value = !expanded.value
}
</script>


<style lang="scss" scoped>

</style>