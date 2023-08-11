<template>
	<div class="card">
		<h5 slot="header" class="card-title">New user</h5>
	<form>
      <div class="row">
        <div class="col-md-4">
          <input type="text" class="form-control"
                    label="name"
                    placeholder="name"
                    v-model="user.name"/>         
        </div>
        <div class="col-md-4">
          <input type="email" class="form-control"
                    label="email"
                    placeholder="email"
                    v-model="user.email"/>       
        </div>
        <div class="col-md-4">
          <input type="text" class="form-control"
                    label="phone"
                    placeholder="phone"
                    v-model="user.phone"/>
        </div>
      </div>       
      <div class="button-update">
        <button type="submit" 
                class="btn btn-info btn-fill float-right"
                @click.prevent="createUser"> Create user
        </button>
      </div>
    </form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

let user = ref({
	name: '',
	email: '',
	phone: '',
})

function createUser(){
      if(user.value.name != '' && user.value.email != '' && user.value.phone != ''){
        axios.post('https://jsonplaceholder.typicode.com/users',{
          body: user.value
      })
         .then(res => res)
         .catch(err => alert(err)) 
          user.value = ''  
      }
    }
</script>

<style lang="scss" scoped>
.card	{
	padding: 15px;

	.button-update {
  	margin-top: 10px;
 }
}
</style>