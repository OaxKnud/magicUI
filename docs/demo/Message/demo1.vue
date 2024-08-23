<script setup>
import MgButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
import { h } from 'vue'
const open = (type) => {
  createMessage({ message: 'message消息提示', type })
}
const open2 = (type) => {
  createMessage({ message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]), type})
}
</script>
<template>
  <mg-button @click="open('info')" type="info" > 打开消息提示 </mg-button>
  <mg-button @click="open2('info')" type="info"> VNode </mg-button>
</template>