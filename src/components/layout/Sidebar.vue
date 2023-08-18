<template>
	<div class="wrapper-content">
		 <aside :class="{expanded: expanded}">
    	<div class="logo">
    		<img src="#" alt="logo">
    	</div>

    	<div class="menu">
    		<button class="menu-toggle" @click='ToggleMenu'>
    			<span class="material-icons">keyboard_double_arrow_right</span>
    		</button>
    	</div>

   <div class="menu-wrapper">
    	<div class="menu-main">
    		<router-link class="button" to="/admin/list-users">
    			<span class="material-icons">person</span>
    			<span class="text">Users</span>
    		</router-link>
    		<router-link class="button" to="/admin/list-products">
    			<span class="material-icons">inventory_2</span>
    			<span class="text">Products</span>
    		</router-link>
    		<router-link class="button" to="/admin/maps">
    			<span class="material-icons">map</span>
    			<span class="text">Map</span>
    		</router-link>
    		<router-link class="button" to="/admin/analytics">
    			<span class="material-icons">analytics</span>
    			<span class="text">Analitycs</span>
    		</router-link>
    		<router-link class="button" to="/admin/price">
    			<span class="material-icons">payments</span>
    			<span class="text">Price</span>
    		</router-link>
    	</div>

    	<div class='menu-main settings '>
    		<router-link class="button" to="/admin/settings">
    			<span class="material-icons">settings</span>
    			<span class="text">Settings</span>
    		</router-link>
    	</div>

	</div>
    </aside>

    <div class="content">
    	<TopNavbar/>
    	<router-view></router-view>
    </div>

	</div>
</template>


<script setup>
import TopNavbar from './TopNavbar.vue'	
import {ref} from 'vue'

const expanded = ref(false)

const ToggleMenu = () => {
	expanded.value = !expanded.value
}
</script>


<style lang="scss" scoped>
.wrapper-content {
		display: flex;

aside {
	display: flex;
	flex-direction: column;
	width: calc(2rem + 32px);
	min-height: 100vh;
	padding: 1rem;
	overflow: hidden;

	background-color: var(--dark);
	color: var(--light);

	transition: 0.2s ease-out;

	.logo {
		margin-bottom: 1rem;
	}

	.menu {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-out;

		.menu-toggle {
			transition: 0.2s ease-out;

			.material-icons {
				font-size: 2rem;
				color: white;
				transition: 0.2s ease-out;
			}

			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	.menu-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;

	}

	.button .text {
		opacity: 0;
		transition: 0.3s ease-out;
	}

	.menu-main {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			padding: 0.5rem 1rem;
			transition: 0.2s ease-out;

			.material-icons {
				font-size: 1.5rem;
				margin-right: 1rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			.text {
				font-size: 20px;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			&:hover {
				background-color: var(--primary);
		  }

		  &:focus {
		  	background-color: var(--primary);
		  }
		}	
	}
		
	&.expanded {
		width: 300px;

		.menu {
		top: -3rem;

		.menu-toggle {
			transform: rotate(-180deg);
		}
	}

		.button .text {
			opacity: 1;
			transition: 0.3s ease-out;
	}

	.button {
		.material-icons {
			margin-right: 1rem;
		}
	}
}

	img {
		width: 2rem;
	}
}

  .content {
	  width: 100%;
	  padding: 15px;
  }
  
}
</style>