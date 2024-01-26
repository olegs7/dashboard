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
					<td><img id="img" :src="`${baseUrl}/`+ user.file" alt=""></td>
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

onMounted(()=>{
	store.dispatch('listUsers')
})
</script>

<style lang="scss">
.active {
	background-color: gray;
}
</style>