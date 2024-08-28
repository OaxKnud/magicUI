<script setup>
import { h } from 'vue'
import MgDropdown from '@/components/Dropdown/Dropdown.vue'
import MgIcon from '@/components/Icon/Icon.vue'
// import MgButton from '@/components/Button/Button.vue'
const options = [
    { key: 1, label: 'Action 1' },
    { key: 2, label: 'Action 2' },
    { key: 3, label: 'Action 3' },
    { key: 4, label: 'Action 4', disabled: true },
    { key: 5, label: 'Action 5', divided: true },
]
</script>
<template>
    <div>
        <MgDropdown placement="bottom" :menu-options="options">
            <!-- <MgButton type="primary"> 下拉菜单 </MgButton> -->
            <span class="mg-dropdown-link">
                下拉菜单<mg-icon icon="arrow-down" style="font-size: 12px;"></mg-icon>
            </span>
        </MgDropdown>
    </div>
</template>
<style>
  .mg-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>