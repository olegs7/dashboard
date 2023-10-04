<template>
	<div class="card">
		<h5 slot="header" class="card-title">Edit user</h5>
      <form>
       <div class="form-group">
        <label for="file">
           <span class="file material-icons">account_circle</span>
           <input type="file" class="form-control-file" 
               id="file"
               name='files'
              @change='uploadFile'>
        </label>       
      </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-1 col-form-label">Name</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" 
             id="inputEmail3" 
             placeholder="name"
             v-model='user.name'>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Email</label>
    <div class="col-sm-5">
      <input type="email" class="form-control"
             id="inputPassword3" 
             placeholder="email"
             v-model='user.email'>
    </div>
  </div>
   <div class="form-group row">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Phone</label>
    <div class="col-sm-5">
      <input type="text" class="form-control"
             id="inputPassword3" 
             placeholder="phone"
             v-model='user.phone'>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-6">
      <button type="submit" 
              class="btn btn-primary"
              @click.prevent='updateUser'>Update</button>
    </div>
  </div>
    </form>
	</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import {baseUrl} from '@/config'

const route = useRoute()

let userId = ''
let user = ref({
	name: '',
	email: '',
	phone: '',
})

onMounted(()=>{
	userId = route.params.id
	getUser(route.params.id)
})

function getUser(userId){
        axios.get(`${baseUrl}/users/${userId}`)
          .then(res => {
            user.value = res.data 
        })
      }

function updateUser(){
        axios.put(`${baseUrl}/users/${userId}`,user)
          .then(res => res.data)
          .catch(err => alert(err))
      }

</script>

<style lang="scss" scoped>
.card	{
	padding: 20px;
	
.button-update {
	margin-top: 10px;
 }

 .col-sm-1 {
    max-width: none;
  }
}
</style>