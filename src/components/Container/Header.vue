<template>
    <header class="mg-header" :style="headerHeight">
        <slot>Header</slot>
    </header>
</template>


<script setup lang="ts">
import { HeaderHeightProps } from './types'
import { computed } from 'vue'

defineOptions({
    name: 'MgHeader'
})

const props = defineProps(HeaderHeightProps)
//计算header的高度
const headerHeight = computed(() => {
    return {
        height: (props.height || 60) + 'px'
    }
})

</script>