<template>
    <mg-rate @changeRateNums="changeRate"></mg-rate>
</template>
<script setup lang="ts">
import MgRate from '@/components/Rate/Rate.vue'
import { createMessage } from '@/components/Message/method'
const changeRate=(rateValue)=>{
    console.log("rateValue:",rateValue)
    createMessage({
        message: `此时获取得分:${rateValue}`, type:'info'
    })

}
</script>