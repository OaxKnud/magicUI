<template>
    <aside class="mg-aside" :style="AsideWidth">
        <slot>Aside</slot>
    </aside>
</template>
<script setup lang="ts">
import {AsideWidthProps} from './types'
import {computed} from 'vue'
defineOptions({
    name:'MgAside'
})
const props=defineProps(AsideWidthProps)
const AsideWidth=computed(()=>{
    return {
        width:(props.width || 300) + 'px'
    }
})

</script>