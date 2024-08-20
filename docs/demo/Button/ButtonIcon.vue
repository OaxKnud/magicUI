<template>
    <div class="block">
        <Button type="primary" icon="edit"></Button>
        <Button type="primary" icon="share"></Button>
        <Button type="primary" icon="trash-can"></Button>
        <Button type="primary" icon="search">搜索</Button>
        <Button type="primary">上传 <MgIcon icon="upload"></MgIcon></Button>
    </div>
</template>
<script setup>
import Button from '@/components/Button/Button.vue'
import MgIcon from '@/components/Icon/Icon.vue'

</script>
<style>
.block {
    margin-bottom: 10px;
}
</style>