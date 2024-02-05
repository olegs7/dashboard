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
					<td><img class="img" :src="`${baseUrl}/`+ product.file" alt="no img"></td>
					<td>{{product.name}}</td>
					<td>{{product.price}}$</td>
					<td>{{product.description}}</td>
					<td>
						<div>		
							<span class="btn btn-small btn-danger"
							 			@click.prevent='dltProduct(product._id)'>&minus;
							</span>	
							<Count/>				
							<span class="btn btn-small btn-success" 
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
import Count from '@/components/Count.vue'

const route = useRoute()
const store = useStore()

onMounted(() => {
	userId = route.params.id
	userName = route.query.name
	store.dispatch('listUsers')
	store.dispatch('listProducts')
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
</script>

<style lang="scss" scoped>
.card {
	padding: 20px;

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
	}

	.button {
		background-color: #3e6ae1;
	}
}
</style>