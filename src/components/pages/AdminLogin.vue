<template>
<div class="wrapper">
    <div class="card">
        <form>
        	<div class="login">Login</div>
            <div>
                <label for="email">
                	 <div>
                   		 <input type="email" class="form-control" 
                   		 				id="email"
                   		 				v-model="user.email">
                   		 <span :class="{dataInput: user.email}">Email</span>
                   		 <div v-if="emailError" class="input-error">error login</div>
               		 </div>           			
                </label>               
            </div>
            <div>
                <label for="password">
                	 <div>
                   		 <input type="password" class="form-control" 
                   		 				id="password"
                   		 				v-model="user.password">
                   	 	 <span :class="{dataInput: user.password}">Password</span>
                   	 	 <div v-if="passwordError" class="input-error">error password</div>
                	</div>
                </label>               
            </div>
            <div class="form-group">
                <div class="button">
                    <button type="submit" class="btn btn-primary"
                    @click.prevent="signIn">Sign in</button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { baseUrl } from '@/config'

const router = useRouter()

let user = ref({
	email: '',
  password: '',
})

let emailError = ref(false)
let passwordError = ref(false)

function signIn(){ 
	axios.post(`${baseUrl}/login`,{
		body: user.value
	})
		.then(res => {
			if(typeof res.data.user !== 'undefined') {
				router.push('/admin')
		}
	})
		.catch(err => console.log(err))
}
</script>

<style lang="scss" scoped>
	.wrapper {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	
	.card {
		border-radius: 15px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

		form {
			width: 300px;
			padding: 20px;

			.login {
				text-align: center;
				font-size: 23px;	
				margin-bottom: 20px;		
			}
			
			label {
				position: relative;
				width: 100%;
			}

			input {
				margin-top: 10px;
			}

			input:focus + span,
			.dataInput {
				font-size: 12px;
				top: 0px;
				color: #007bff;
			}

			.input-error {
				font-size: 14px;
				color: red;
			}

			span {
				font-family: 'Poppins', sans-serif;
				font-size: 14px;
				position: absolute;
				left: 15px;
				top: 18px;
				color: #555;
				background-color: #fff;
				transition: all 0.2s ease-in-out;
				padding: 0 4px;
			}

			button {
				width: 100%;
			}
	  }

  }
}
</style>