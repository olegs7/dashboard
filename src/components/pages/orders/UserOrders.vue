<template>
	 <div class="card">	

	 	<div>
	 		<h5>USER: {{userName}}</h5>
	 	</div>

		<table class="table-products table-hover">
		<thead>
			
			</thead>
			<tbody>
				<tr v-for="(product,index) in products">
					<td>{{index + 1}}.</td>
					<td><img class="img" :src="`${baseUrl}/`+ product.file" alt=""></td>
					<td>{{product.name}}</td>
					<td>{{product.price}}$</td>
					<td>{{product.description}}</td>
					<td>
						<div>		
							<span class="btn btn-small btn-danger"
							 			@click.prevent='dltProduct(product._id)'>&minus;</span>	
							<span></span> 					
							<span class="btn btn-small btn-success" 
							 			@click.prevent='addProduct(product._id)'>&plus;</span>	
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
import { useRoute } from 'vue-router'
import { baseUrl } from '@/config'

const route = useRoute()
const store = useStore()

onMounted(()=>{
	userId = route.params.id
	userName = route.query.name
	store.dispatch('listUsers')
	store.dispatch('listProducts')
	getOne(userId)
})

let userId = ''
let userName = ''

const users = computed(() => store.state.users.users)
const products = computed(() => store.state.products.products)

async function addProduct(productId){
	let formData = new FormData()
	formData.append('userId',userId)
		let res = await axios.post(`${baseUrl}/user-orders/${productId}`,formData,{
			headers: {
                'Content-Type': 'text/html',
            }
	})
		alert(res.data.length)
}

async function dltProduct(productId){
     let res = await axios.delete(`${baseUrl}/user-orders/${productId}?user=${userId}`)
     alert(res.data.length)    		
}

function getOne(userId){
		 axios.get(`${baseUrl}/user-orders/${userId}`)    
}
</script>

<style lang="scss">

</style>