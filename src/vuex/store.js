import { createStore } from 'vuex'
import axios from 'axios'
import { baseUrl,urlProducts } from '@/config'

export default createStore({
	state: {
		users: [],
		products: [],
		isLoading: false
	},
	mutations: {
		updateUsers(state,users){
			state.users = users
		},
		updateProducts(state,products){
			state.products = products
		}
	},
	actions: {
		async listUsers({commit},limit){
				 let res = await axios.get(`${baseUrl}/users?_limit=${limit}`)   			
       			commit('updateUsers',res.data)	
       			this.state.isLoading = true     			
 		},
 		deleteUser({commit},userId){
     	if(confirm('Delete this user?')){
     		axios.delete(`${baseUrl}/users/${userId}`)
     			.then(res => {
     				   commit('updateUsers')
     		 })
     			.catch(err => alert(err))
     	 }
     },
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
		allUsers(state){
			return state.users
		}
	}
})