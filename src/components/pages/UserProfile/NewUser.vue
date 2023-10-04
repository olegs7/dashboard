<template>
	<div class="card">
		<h5 slot="header" class="card-title">New user</h5>
    <form>
       <div class="form-group">
        <label for="file">
           <span class="file material-icons">account_circle</span>
           <input type="file" class="form-control-file" 
               id="file"
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
              @click.prevent='createUser'>Add user</button>
    </div>
  </div>
    </form>
	</div>

</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/config'

let user = ref({
	name: '',
	email: '',
	phone: '',
  file: ''
})

function uploadFile(){
  user.file = file.files[0]
}

function createUser(){
      if(user.value.name != '' && user.value.email != '' && user.value.phone != ''){
        let formData = new FormData()
        formData.append('file',user.file)
        formData.append('email',user.value.email)
        formData.append('phone',user.value.phone)
          axios.post(`${baseUrl}/users`,formData,{
            headers: {
              'Content-Type': 'multipart/form-data',
          }
      })
         .then(res => res)
         .catch(err => alert(err)) 
          user.value = file.value = ''  
      }
    }
</script>

<style lang="scss" scoped>
.card	{
	padding: 15px;

  .file {
    font-size: 30px;
  }

  .col-sm-1 {
    max-width: none;
  }
}
</style>