<script setup>
import MgButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
import { h } from 'vue'
const open = (type) => {
  let message=createMessage({ message: 'message消息提示', type,onClose:()=>{
    // console.log("onClose")
    createMessage({ message: 'onClose弹出新的消息提示', type })
  } })
}

</script>
<template>
  <mg-button @click="open('info')" type="info" > onClose </mg-button>
  
</template>