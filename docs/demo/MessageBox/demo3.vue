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
        message: '请输入邮箱',
        showCancelButton:true,
        isInput:true,
        inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage:'邮箱格式错误'
    }).then((inputText) => {
        console.log('MessageBox resolve')
        createMessage({ message: `你的邮箱是: ${inputText}`, type:'success' })
    }).catch(() => {
        console.log('MessageBox reject')
        createMessage({ message: '取消输入!', type:'info' })
    })
}
</script>