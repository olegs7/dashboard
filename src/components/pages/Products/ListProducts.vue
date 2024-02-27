<template>
	<div class="card">
		<div class="new-product">
			  <div class="new-product__new" @click="$router.push('/admin/new-product')">
				  <Button class="button" button='new-product'/>
			  </div>
			  <Search @clearSearch="clearSearch" v-model="input"/>
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
				<tr v-for="(product,index) in products" :key="product._id">
					<td>{{index + 1}}.</td>
					<td><img class="img" :src="`${baseUrl}/`+ product.file" alt="no img"></td>
					<td>{{product.name}}</td>
					<td>{{product.price}}$</td>
					<td>{{product.description}}</td>
					<td>
						<router-link :to="`/admin/edit-product/${product._id}`">							
							<Button class="button-edit" button='edit'/>
						</router-link>								 						
							<Button class="button-delete"
										 @-click="deleteProduct(product._id)" 
											button='&times;'/>									
					</td>
				</tr>
			</tbody>
			<div v-if="!store.state.isLoading">Loading...</div>
			<h5 v-if="products.length === 0">No products</h5>
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
	store.dispatch('listProducts')
})

const clearSearch = () => {
	input.value = ''
}

const products = computed(() => {
	let listProducts = store.state.products.products
    return listProducts.filter((elem) => {
		return elem.name.toLowerCase().includes(input.value.toLowerCase())
	})
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
.card {
	padding: 20px;

	.new-product {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.search {
		position: relative;
	}

	.clear {
		position: absolute;
		top: 7px;
		right: 10px;
		cursor: pointer;
	}

	.table-products {
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

		td:nth-child(5){
			max-width: 200px;
		}

		td:last-child {
			display: flex;
			justify-content: center;
		}

		tbody tr {
			border-bottom: 1px solid #dee2e6;
		}

		tbody td {
			height: 75px;
			align-items: center;
			vertical-align: middle;
			padding: 10px;
		}

		.img {
			width: 50px;
			height: 50px;
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