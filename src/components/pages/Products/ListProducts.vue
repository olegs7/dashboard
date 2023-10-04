<template>
<div class="card">
	<div class="new-product">		
		<button @click="$router.push('/admin/new-product')">
			<span class="edit material-icons">add</span>New
		</button>
	</div>

		<table class="table table-hover">
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
					<td>{{product.id}}. </td>
					<td><img class="img" :src="product.images[0]"></td>
					<td>{{product.title}}</td>
					<td>{{product.price}}$</td>
					<td>{{product.description}}</td>
					<td>
						<router-link :to="`/admin/edit-product/${product.id}`">
							<span class="edit material-icons">edit</span>
						</router-link>					
						<span class="delete material-icons" @click='deleteProduct(product.id)'>delete</span>
					</td>
				</tr>
			</tbody>
			<div v-if="!store.state.isLoading">Loading...</div>
	</table>
</div>

</template>

<script setup>
import EditProduct from './EditProduct.vue'
import { ref,onMounted,computed } from 'vue' 
import axios from 'axios'
import { useStore } from 'vuex'
import { urlProducts } from '@/config'

const store = useStore()
const products = computed(() => store.state.products.products)

onMounted(()=>{
	store.dispatch('listProducts',5)
})

function deleteProduct(productId){
	store.dispatch('deleteProduct',productId)
}

</script>

<style lang="scss" scoped>

</style>