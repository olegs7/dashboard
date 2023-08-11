<template>
<div class="card">
	<div class="new-user">
		<h5>NEW USER</h5>
		<router-link to="/new-user">
			<span class="material-icons">add_circle</span>
		</router-link>
	</div>

		<table class="table table-hover">
		<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user,index) in users">
					<td>{{user.id}}. {{user.name}}</td>
					<td>{{user.email}}</td>
					<td>{{user.phone}}</td>
					<td>
						<router-link :to="`/edit/${user.id}`">
							<span class="edit material-icons">edit</span>
						</router-link>					
						<span class="delete material-icons" @click='deleteUser(user.id)'>delete</span>
					</td>
				</tr>
			</tbody>
			<div v-if="!isLoading">Loading...</div>
	</table>
</div>

</template>

<script setup>
import {ref,onMounted} from 'vue' 
import EditUser from './EditUser.vue'
import axios from 'axios'

const users = ref([])	
let isLoading = ref(false)

onMounted(()=>{
	ListUsers()
})

function ListUsers(){
				 axios.get('https://jsonplaceholder.typicode.com/users?_limit=3')
    				.then(res => {
       		users.value = res.data 	
       		isLoading = true
     	})
 		}
function deleteUser(userId){
     	if(confirm('Delete this user?')){
     		axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
     			.then(res => {
     				  ListUsers()  //update users
     		 })
     			.catch(err => alert(err))
     	 }
     }
</script>

<style lang="scss" scoped>
.new-user {
	display: flex;
	align-items: center;
	justify-content: end;
}	

.card {
	padding: 15px;

	h5 {
		display: inline;
		margin-right: 10px;
	}

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