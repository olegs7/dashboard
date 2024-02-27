<template>
	<div class="card">
		<div class="new-user">
			  <div class="new-user__new" @click="$router.push('/admin/new-user')">
				  <Button class="button" button='new-user'/>
			  </div>	
			  <Search @clearSearch="clearSearch" v-model="input"/>
		</div>

		<table class="table-users table-hover">
		<thead>
				<tr>
					<th>Id</th>
					<th>User</th>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user,index) in users" :key="user._id">
					<td>{{index + 1}}.</td>
					<td><img id="img" :src="`${baseUrl}/`+ user.file" alt="no img"></td>
					<td>{{user.name}}</td>
					<td>{{user.email}}</td>
					<td>{{user.phone}}</td>
					<td>						
						<router-link :to="`/admin/edit-user/${user._id}`">	
						  <Button class="button-edit" button='edit'/>		
					  </router-link>							 							
							<Button class="button-delete"
							 				@click="deleteUser(user._id)" 
							 				button='&times;'/>				
					</td>		
				</tr>
			</tbody>
			<div v-if="!store.state.isLoading">Loading...</div>
			<h5 v-if="users.length === 0">No users</h5>
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

const clearSearch = () => {
	input.value = ''
}

const users = computed(() => {
	let listUsers = store.state.users.users
    return listUsers.filter((elem) => {
		return elem.name.toLowerCase().includes(input.value.toLowerCase())
	})
})

function deleteUser(userId){
    if(confirm('Delete this user?')){
     	axios.delete(`${baseUrl}/users/${userId}`)
     		.then(res => res)
     		.catch(err => alert(err))
  }
}  
</script>

<style lang="scss" scoped>
.card {
	padding: 20px;

	.new-user {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

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

		.button-edit {
			background-color: gray;
	}

		.button-delete {
			background-color: red;
	}
}

	.button {
		background-color: #3e6ae1;
	}
}
</style>