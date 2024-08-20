<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>
<template>
<div class="basic block">
<Button type="primary"> Primary </Button>
  <Button type="success"> Success </Button>
  <Button type="warning"> Warning </Button>
  <Button type="danger"> Danger </Button>
  <Button type="info"> Info </Button>
</div>
</template>
<style>
.block {
  margin-bottom: 10px;
}
</style>