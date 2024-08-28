<script setup>
import { h } from 'vue'
import MgDropdown from '@/components/Dropdown/Dropdown.vue'
import MgIcon from '@/components/Icon/Icon.vue'
import MgButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
const options = [
    { key: 1, label: 'Action 1'},
    { key: 2, label: 'Action 2'},
    { key: 3, label: 'Action 3'},
    { key: 4, label: 'Action 4'},
    { key: 5, label: 'Action 5'},
]

const selectItem=(item)=>{
    console.log("item:",item)
    createMessage({
        message: `已选择:${item.label}`, type:'info'
    })
}

const visibleChange=(e)=>{
    console.log("visibleChange!",e)
}
</script>
<template>
    <div>
        <MgDropdown placement="bottom" :menu-options="options" :hideAfterClick="true" @select="selectItem" @visible-change="visibleChange">
            <MgButton type="primary" size="small" style="font-size: 15px;"> 点击事件-下拉菜单 <mg-icon icon="arrow-down"></mg-icon></MgButton>
        </MgDropdown>
    </div>
</template>
<style>
</style>