<script setup>
import { h } from 'vue'
import MgDropdown from '@/components/Dropdown/Dropdown.vue'
import MgIcon from '@/components/Icon/Icon.vue'
import MgButton from '@/components/Button/Button.vue'
const options = [
    { key: 1, label: 'Action 1' },
    { key: 2, label: 'Action 2' },
    { key: 3, label: 'Action 3' },
    { key: 4, label: 'Action 4'},
    { key: 5, label: 'Action 5' },
]
</script>
<template>
    <div>
        <MgDropdown placement="bottom" :menu-options="options">
            <MgButton type="primary" size="small" style="font-size: 15px;"> 下拉菜单 <mg-icon icon="arrow-down"></mg-icon></MgButton>
        </MgDropdown>
    </div>
</template>
<style>
  .mg-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>