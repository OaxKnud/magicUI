<template>
    <mg-link :underline="false" @click="clickTest" disabled>disabled点击事件</mg-link>
    <mg-link :underline="false" @click="clickTest">点击事件</mg-link>
</template>

<script setup>
import MgLink from '@/components/Link/Link.vue'

const clickTest=()=>{
    console.log("click Test")
}
</script>