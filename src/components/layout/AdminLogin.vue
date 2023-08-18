<template>
<div class="wrapper">
    <div class="card">
        <form>
        	<div class="login">LOGIN</div>
            <div>
                <label for="Email">
                	 <div>
                   		 <input type="email" class="form-control" 
                   		 				id="Email"
                   		 				v-model="email">
                   		 <span :class="{dataInput: email}">Email</span>
                   		 <div v-if="emailError" class="input-error">error login</div>
               		 </div>           			
                </label>               
            </div>
            <div>
                <label for="Password">
                	 <div>
                   		 <input type="password" class="form-control" 
                   		 				id="Password"
                   		 				v-model="password">
                   	 	 <span :class="{dataInput: password}">Password</span>
                   	 	 <div v-if="passwordError" class="input-error">error password</div>
                	</div>
                </label>               
            </div>
            <div class="form-group">
                <div class="button">
                    <button type="submit" class="btn btn-primary"
                    @click.prevent="SignIn">Sign in</button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('admin@gmail.com')
const password = ref('12345')

let emailError = ref(false)
let passwordError = ref(false)

function SignIn(){
	if(email.value == 'admin@gmail.com' && password.value == '12345'){
		router.push('/admin')
	}else if(email.value !== 'admin@gmail.com'){
		emailError.value = true
	}else{
		passwordError.value = true
	}
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