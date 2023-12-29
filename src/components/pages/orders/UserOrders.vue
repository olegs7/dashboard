<template>
	 <div class="card">	

	 	<div>
	 		<h5>USER {{userName}}</h5>
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
						<div class="block-edit">
							 	<span @click.prevent='addProduct(product._id)'>Add</span>										 	
						</div>							 						
						<div class="block-delete">
							<span class="delete" @click.prevent='deleteProduct(product._id)'>DELETE</span>						 
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
	store.dispatch('listProducts')
})

const users = computed(() => store.state.users.users)
const products = computed(() => store.state.products.products)

let userId = ''
let userName = ''

function addProduct(productId){
	let formData = new FormData()
	formData.append('userId',userId)
		axios.post(`${baseUrl}/user-orders/${productId}`,formData,{
			headers: {
                'Content-Type': 'text/html',
            }
	})
}

function deleteProduct(productId){
     axios.delete(`${baseUrl}/user-orders/${productId}?user=${userId}`)    		
}
</script>

<style lang="scss">

</style>