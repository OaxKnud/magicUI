<template>
<section class="mg-container" :class="containerClass">
    <slot></slot>
</section>
</template>

<script setup lang="ts">
import { computed, useSlots} from 'vue'
import { containerProps } from './types';
import { onMounted } from 'vue';
import type { Component, VNode } from 'vue'
//定义组件名称
defineOptions({
    name:'MgContainer'
})
//定义组件props
const props=defineProps(containerProps)

const slots=useSlots()
//计算Container组件类型水平还是垂直
//判断方法：判断slot中是否存在header和footer，如果存在那么设置为垂直，否则水平;判断props为垂直还是水平
const isVertical=computed(()=>{
    //判断slot中的节点是否存在header和footer
    console.log("slots:",slots)
    //如果插槽存在且有默认插槽内容
    if(slots && slots.default){
        const vNodes: VNode[] = slots.default()
        console.log("vNodes:",vNodes)
        // 遍历 vNode节点数组，如果存在el-header/el-footer
        return vNodes.some(vNode => {
        // 将 vNode.type 断言为 Component 类型，然后获取组件类型属性 name
        const tag = (vNode.type as Component).name
        return tag === 'MgHeader' || tag === 'MgFooter'
        })
    }
    //接收props对象,并判断direction的值
    if(props.direction==="horizontal"){
        return false
    }else if(props.direction==="vertical"){
        return true
    }

})

const containerClass = computed(() => {
  return {
    'mg-container-horizontal': !isVertical.value,
    'mg-container-vertical': isVertical.value
  }
})
    
onMounted(()=>{
    console.log("isVertical.value:",isVertical.value)
})

</script>