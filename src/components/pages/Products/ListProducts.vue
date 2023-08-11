<template>
<div class="card">
	<div class="new-product">		
		<button @click="$router.push('/list-products')">+Add Product</button>
	</div>

		<table class="table table-hover">
		<thead>
				<tr>
					<th>Image</th>
					<th>Name</th>
					<th>Price</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(product,index) in products">
					<td>img</td>
					<td>{{product.id}}. {{product.title}}</td>
					<td>{{product.price}}</td>
					<td>{{product.description}}</td>
					<td>
						<router-link :to="`/edit-product/${product.id}`">
							<span class="edit material-icons">edit</span>
						</router-link>					
						<span class="delete material-icons" @click='deleteProduct(product.id)'>delete</span>
					</td>
				</tr>
			</tbody>
			<div v-if="!isLoading">Loading...</div>
	</table>
</div>

</template>

<script setup>
import {ref,onMounted} from 'vue' 
import EditProduct from './EditProduct.vue'
import axios from 'axios'

const products = ref([])	
let isLoading = ref(false)

onMounted(()=>{
	ListProducts()
})
function ListProducts(){
				 axios.get('https://dummyjson.com/products?limit=3')
    				.then(res => {
       		products.value = res.data.products	
       		console.log(products)
       		isLoading = true
     	})
 		}
function deleteProduct(userId){
     	if(confirm('Delete this user?')){
     		axios.delete(`https://dummyjson.com/products/${productId}`)
     			.then(res => {
     				  ListProducts()  //update products
     		 })
     			.catch(err => alert(err))
     	 }
     }
</script>

<style lang="scss" scoped>
.new-product {
	display: flex;
	align-items: center;
	justify-content: end;

	button {
		font-size: 18px;
		background-color: green;
		color: white;
		border-radius: 5px;
		padding: 3px 10px;
	}
}	

.card {
	padding: 15px;

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

		td:last-child {
			display: flex;
		}

			.delete {
				margin-left: 10px;
				cursor: pointer;
		}
	}
}
</style>