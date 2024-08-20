<template>
<footer class="mg-footer" :style="footerHeight">
<slot>Footer</slot>
</footer>
</template>

<script setup lang="ts">
import { FooterHeightProps } from './types';
import {computed} from 'vue'

defineOptions({
    name:'MgFooter'
})
const props=defineProps(FooterHeightProps)

const footerHeight=computed(()=>{
    return {
        height: (props.height || 60) + 'px'
    }
})
</script>