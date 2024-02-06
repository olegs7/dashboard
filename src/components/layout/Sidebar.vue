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

   	<div class="menu-wrapper" @click="menuClose">
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

const menuClose = () => {
	expanded.value = false
}
</script>


<style lang="scss" scoped>
$background: #1f2937;
$background-hover: #d1d5db;

.sidebar {
		display: flex;

	aside {
		display: flex;
		flex-direction: column;
		position: fixed;
		width: calc(2rem + 32px);
		height: 100%;
		padding: 1rem;
		z-index: 10;

		background-color: $background;
		color: var(--light);

		transition: 0.2s ease-out;

		.logo {
			margin-bottom: 1rem;
		}

	.menu {
		display: flex;
		justify-content: flex-end;
		position: relative;
		top: 0;
		transition: 0.2s ease-out;

		.menu-toggle {
			transition: 0.2s ease-out;
			cursor: pointer;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			&:hover {
				.material-icons {
					color: $background-hover;
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
		display: none;
		padding-left: 10px;
		transition: 0.3s ease-out;
	}

	.menu-main {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			padding: 0.5rem 1rem;
			margin-bottom: 10px;
			transition: 0.2s ease-out;

			.material-icons {
				font-size: 1.5rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			.text {
				font-size: 14px;
				font-weight: 600;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			&:hover {
				background-color: $background-hover;
				border-radius: 8px;
					.text{
						color: $background;
					}
					.material-icons{
						color: $background;
					}
		  }

		  &:focus {
		  	background-color: $background-hover;
		  		.material-icons{
						color: $background;
					}
		  }
		}	
	}
		
	&.expanded {
		width: 280px;

		.menu {
		top: -3rem;

		.menu-toggle {
			transform: rotate(-180deg);
		}
	}

		.menu-main {
			margin: 0;
		}

		.button .text {
			display: block;
			transition: 0.3s ease-out;
	}
}

		img {
			width: 2rem;
		}

	}
}
</style>