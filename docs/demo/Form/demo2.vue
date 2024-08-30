<template lang="">
    <div>
      <mg-form :model="model" :rules="rules">
        <mg-form-item label="邮箱" prop="email">
          <input v-model="model.email" class="message-input"></input>
        </mg-form-item>
        <mg-form-item label="密码" prop="password">
          <input v-model="model.password" type="password" class="message-input"></input>
        </mg-form-item>
        <div>
        <div class="button-style">
            <mg-button type="primary" @click="submitForm">Submit</mg-button>
            <mg-button type="info" @click="resetForm">Reset</mg-button>
        </div>
        </div>
      </mg-form>
    </div>
</template>
<script setup lang="ts">
import MgForm from '@/components/Form/Form.vue'
import MgFormItem from '@/components/Form/FormItem.vue'
import MgButton from '@/components/Button/Button.vue'
import { reactive } from "vue";
const model = reactive({
  email: '',
  password: ''
})
const rules = {
  email: [{ type: 'string', required: true }],
  password: [{ required: true, message: 'Please enter your password'},
  { min: 6, message: 'Password should be at least 6 characters' },]
}
const submitForm=()=>{
  console.log("model:",model.email,model.password)
}

const resetForm=()=>{
  model.email=''
  model.password=''
}

</script>


<style>
.button-style {
  padding-left: 170px;
}
.message-input {
      margin-top: 3px;
      border: none;
      outline: none;
      width: 250px;
      border: 1px solid #ddd;
      height: 32px;
      box-sizing: border-box;
    }
</style>