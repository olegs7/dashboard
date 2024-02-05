<template>
	<div class="card">

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
						<div class="block-edit">
							<router-link :to="`/admin/user-orders/${user._id}?name=${user.name}`">	
							  <Button class="active" button='orders'/>
						  </router-link>		
						</div>							 							
					</td>		
				</tr>
			</tbody>
			<div v-if="!store.state.isLoading">Loading...</div>
	</table>

</div>
<div>
</div>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue'
import axios from 'axios' 
import { useStore } from 'vuex'
import Button from '@/components/Button.vue'
import { baseUrl } from '@/config'

const store = useStore()
const users = computed(() => store.state.users.users)

onMounted(() => {
	store.dispatch('listUsers')
})
</script>

<style lang="scss" scoped>
.card {
	padding: 20px;

	.table-users  {
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

		.active {
			background-color: gray;
		}
	}
}
</style>