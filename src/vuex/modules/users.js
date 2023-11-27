import axios from 'axios'
import { baseUrl } from '@/config'

export default {
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
				let res = await axios.get(`${baseUrl}/users`)  			
       		commit('updateUsers',res.data)	
       		this.state.isLoading = true     			
 		}	 
	},
	getters: {
		allUsers(state){
			return state.users
		}
	}
}