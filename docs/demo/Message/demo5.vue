<script setup>
import MgButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
import { h } from 'vue'

const open = (type) => {
  createMessage({ message: "<strong>这是 <i>HTML</i> 片段</strong>", type,dangerouslyUseHTMLString:true})
}
const open2 = (type) => {
  createMessage({ message: "<strong>这是 <i>HTML</i> 片段</strong>", type,dangerouslyUseHTMLString:false})
}
</script>
<template>
  <mg-button @click="open('info')" type="info" > 插入HTML片段 </mg-button>
  <mg-button @click="open2('info')" type="info" > 插入非HTML片段 </mg-button>
</template>