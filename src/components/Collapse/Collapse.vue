<template>
<div class="mg-collapse">
    <slot></slot>
</div>

</template>

<script setup lang="ts">

import { CollapseProps,CollapseActiveName,CollapseEmits ,collapseContextKey} from './types';
import {provide, ref,watch} from 'vue'

defineOptions({
    name:'MgCollapse'
})

//定义props
const props=defineProps<CollapseProps>()
const emits=defineEmits<CollapseEmits>()

//存储当前展开项的名称
const activeNames=ref<CollapseActiveName[]>([])

//编写监听watch,监听props是否发生变化
watch(()=>props.modelValue,()=>{
    // console.log("watch:",props.modelValue)
    activeNames.value=props.modelValue
},{immediate:true})

//定义设置活动折叠项数组的方法
const setActiveNames=(_activeNames:CollapseActiveName[])=>{
    activeNames.value=_activeNames
     // 根据是否启用手风琴模式，触发对应的事件
    // 如果启用了手风琴模式，只触发 update:modelValue 事件，并将数组的第一个值作为参数
    // 如果未启用手风琴模式，同时触发 update:modelValue 和 change 事件，将活动折叠项数组作为参数
    emits('change',activeNames.value)
    emits('update:modelValue',activeNames.value)
}

//编写handleItemClick函数
// 此时activeNames就是当前展开项，当用户点击items, 要对该数组进行修改，
// 如果item已经在数组中，则删除该项，如果不在，则增加该项目
const handleItemClick=(name:CollapseActiveName)=>{
    //传入子组件的name作为形参
    //拷贝一份activeNames
    const _activeNames=[...activeNames.value]

    //如果开启了手风琴模式
    if(props.accordion){
        //如果name为展开项,那么收起
        //如果name不为展开项,那么展开name,收起_activeNames中的item
        setActiveNames([activeNames.value[0]===name? '':name])
    }else{//未开启手风琴模式
        //如果name为展开项,那么将其从_activeNames中删除
        const index=_activeNames.indexOf(name)
        if(index>-1){//name为展开项,删除name
            _activeNames.splice(index,1)
        }else{//name不为展开项.将其加入 _activeNames
            _activeNames.push(name)
        }
        // 更新活动折叠项数组
        setActiveNames(_activeNames);
    }
    // console.log("activeNames:",activeNames.value)
}

//父组件Collapse向子组件provide的数据和方法
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})

</script>