<template>
<div class="card">
	<div class="new-user">
		<div @click="$router.push('/admin/new-user')">
			<span class="edit material-icons">add</span>New
	</div>
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
					<!-- <td>{{user.phone}}</td> -->
					<td>
						<router-link :to="`/admin/edit/${user.id}`">	
							<div class="block-edit">
								<span class="edit material-icons">edit</span>
							  <span>EDIT</span>				
							</div>							 
						</router-link>	
					</td>
					<td>
						<div class="block-delete">
							<span class="delete material-icons" @click='deleteUser(user.id)'>delete</span>						 
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
import EditUser from './EditUser.vue'
import { ref,onMounted,computed }  from 'vue'
import axios from 'axios' 
import { useStore } from 'vuex'
import { baseUrl } from '@/config'

const store = useStore()
const users = computed(()=>store.state.users.users)

onMounted(()=>{
	store.dispatch('listUsers',3)
})

function deleteUser(userId){
	store.dispatch('deleteUser',userId)
}

</script>

<style lang="scss" scoped>

</style>