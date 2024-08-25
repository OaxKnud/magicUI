<template>
    <mg-button @click="showMessageBox">点击打开MessageBox:HTML</mg-button>
</template>
<script setup>
import MgMessageBox from '@/components/MessageBox/MessageBox'
import MgButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
import {h} from 'vue'
const showMessageBox = () => {
    MgMessageBox({
        // 确认文字、标题和内容
        title: '提示',
        message: '<strong>这是 <i>HTML</i> 片段</strong>',
        dangerouslyUseHTMLString:true

    }).then(() => {
        console.log('MessageBox resolve')
        createMessage({ message: `action:confirm`, type:'info' })
    }).catch(() => {
        console.log('MessageBox reject')
        createMessage({ message: '取消输入!', type:'info' })
    })
}
</script>