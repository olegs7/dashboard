import { createStore } from 'vuex'
import axios from 'axios'
import { baseUrl } from '@/config'

export default createStore({
	state: {
		users: [],
		isLoading: false
	},
	mutations: {
		updateUsers(state,users){
			state.users = users
		}
	},
	actions: {
		async listUsers({commit}){
				 let res = await axios.get(`${baseUrl}/users?_limit=3`)   			
       			commit('updateUsers',res.data)	
       			this.state.isLoading = true     			
 		},
 		deleteUser({commit},userId,){
     	if(confirm('Delete this user?')){
     		console.log(userId)
     		axios.delete(`${baseUrl}/users/${userId}`)
     			.then(res => {
     				   commit('updateUsers')
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