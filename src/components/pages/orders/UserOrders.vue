<template>
	 <div class="card">	

	 	<div class="title">
	 		<span class="arrow-left" @click="$router.push('/admin/orders')">&larr;</span>
	 		<h5><strong>ORDER:</strong> {{userName}}</h5>
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
						<div>		
							<span class="btn btn-small" :class="{disabled: product.counter < 1}"
							 			@click.prevent='dltProduct(product._id)'>&minus;
							</span>
							<span class="count">{{product.counter}}</span>
							<span class="btn btn-small" 
							 			@click.prevent='addProduct(product._id)'>&plus;
							</span>	
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

onMounted(() => {
	userId = route.params.id
	userName = route.query.name
	userIndex = route.query.index
	store.dispatch('listProducts')
	store.dispatch('listUsers')
})

let userId = ''
let userName = ''
let userIndex = ''

const users = computed(() => store.state.users.users)

const products = computed(() => {
		let prod = store.state.products.products
				prod.map(el => (el.counter = 0,el))
			return prod
	}
)

async function addProduct(productId){
	let formData = new FormData()
	formData.append('userId',userId)
		let res = await axios.post(`${baseUrl}/user-orders/${productId}`,formData,{
			headers: {
                'Content-Type': 'text/html',
            }
	})
		let targetProd = products.value.filter(el => el._id === productId)
		let count = targetProd[0].counter = res.data.length
}

async function dltProduct(productId){
     let res = await axios.delete(`${baseUrl}/user-orders/${productId}?user=${userId}`)
     let targetProd = products.value.filter(el => el._id === productId)
		 let count = targetProd[0].counter = res.data.length
}
</script>

<style lang="scss" scoped>
.card {
	padding: 20px;

	.title {
		display: flex;
		gap: 5px;
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

		.count {
			margin: 0px 5px;
			padding: 5px 15px;
			border: 1px solid gray;
			border-radius: 5px;
		}
	}

	.btn {
		padding: 0px;
		font-size: 25px;
	}
}
</style>