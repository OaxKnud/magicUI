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
        title: '提示',
        message: '此操作将永久删除该文件, 是否继续?',
        type:'warning',
        showCancelButton:true,
    }).then(() => {
        console.log('MessageBox resolve')
        createMessage({ message: '删除成功!', type:'success' })
    }).catch(() => {
        console.log('MessageBox reject')
        createMessage({ message: '已取消删除!', type:'info' })
    })
}
</script>