<script setup>
import MgButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
const open = (type) => {
  createMessage({ message: 'message消息提示', type,showClose:true,duration:0 })
}
</script>
<template>
  <mg-button @click="open('success')" type="success" > Success </mg-button>
  <mg-button @click="open('info')" type="info"> Info </mg-button>
  <mg-button @click="open('warning')" type="warning"> Warning </mg-button>
  <mg-button @click="open('error')" type="danger"> Danger </mg-button>
</template>