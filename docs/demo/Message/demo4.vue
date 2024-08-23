<script setup>
import MgButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
import { h } from 'vue'
const open = (type) => {
  createMessage({ message: 'message文字居中', type ,center:true})
}
</script>
<template>
  <mg-button @click="open('info')" type="info" > 文字居中 </mg-button>
</template>