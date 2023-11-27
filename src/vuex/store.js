import { createStore } from 'vuex'
import axios from 'axios'
import { baseUrl } from '@/config'
import users from './modules/users.js'
import products from './modules/products.js'

export default createStore({
	modules: {
		users,
		products
	}
})