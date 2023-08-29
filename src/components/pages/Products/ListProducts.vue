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
			<div v-if="!isLoading">Loading...</div>
	</table>
</div>

</template>

<script setup>
import {ref,onMounted} from 'vue' 
import EditProduct from './EditProduct.vue'
import axios from 'axios'
import {urlProducts} from '@/config'

const products = ref([])
let isLoading = ref(false)


onMounted(()=>{
	listProducts()
})

function listProducts(){
				 axios.get(`${urlProducts}?limit=3`)
    				.then(res => {
       		products.value = res.data.products	
       		isLoading = true
     	})
 		}
 		
function deleteProduct(productId){
     	if(confirm('Delete this user?')){
     		axios.delete(`${urlProducts}/${productId}`)
     			.then(res => {
     				  listProducts()  //update products
     		 })
     			.catch(err => alert(err))
     	 }
     }
</script>

<style lang="scss" scoped>
.new-product {
	display: flex;
	align-items: center;

	button {
		display: flex;
		font-size: 18px;
	}
}	

.card {
	padding: 20px;

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

		th {
			// text-align: center;
			border-bottom: 1px solid #dee2e6;
		}	

		td:last-child {
			display: flex;
		}

		tbody tr {
			border-bottom: 1px solid #dee2e6;
		}

		.img {
			width: 100px;
			height: 100px;
		}

			.delete {
				margin-left: 10px;
				cursor: pointer;
		}
	}
}
</style>