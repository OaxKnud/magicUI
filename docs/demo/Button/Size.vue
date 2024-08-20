<template>
    <div class="block">
        <Button type="primary" size="small">small</Button>
        <Button type="primary" size="medium">medium</Button>
        <Button type="primary" size="large">large</Button>
        <Button type="primary">default</Button>
    </div>
    <div class="block">
        <Button type="primary" size="small" plain>small</Button>
        <Button type="primary" size="medium" plain>medium</Button>
        <Button type="primary" size="large" plain>large</Button>
        <Button type="primary" plain>default</Button>
    </div>
</template>
<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<style>
.block {
    margin-bottom: 10px;
}
</style>