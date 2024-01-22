<template>
<div class="card">
		<div class="new-user" @click="$router.push('/admin/new-user')">
				<div class="new-user__new">
					<span class="material-icons">add</span>New user
				</div>		
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
				<tr v-for="(user,index) in users">
					<td>{{index + 1}}.</td>
					<td><img id="img" :src="`${baseUrl}/`+ user.file" alt="user-img"></td>
					<td>{{user.name}}</td>
					<td>{{user.email}}</td>
					<td>{{user.phone}}</td>
					<td>						
						<div class="block-edit">
							<router-link :to="`/admin/edit-user/${user._id}`">	
								<span class="edit material-icons">edit</span>
							  <span>EDIT</span>		
						  </router-link>		
						</div>							 							
						<div class="block-delete">
							<span class="delete" @click='deleteUser(user._id)'>&times;</span>						 
						</div>					
					</td>		
				</tr>
			</tbody>
			<div v-if="!store.state.isLoading">Loading...</div>
			<h5 v-if="store.state.users.users.length === 0">No users</h5>
	</table>
</div>
<div>
</div>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue'
import axios from 'axios' 
import { useStore } from 'vuex'
import { baseUrl } from '@/config'

const store = useStore()
const users = computed(() => store.state.users.users)

onMounted(()=>{
	store.dispatch('listUsers')
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

</style>