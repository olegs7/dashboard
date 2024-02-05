<template>
	<div class="card">
    <div class="title">
      <span class="arrow-left" @click="$router.push('/admin/list-users')">&larr;</span>
      <h5 slot="header" class="card-title">New user</h5>
    </div>	
    <form>
       <div class="form-group">
        <label for="file">
           <input type="file" name='file' class="form-control-file" 
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
      <input type="number" class="form-control"
             id="inputPassword3" 
             placeholder="phone"
             v-model='user.phone'>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-6">
      <button type="submit" 
              class="btn btn-primary"
              @click.prevent='createUser' 
              :disabled='!user.name || !user.email || !user.phone'>Add user</button>
    </div>
  </div>
    </form>
	</div>

</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { baseUrl } from '@/config'

const router = useRouter()

let user = reactive({
  file: '',
	name: '',
	email: '',
	phone: '',
})

function uploadFile(){
  user.file = file.files[0]
}

function createUser(){     
        let formData = new FormData()
        const { file,name,email,phone } = user
          formData.append('file',file)
          formData.append('name',name)
          formData.append('email',email)
          formData.append('phone',phone)
           axios.post(`${baseUrl}/users`,formData,{
              headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
          .then(res => res)
            user = ''
            router.push('/admin/list-users')
          .catch(err => alert(err)) 
    }

</script>

<style lang="scss" scoped>
.card	{
	padding: 15px;

  .title {
    display: flex;
    gap: 5px;
    margin-bottom: 30px;
  }

  input {
    width: auto;
  }

  .arrow-left {
    cursor: pointer;
  }

  .col-sm-1 {
    max-width: none;
  }

}
</style>