import axios from 'axios'
import { baseUrl } from '@/config'

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
		async listProducts({commit}){
				 let res = await axios.get(`${baseUrl}/products`) 
       		commit('updateProducts',res.data)
       		this.state.isLoading = true
 		}
	},
	getters: {
		allProducts(state){
			return state.products
		}
	}
}