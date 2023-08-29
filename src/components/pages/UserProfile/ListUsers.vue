<template>
<div class="card">
	<div class="new-user">
		<button @click="$router.push('/admin/new-user')">
			<span class="edit material-icons">add</span>New
	</button>
	</div>

		<table class="table table-hover">
		<thead>
				<tr>
					<th>Id</th>
					<th>Photo</th>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user,index) in users">
					<td>{{user.id}}.</td>
					<td>photo</td>
					<td>{{user.name}}</td>
					<td>{{user.email}}</td>
					<td>{{user.phone}}</td>
					<td>
						<router-link :to="`/admin/edit/${user.id}`">
							<span class="edit material-icons">edit</span>
						</router-link>					
						<span class="delete material-icons" @click='deleteUser(user.id)'>delete</span>
					</td>
				</tr>
			</tbody>
			<div v-if="!store.state.isLoading">Loading...</div>
	</table>
</div>

</template>

<script setup>
import { ref,onMounted,computed }  from 'vue'
import axios from 'axios' 
import { mapGetters,mapActions,mapMutations, useStore } from 'vuex'
import EditUser from './EditUser.vue'
import { baseUrl } from '@/config'

const store = useStore()
const users = computed(()=>store.state.users)
// const users = ref([])	
// let isLoading = ref(false)

// mapActions(['listUsers','deleteUser'])
// mapGetters(['allUsers'])

onMounted(()=>{
	store.dispatch('listUsers')
	// listUsers()
})

function deleteUser(userId){
	store.dispatch('deleteUser',userId)
}

// async function listUsers(){
// 				 let res = await axios.get(`${baseUrl}/users?_limit=3`)   			
//        			users.value = res.data 	
//        			isLoading = true	
//  		}


// function deleteUser(userId){
//      	if(confirm('Delete this user?')){
//      		axios.delete(`${baseUrl}/users/${userId}`)
//      			.then(res => {
//      				  listUsers()  //update users
//      		 })
//      			.catch(err => alert(err))
//      	 }
//      }
</script>

<style lang="scss" scoped>
.new-user {
	display: flex;
	align-items: center;

	button {
		display: flex;
		font-size: 18px;
	}
}	

.card {
	padding: 20px;

	.table  {
		padding: 20px;

		thead tr th {
			font-size: 14px;
			font-weight: 400;
			text-transform: uppercase;
	  	color: #9A9A9A;
		}

		tbody, td, tfoot, th, thead, tr {
			border-style: none;
			box-shadow: none;
		}

		th, td {
			border-bottom: 1px solid #dee2e6;
		}	

		.delete {
			margin-left: 10px;
			cursor: pointer;
		}
	}
}
</style>