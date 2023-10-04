import axios from 'axios'
import { baseUrl,urlProducts } from '@/config'

export default {
	state: {
		users: [],
		products: [],
		isLoading: false
	},
	mutations: {
		updateUsers(state,users){
			state.users = users
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
     
	},
	getters: {
		allUsers(state){
			return state.users
		}
	}
}