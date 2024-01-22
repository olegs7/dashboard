<template>
<div class="card">
		<div class="new-product" @click="$router.push('/admin/new-product')">
			  <div class="new-product__new">
				  <span class="material-icons">add</span>New product
			  </div>
		</div>

		<table class="table-products table-hover">
		<thead>
				<tr>
					<th>Id</th>
					<th>Image</th>
					<th>Name</th>
					<th>Price</th>
					<th>Description</th>
				</tr>
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
							<router-link :to="`/admin/edit-product/${product._id}`">							
								<span class="edit material-icons">edit</span>
							  <span>EDIT</span>		
							</router-link>		
						</div>							 						
						<div class="block-delete">
							<span class="delete" @click='deleteProduct(product._id)'>&times;</span>						 
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

const store = useStore()
const products = computed(() => store.state.products.products)

onMounted(()=>{
	store.dispatch('listProducts')
})

function deleteProduct(productId){
     	if(confirm('Delete this user?')){
     		axios.delete(`${baseUrl}/products/${productId}`)
     			.then(res => res)
     			.catch(err => alert(err))
     	 }
     }

</script>

<style lang="scss" scoped>

</style>