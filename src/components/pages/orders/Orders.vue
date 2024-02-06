<template>
	<div class="card">
		<div class="search-wrapper">
			<Search @clearSearch="clearSearch" v-model="input"/>
		</div>
			
			<table class="table-users table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>User</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(user,index) in users">
						<td>{{index + 1}}.</td>
						<td><img id="img" :src="`${baseUrl}/`+ user.file" alt="no img"></td>
						<td>{{user.name}}</td>
						<td>{{user.email}}</td>
						<td>						
							<div class="block-orders">
								<router-link :to="`/admin/user-orders/${user._id}?name=${user.name}`">	
								  <Button class="button-orders" button='orders'/>
							  </router-link>		
							</div>							 							
						</td>		
					</tr>
				</tbody>
				<div v-if="!store.state.isLoading">Loading...</div>
			</table>
	</div>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue'
import axios from 'axios' 
import { useStore } from 'vuex'
import { baseUrl } from '@/config'
import Button from '@/components/Button.vue'
import Search from '@/components/Search.vue'

const store = useStore()
let input = ref('')

onMounted(() => {
	store.dispatch('listUsers')
})

const users = computed(() => {
	let listUsers = store.state.users.users
    return listUsers.filter((elem) => {
		return elem.name.toLowerCase().includes(input.value.toLowerCase())
	})
})

const clearSearch = () => {
	input.value = ''
}
</script>

<style lang="scss" scoped>
.card {
	padding: 20px;

	.search-wrapper {
		display: flex;
		justify-content: flex-end;
	}

	.table-users {
		padding: 20px;

		thead tr th {
			font-size: 14px;
			font-weight: 400;
			text-transform: uppercase;
	  	color: #9A9A9A;
	  	padding: 10px;
		}

		tbody, td, tfoot, th, thead, tr {
			border-style: none;
			box-shadow: none;
		}

		th, td {
			border-bottom: 1px solid #dee2e6;
		}	

		td:last-child {
			display: flex;
			justify-content: center;
		}

		tbody td {
			height: 75px;
			align-items: center;
			vertical-align: middle;
			padding: 10px;
		}

		tbody td:nth-last-child(2) {
			padding-right: 3px;
		}

			#img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
		  }

		.button-orders {
			background-color: gray;
		}
	}
}
</style>