<template>
    <div class="layout-icon">
        <mg-icon icon="edit" size="2x"></mg-icon>
        <mg-icon icon="share" size="2x"></mg-icon>
        <mg-icon icon="trash-can" size="2x"></mg-icon>
        <mg-button icon="search" type="info"> 搜索</mg-button>
    </div>
</template>
<script setup>
import MgIcon from '@/components/Icon/Icon.vue'
import MgButton from '@/components/Button/Button.vue'
</script>
<style>
.layout-icon {
  display: flex;
  gap: 30px; /* 或任何你想要的间距大小 */
}
</style>