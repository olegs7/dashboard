import axios from 'axios'
import { baseUrl,urlProducts } from '@/config'

export default {
	state: {
		products: [],
		isLoading: false
	},
	mutations: {
		updateProducts(state,products){
			state.products = products
		}
	},
	actions: {
		listProducts({commit},limit){
				 axios.get(`${urlProducts}?limit=${limit}`)
    				.then(res => {
       		commit('updateProducts',res.data.products)		
       		this.state.isLoading = true
     	})
 		},
 		deleteProduct({commit},productId){
     	if(confirm('Delete this user?')){
     		axios.delete(`${urlProducts}/${productId}`)
     			.then(res => {
     				  commit('updateProducts')  //update products
     		 })
     			.catch(err => alert(err))
     	 }
     }
	},
	getters: {
		
	}
}