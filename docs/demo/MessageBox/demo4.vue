<template>
    <mg-button @click="showMessageBox">点击打开MessageBox:VNode</mg-button>
</template>
<script setup>
import MgMessageBox from '@/components/MessageBox/MessageBox'
import MgButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
import { h } from 'vue'
const showMessageBox = () => {
    MgMessageBox({
        // 确认文字、标题和内容
        title: '提示',
        message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
        ]),
        confirmButtonLoading:true,
        beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
                instance.props.confirmButtonLoading = true;
                instance.props.confirmButtonText = '执行中...';
                setTimeout(() => {
                    done();
                    setTimeout(() => {
                  instance.props.confirmButtonLoading = false;
                }, 300);
                }, 3000);
            } else {
                done();
            }
        }
    }).then(() => {
        console.log('MessageBox resolve')
        createMessage({ message: `action:confirm`, type: 'info' })
    }).catch(() => {
        console.log('MessageBox reject')
        createMessage({ message: '取消输入!', type: 'info' })
    })
}
</script>