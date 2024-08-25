<template>
    <mg-button @click="showMessageBox">点击打开MessageBox</mg-button>
</template>
<script setup>
import MgMessageBox from '@/components/MessageBox/MessageBox'
import MgButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
const showMessageBox = () => {
    MgMessageBox({
        // 确认文字、标题和内容
        title: '标题名称',
        message: '这是一段内容'
    }).then(() => {
        console.log('MessageBox resolve')
        createMessage({ message: 'action: confirm', type:'info' })
    }).catch(() => {
        console.log('MessageBox reject')
        createMessage({ message: 'action: cancel', type:'info' })
    })
}
</script>