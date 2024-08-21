<template>
    <div class="mg-collapse-item">
        <div class="mg-collapse-item-title"         
        :class="{
            'is-active':isActive
        }"
        @click="handleClick">
            <!-- title -->
            <slot name="title">{{ props.title }}</slot>
            <!-- icon -->
            <mg-icon icon="angle-right" class="header-angle"></mg-icon>
        </div>
        <!-- content -->
        <div class="mg-collapse-item-content" v-show="isActive" >
            <slot></slot>
        </div>
    </div>
</template>



<script setup lang="ts">
import { inject } from 'vue';
import MgIcon from '../Icon/Icon.vue'
import {CollapseItemProps,collapseContextKey} from './types'
import {computed} from 'vue'

defineOptions({
    name: 'MgCollapseItem'
})

const props=defineProps<CollapseItemProps>()

// 从 Collapse 组件中注入上下文数据
const collapseContext=inject(collapseContextKey)

//判断是否展开content
const isActive=computed(()=>{
    return collapseContext?.activeNames.value.includes(props.name)
})

//处理点击事件
const handleClick=()=>{
    collapseContext?.handleItemClick(props.name)
}

</script>